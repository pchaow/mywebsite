-- =========================================================
-- Supabase Schema: guestbook_messages
-- Run this script in the Supabase Dashboard -> SQL Editor
-- =========================================================

-- 1. Create table
CREATE TABLE IF NOT EXISTS public.guestbook_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    role TEXT,
    email TEXT,
    message TEXT NOT NULL,
    visibility TEXT NOT NULL DEFAULT 'public' CHECK (visibility IN ('public', 'private')),
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    pinned BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.guestbook_messages ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Anyone can insert messages (Public submission)
CREATE POLICY "Allow public insert into guestbook"
ON public.guestbook_messages
FOR INSERT
WITH CHECK (true);

-- 4. Policy: Anyone can read APPROVED & PUBLIC messages
CREATE POLICY "Allow public select on approved public messages"
ON public.guestbook_messages
FOR SELECT
USING (status = 'approved' AND visibility = 'public');

-- 5. Create index for fast retrieval
CREATE INDEX IF NOT EXISTS idx_guestbook_status_pinned 
ON public.guestbook_messages (status, visibility, pinned DESC, created_at DESC);
