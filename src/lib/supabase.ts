import { createClient, SupabaseClient } from "@supabase/supabase-js";

export function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

  if (!url || !key || url.includes("your-project.supabase.co")) {
    return null;
  }

  return createClient(url, key, {
    auth: {
      persistSession: false,
    },
  });
}

export const isSupabaseConfigured = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("your-project.supabase.co")
);

export const supabase = getSupabase();

export interface GuestbookMessageRecord {
  id: string;
  name: string;
  role?: string;
  email?: string;
  message: string;
  visibility: "public" | "private";
  status: "pending" | "approved" | "rejected";
  pinned: boolean;
  created_at: string;
  updated_at?: string;
}
