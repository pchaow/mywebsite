"use server";

import { PORTFOLIO_DATA, Testimonial } from "@/data/portfolio-data";
import { isSupabaseConfigured, supabase, GuestbookMessageRecord } from "@/lib/supabase";
import { sendInstantNotification } from "@/lib/notifications";

// In-memory / Fallback storage for demonstration when Supabase is not connected
let memoryMessages: GuestbookMessageRecord[] = PORTFOLIO_DATA.initialTestimonials.map(
  (t) => ({
    id: t.id,
    name: t.name,
    role: t.role,
    email: undefined,
    message: t.message,
    visibility: t.visibility,
    status: t.status,
    pinned: Boolean(t.pinned),
    created_at: new Date().toISOString(),
  })
);

export async function getApprovedTestimonials(): Promise<Testimonial[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("guestbook_messages")
        .select("id, name, role, message, visibility, status, pinned, created_at")
        .eq("status", "approved")
        .eq("visibility", "public")
        .order("pinned", { ascending: false })
        .order("created_at", { ascending: false });

      if (data && !error) {
        return data.map((d) => ({
          id: d.id,
          name: d.name,
          role: d.role || "Peer / Colleague",
          date: new Date(d.created_at).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          }),
          message: d.message,
          visibility: d.visibility,
          status: d.status,
          pinned: d.pinned,
        }));
      }
    } catch (e) {
      console.warn("Supabase fetch failed, using fallback memory", e);
    }
  }

  // Fallback to memory
  return memoryMessages
    .filter((m) => m.status === "approved" && m.visibility === "public")
    .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0))
    .map((m) => ({
      id: m.id,
      name: m.name,
      role: m.role || "Peer / Colleague",
      date: new Date(m.created_at).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      }),
      message: m.message,
      visibility: m.visibility,
      status: m.status,
      pinned: m.pinned,
    }));
}

export async function submitGuestbookMessage(formData: {
  name: string;
  role?: string;
  email?: string;
  message: string;
  visibility: "public" | "private";
}) {
  if (!formData.name || !formData.message) {
    return { success: false, error: "Name and Message are required." };
  }

  const newMessage: GuestbookMessageRecord = {
    id: `msg-${Date.now()}`,
    name: formData.name.trim(),
    role: formData.role?.trim() || undefined,
    email: formData.email?.trim() || undefined,
    message: formData.message.trim(),
    visibility: formData.visibility,
    status: formData.visibility === "private" ? "approved" : "pending",
    pinned: false,
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase.from("guestbook_messages").insert([
        {
          name: newMessage.name,
          role: newMessage.role,
          email: newMessage.email,
          message: newMessage.message,
          visibility: newMessage.visibility,
          status: newMessage.status,
          pinned: newMessage.pinned,
        },
      ]);
      if (error) {
        console.error("Supabase insert error:", error);
      }
    } catch (err) {
      console.warn("Supabase insert exception:", err);
    }
  }

  // Save to memory store
  memoryMessages.unshift(newMessage);

  // Send instant webhook notification (Telegram/Discord)
  await sendInstantNotification({
    name: newMessage.name,
    role: newMessage.role,
    message: newMessage.message,
    visibility: newMessage.visibility,
    email: newMessage.email,
  });

  return {
    success: true,
    visibility: formData.visibility,
    message:
      formData.visibility === "private"
        ? "ข้อความลับของคุณถูกส่งถึงคุณเชาวน์เรียบร้อยแล้ว (เฉพาะเจ้าของเว็บเท่านั้นที่มองเห็น)"
        : "ขอบคุณสำหรับข้อความ! ข้อความของคุณถูกบันทึกและจะแสดงบน Wall of Love เมื่อได้รับการอนุมัติ",
  };
}

export async function getAdminMessages(passcode: string): Promise<{
  success: boolean;
  messages?: GuestbookMessageRecord[];
  error?: string;
}> {
  const validPasscode = process.env.ADMIN_PASSCODE || "admin1234";
  if (passcode !== validPasscode) {
    return { success: false, error: "Invalid Admin Passcode." };
  }

  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("guestbook_messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (data && !error) {
        return { success: true, messages: data };
      }
    } catch (e) {
      console.warn("Supabase admin fetch failed", e);
    }
  }

  return { success: true, messages: memoryMessages };
}

export async function moderateMessageAction(
  messageId: string,
  action: "approve" | "make_private" | "pin" | "unpin" | "reject" | "delete",
  passcode: string
) {
  const validPasscode = process.env.ADMIN_PASSCODE || "admin1234";
  if (passcode !== validPasscode) {
    return { success: false, error: "Unauthorized access." };
  }

  const targetIdx = memoryMessages.findIndex((m) => m.id === messageId);
  if (targetIdx !== -1) {
    if (action === "approve") {
      memoryMessages[targetIdx].status = "approved";
      memoryMessages[targetIdx].visibility = "public";
    } else if (action === "make_private") {
      memoryMessages[targetIdx].visibility = "private";
    } else if (action === "pin") {
      memoryMessages[targetIdx].pinned = true;
    } else if (action === "unpin") {
      memoryMessages[targetIdx].pinned = false;
    } else if (action === "reject") {
      memoryMessages[targetIdx].status = "rejected";
    } else if (action === "delete") {
      memoryMessages.splice(targetIdx, 1);
    }
  }

  if (isSupabaseConfigured && supabase) {
    try {
      if (action === "delete") {
        await supabase.from("guestbook_messages").delete().eq("id", messageId);
      } else if (action === "approve") {
        await supabase
          .from("guestbook_messages")
          .update({ status: "approved", visibility: "public" })
          .eq("id", messageId);
      } else if (action === "make_private") {
        await supabase
          .from("guestbook_messages")
          .update({ visibility: "private" })
          .eq("id", messageId);
      } else if (action === "pin") {
        await supabase
          .from("guestbook_messages")
          .update({ pinned: true })
          .eq("id", messageId);
      } else if (action === "unpin") {
        await supabase
          .from("guestbook_messages")
          .update({ pinned: false })
          .eq("id", messageId);
      }
    } catch (e) {
      console.warn("Supabase moderation update failed", e);
    }
  }

  return { success: true };
}
