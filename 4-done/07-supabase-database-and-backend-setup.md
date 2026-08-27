# 📌 TASK-07: Supabase Database, SQL Schema & Type Safety

> **Module**: Backend & Database Foundation  
> **Priority**: P0 (Must Have)  
> **Estimated Scope**: Supabase Client Setup, SQL Migration, Table Schema, RLS Policies, Database Types  
> **Reference**: [`CV_SPECIFICATION.md`](../CV_SPECIFICATION.md) — Section 6.3, 6.4 & 7

---

## 🎯 1. วัตถุประสงค์ (Objective)
เชื่อมต่อฐานข้อมูล Supabase PostgreSQL, ติดตั้ง Schema ตาราง `guestbook_messages` ตามข้อกำหนด, กำหนด Row Level Security (RLS) Policies เพื่อรักษาความปลอดภัย และสร้าง Type Definition ของฐานข้อมูลสำหรับ Next.js

---

## 📋 2. รายการงานที่ต้องทำ (Task Checklist)

### 2.1 Supabase Configuration & Dependencies
- [ ] ติดตั้ง `@supabase/supabase-js` และ `@supabase/ssr`
- [ ] สร้าง Environment Configuration:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY` (สำหรับ Admin/Server Actions เท่านั้น)
- [ ] สร้าง Supabase Client Helpers:
  - `src/lib/supabase/client.ts` (Browser Client)
  - `src/lib/supabase/server.ts` (Server Client / Server Actions)
  - `src/lib/supabase/admin.ts` (Admin Client ด้วย Service Role Key)

### 2.2 SQL Schema Migration (`supabase/schema.sql`)
- [ ] สร้าง Script สร้างตาราง `guestbook_messages`:
  ```sql
  CREATE TABLE guestbook_messages (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      sender_name VARCHAR(100) NOT NULL,
      sender_role VARCHAR(150),
      sender_email VARCHAR(255),
      message_content TEXT NOT NULL,
      is_private BOOLEAN DEFAULT FALSE,
      status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'approved', 'rejected', 'private'
      is_pinned BOOLEAN DEFAULT FALSE,
      client_ip VARCHAR(50),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      approved_at TIMESTAMP WITH TIME ZONE
  );
  ```
- [ ] สร้าง Indexes เพื่อเพิ่มประสิทธิภาพการค้นหา:
  - `CREATE INDEX idx_guestbook_status ON guestbook_messages(status, is_private, is_pinned, created_at DESC);`

### 2.3 Row Level Security (RLS) Policies
- [ ] Enable RLS on `guestbook_messages`:
  ```sql
  ALTER TABLE guestbook_messages ENABLE ROW LEVEL SECURITY;
  ```
- [ ] Policy 1 (Public Read): อนุญาตให้อ่านเฉพาะข้อความที่ `status = 'approved'` และ `is_private = false`
- [ ] Policy 2 (Public Insert): อนุญาตให้บุคคลทั่วไปสามารถ INSERT ข้อความใหม่ได้ (โดยสถานะเริ่มต้นบังคับเป็น `pending` หรือ `private`)
- [ ] Policy 3 (Admin Full Access): อนุญาตให้แก้ไข (UPDATE/DELETE) ผ่าน Service Role หรือ Authenticated Admin เท่านั้น

### 2.4 TypeScript Database Types (`src/types/database.types.ts`)
- [ ] สร้าง Type Definition สำหรับ Table `guestbook_messages` (Row, Insert, Update, Enums)
- [ ] สร้าง Data Transfer Objects (DTO) และ Zod Validation Schemas

---

## 🔍 3. เกณฑ์การตรวจรับงาน (Acceptance Criteria)
1. **Schema Integrity**: ตารางมีโครงสร้างตรงตาม Spec และมีคอลัมน์ครบถ้วน
2. **Security by Design**: ผู้ใช้ทั่วไป (Anon Key) ไม่สามารถ SELECT ข้อความที่มี `is_private = true` หรือ `status != 'approved'` ได้โดยเด็ดขาด
3. **Sensitive Data Protection**: `sender_email` และ `client_ip` จะต้องไม่ถูกส่งไปยัง Public Client
4. **Type Safety**: เรียกใช้งาน Supabase Client ใน Next.js แบบ Type-safe เต็มรูปแบบ

---

## 🧪 4. แผนการทดสอบ (Verification & Testing)
1. **Schema Execution**: รัน SQL Script ใน Supabase SQL Editor หรือ Local Supabase CLI
2. **RLS Verification Query**:
   - ยิง Query ด้วย Anon Key ทดสอบว่าอ่านได้เฉพาะข้อความที่ approved และไม่ private
   - ยิง Query ทดสอบแก้ไขสถานะข้อความด้วย Anon Key (ต้องถูกบล็อก / Permission Denied)
3. **Type Compilation**: ตรวจสอบว่า TypeScript build ผ่านโดยไม่มี type error ใน `database.types.ts`
