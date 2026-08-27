# 📌 TASK-08: Guestbook & Private Messaging Feature

> **Module**: Guestbook & Recommendation System  
> **Priority**: P0 (Must Have)  
> **Estimated Scope**: Visitor Submission Form, Public/Private Switch, Anti-Spam (Cloudflare Turnstile), Wall of Love  
> **Reference**: [`CV_SPECIFICATION.md`](../CV_SPECIFICATION.md) — Section 6.1, 6.4 & 7

---

## 🎯 1. วัตถุประสงค์ (Objective)
สร้างระบบสมุดเยี่ยมชม (Guestbook) ให้ผู้เข้าชม (Recruiters, อดีตเพื่อนร่วมงาน) ส่งคำนิยม (Public Testimonials) หรือส่งข้อความลับ (Private Messages) ถึงเจ้าของเว็บ พร้อมระบบป้องกันสแปมด้วย Cloudflare Turnstile และหน้าแสดง Wall of Love สำหรับข้อความที่ได้รับอนุมัติแล้ว

---

## 📋 2. รายการงานที่ต้องทำ (Task Checklist)

### 2.1 Form Validation & Schema (`src/lib/validations/guestbook.ts`)
- [ ] สร้าง Zod Schema สำหรับตรวจสอบข้อมูล:
  - `sender_name`: string (ความยาว 2-100 ตัวอักษร, Required)
  - `sender_role`: string (ความยาวสูงสุด 150 ตัวอักษร, Optional)
  - `sender_email`: email string (Optional, Valid email format)
  - `message_content`: string (ความยาว 5-500 ตัวอักษร, Required)
  - `is_private`: boolean (Default: false)
  - `turnstile_token`: string (Anti-spam token, Required)

### 2.2 Server Actions for Submission (`src/app/actions/guestbook.ts`)
- [ ] `submitGuestbookMessage(formData)` Server Action:
  - Verify Cloudflare Turnstile Token กับ Cloudflare Siteverify API
  - Sanitize ข้อความ ป้องกัน XSS และ Injection
  - ตรวจสอบ `is_private`:
    - หาก `is_private = true` -> บันทึกสถานะ `status = 'private'`
    - หาก `is_private = false` -> บันทึกสถานะ `status = 'pending'` (รอ Admin อนุมัติ)
  - เก็บ `client_ip` สำหรับ Rate-limiting และความปลอดภัย
  - บันทึกลง Supabase Table `guestbook_messages`
  - Trigger Notification System (ไปยัง Telegram/Discord ตาม TASK-10)
  - Return Response (Success/Error Message)

### 2.3 Guestbook Form Component (`src/components/guestbook/guestbook-form.tsx`)
- [ ] Inputs:
  - ชื่อผู้ส่ง (`Sender Name`) [Required]
  - ความสัมพันธ์/บทบาท (`Role/Relationship`) เช่น "อดีตเพื่อนร่วมงาน @ Company X", "Recruiter" [Optional]
  - อีเมลติดต่อ (`Contact Info`) พร้อมข้อความกำกับ *"ข้อมูลนี้เป็นความลับ เจ้าของเว็บเห็นเท่านั้น"* [Optional]
  - ข้อความ (`Message`) พร้อมตัวนับจำนวนตัวอักษร (0/500) [Required]
- [ ] Visibility Switch / Radio:
  - 🌐 **"ขอแสดงบนหน้าเว็บ (Public Comment)"** (ต้องรออนุมัติ)
  - 🔒 **"ข้อความลับถึงคุณเชาวน์เท่านั้น (Private Message)"** (เห็นเฉพาะเจ้าของเว็บ)
- [ ] Cloudflare Turnstile Widget Integration (`@marsidev/react-turnstile` หรือ custom widget)
- [ ] ปุ่มส่งข้อความ (`Submit Button`) พร้อม Loading State & Feedback Toast (Sonner)

### 2.4 Wall of Love Display (`src/components/guestbook/wall-of-love.tsx`)
- [ ] Fetch Public Approved Messages:
  - ดึงข้อมูลเฉพาะ `status = 'approved'` และ `is_private = false`
  - เรียงลำดับ: ข้อความที่ `is_pinned = true` ขึ้นก่อน ตามด้วย `created_at DESC`
- [ ] Card Layout สำหรับแต่ละคำนิยม:
  - Avatar ตัวอักษรย่อ หรือไอคอนผู้ส่ง
  - ชื่อผู้ส่ง และ Role/Relationship
  - วันที่ส่ง (จัดรูปแบบสวยงาม เช่น "สิงหาคม 2026")
  - ป้าย `📌 Pinned Recommendation` สำหรับข้อความที่ปักหมุด
  - เนื้อหาข้อความ
### 2.5 โครงร่างหน้าจอและ Wireframe (UI/UX Layout)

#### 🖥️ Desktop Wireframe (Two Columns)
```
┌───────────────────────────────────────────────────┬──────────────────────────────────────────────┐
│  📝 [Leave a Message / Recommendation]            │  🌟 [Wall of Love & Recommendations]         │
│                                                   │                                              │
│  Name * [ e.g. John Doe                         ] │  ┌────────────────────────────────────────┐  │
│  Role (Optional) [ e.g. Engineering Manager     ] │  │ 📌 PINNED RECOMMENDATION               │  │
│  Email (Private) [ email@domain.com             ] │  │ 👤 Somchai D.  🏷️ Former Eng Manager   │  │
│  Message * (0/500)                                │  │ 🕒 Aug 2026                            │  │
│  [                                              ] │  │ "Chaow is an exceptional Lead..."      │  │
│  [ Write your recommendation / message...       ] │  └────────────────────────────────────────┘  │
│                                                   │  ┌────────────────────────────────────────┐  │
│  Visibility:                                      │  │ 👤 Jane S.     🏷️ Tech Recruiter       │  │
│  (●) 🌐 Public Testimonial   ( ) 🔒 Private Msg   │  │ 🕒 Jul 2026                            │  │
│                                                   │  │ "Great working with Chaow..."          │  │
│  [ ☑️ Cloudflare Turnstile Verification ]         │  └────────────────────────────────────────┘  │
│  [ 🚀 Send Message / Recommendation ]             │  [ ⬇️ Load More Recommendations... ]       │
└───────────────────────────────────────────────────┴──────────────────────────────────────────────┘
```

#### 📱 Mobile Wireframe (Single Column Stacked)
```
┌───────────────────────────────────────────────────┐
│  📝 Leave a Message (Public or Private)           │
│  Name *          [ e.g. John Doe                ] │
│  Role (Optional) [ e.g. Tech Recruiter          ] │
│  Email (Private) [ email@example.com            ] │
│  Message * (0/500)                                │
│  [ Write your message here...                   ] │
│  Visibility: (●) 🌐 Public   ( ) 🔒 Private       │
│  [ ☑️ Cloudflare Turnstile ]                      │
│  [ 🚀 Send Message                              ] │
├───────────────────────────────────────────────────┤
│  🌟 Wall of Love (Recommendations)                │
│  ┌─────────────────────────────────────────────┐  │
│  │ 📌 PINNED: Somchai D. (Eng Manager)         │  │
│  │ "Chaow is an exceptional Lead..."           │  │
│  └─────────────────────────────────────────────┘  │
│  ┌─────────────────────────────────────────────┐  │
│  │ 👤 Jane S. (Tech Recruiter)                 │  │
│  │ "Great working with Chaow..."               │  │
│  └─────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────┘
```

---

## 🔍 3. เกณฑ์การตรวจรับงาน (Acceptance Criteria)
1. **Privacy Guarantee**: ข้อความที่เลือกส่งแบบ Private จะต้องไม่หลุดไปแสดงที่หน้า Wall of Love ไม่ว่าจะกรณีใดๆ
2. **Pending Moderation**: ข้อความ Public จะต้องไม่แสดงบนหน้าเว็บจนกว่าจะได้รับการ Approve จาก Admin
3. **Anti-Spam Verification**: ไม่สามารถส่งฟอร์มผ่านได้หากไม่ผ่านการตรวจสอบ Turnstile Token
4. **Input Sanitization**: ข้อมูลที่ส่งมาต้องถูก Sanitize ตัด Tag HTML ที่อาจเป็นอันตรายออกอย่างปลอดภัย
5. **Character Limit**: จำกัดความยาวข้อความไม่เกิน 500 ตัวอักษรตาม Spec

---

## 🧪 4. แผนการทดสอบ (Verification & Testing)
1. **Submit Public Message**: ส่งข้อความแบบ Public -> ตรวจสอบใน Database ว่า `status = 'pending'` และยังไม่ขึ้นหน้า Wall of Love
2. **Submit Private Message**: ส่งข้อความแบบ Private -> ตรวจสอบใน Database ว่า `is_private = true` และ `status = 'private'`
3. **Spam & Rate Limiting Test**: ทดสอบส่งฟอร์มโดยไม่ผ่าน Turnstile -> ตรวจสอบว่าระบบปฏิเสธคำขอ
4. **Toast & UI Reset**: เมื่อส่งสำเร็จ ฟอร์มต้องเคลียร์ค่า และแสดง Success Toast อย่างถูกต้อง
