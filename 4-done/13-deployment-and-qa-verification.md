# 📌 TASK-13: Deployment, CI/CD & Production QA Checklist

> **Module**: Deployment, DevOps & Quality Assurance  
> **Priority**: P0 (Must Have)  
> **Estimated Scope**: Vercel Deployment, Environment Variables, Supabase Production Link, E2E Acceptance Testing  
> **Reference**: [`CV_SPECIFICATION.md`](../CV_SPECIFICATION.md) — Section 7

---

## 🎯 1. วัตถุประสงค์ (Objective)
เตรียมความพร้อมสำหรับการ Deploy ขึ้นสู่ Vercel Production แบบ Zero-Ops (100% Free-Tier Architecture), ตั้งค่า Environment Variables ให้ครบถ้วน, เชื่อมต่อ Supabase และรัน Sanity E2E Test Checklist ครบทุกมิติของระบบก่อนเปิดตัวจริง

---

## 📋 2. รายการงานที่ต้องทำ (Task Checklist)

### 2.1 Production Environment Variables Checklist
- [ ] ตั้งค่าตัวแปรใน Vercel Dashboard / `.env.production`:
  - `NEXT_PUBLIC_SUPABASE_URL`: URL ของ Supabase Project
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Anon / Public API Key
  - `SUPABASE_SERVICE_ROLE_KEY`: Service Role Secret Key (Server-only)
  - `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: Cloudflare Turnstile Site Key
  - `TURNSTILE_SECRET_KEY`: Cloudflare Turnstile Secret Key
  - `ADMIN_SECRET_PASSCODE`: รหัส PIN/Passcode สำหรับเข้าหน้า `/admin`
  - `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID` หรือ `DISCORD_WEBHOOK_URL`
  - `NEXT_PUBLIC_SITE_URL`: Domain เว็บไซต์หลัก (เช่น `https://chaow.dev` หรือ `https://xxx.vercel.app`)

### 2.2 Vercel Deployment & Build Optimization
- [ ] ตรวจสอบ Build Script ใน `package.json` (`next build`)
- [ ] ทดสอบสร้าง Production Build แบบ Local: `npm run build`
- [ ] ตั้งค่า GitHub Repository Integration กับ Vercel สำหรับ Continuous Deployment (Push to `main` -> Auto Deploy)
- [ ] ตรวจสอบ Custom Domain และ SSL/TLS Certificate บน Vercel

### 2.3 Comprehensive End-to-End (E2E) Acceptance Checklist
- [ ] **1. Navigation & Theme**:
  - [ ] การเลื่อนเมนู Navbar Smooth ไปยังทุก Section ไม่ตกหล่น
  - [ ] สลับ Dark / Light / System Mode สีแสดงถูกต้อง ไม่กระพริบ
- [ ] **2. Content & Accuracy**:
  - [ ] รูปโปรไฟล์แสดงผลคมชัด
  - [ ] ประวัติการทำงาน 4 ช่วง (2011-ปัจจุบัน) ข้อมูลครบถ้วน
  - [ ] Featured Projects กรองหมวดหมู่ได้ถูกต้อง
  - [ ] Skills Matrix 6 หมวด และ Education มช. ถูกต้อง
- [ ] **3. Guestbook Submission Flow**:
  - [ ] ส่งข้อความแบบ Public -> บันทึกสถานะ Pending -> มี Notification เด้งเข้า Telegram/Discord
  - [ ] ข้อความ Pending ไม่ปรากฏบนหน้า Wall of Love สาธารณะ
  - [ ] ส่งข้อความแบบ Private -> บันทึกสถานะ Private -> มี Notification แจ้งว่าเป็นข้อความลับ
- [ ] **4. Admin Moderation Flow**:
  - [ ] เข้า `/admin` ต้องผ่านการตรวจสอบ PIN
  - [ ] Admin กด Approve ข้อความ Pending -> ข้อความขึ้นหน้า Wall of Love ทันที
  - [ ] Admin กด Pin ข้อความ -> ข้อความขึ้นป้าย Pinned และอยู่บนสุด
  - [ ] Admin กด Keep Private -> ข้อความไม่ขึ้นหน้าสาธารณะ
  - [ ] Admin กด Delete -> ข้อความถูกลบออก
- [ ] **5. Resume & Print Flow**:
  - [ ] กด Download CV หรือ Print Resume -> หน้าแสดงผล A4 สวยงาม ไม่มีเมนูส่วนเกินติดมา
- [ ] **6. Performance & Security**:
  - [ ] ผ่านเกณฑ์ Lighthouse (Mobile & Desktop)
  - [ ] Public API ไม่มีการรั่วไหลของ `sender_email` หรือ `client_ip`

---

## 🔍 3. เกณฑ์การตรวจรับงาน (Acceptance Criteria)
1. **Zero-Error Deployment**: การ Deploy บน Vercel สำเร็จโดยไม่มี Build Error
2. **Production Functional Test**: ผ่าน Acceptance Checklist ครบ 100% บน Production URL
3. **Zero-Ops & Cost**: ระบบทำงานบน Free-Tier 100% ตามข้อกำหนดใน Spec โดยไม่ต้องเสียค่าใช้จ่ายเซิร์ฟเวอร์

---

## 🧪 4. แผนการทดสอบ (Verification & Testing)
1. **Production Smoke Test**: เข้าใช้งานผ่าน URL จริงของ Vercel บนอุปกรณ์ทั้งมือถือและคอมพิวเตอร์
2. **Cross-Browser Verification**: ทดสอบบน Google Chrome, Apple Safari, Mozilla Firefox และ Microsoft Edge
3. **Live Guestbook E2E Test**: ส่งข้อความจริง และเข้าหน้า Admin ไปกด Approve แบบ Real-time
