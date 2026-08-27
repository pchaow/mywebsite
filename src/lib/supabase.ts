import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl !== "https://your-project.supabase.co"
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

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
