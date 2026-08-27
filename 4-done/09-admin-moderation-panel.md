# 📌 TASK-09: Owner / Admin Moderation Panel

> **Module**: Admin Moderation & Security  
> **Priority**: P1 (High)  
> **Estimated Scope**: Admin Route (`/admin`), Passcode/PIN Authentication, Message Moderation Dashboard  
> **Reference**: [`CV_SPECIFICATION.md`](../CV_SPECIFICATION.md) — Section 6.2

---

## 🎯 1. วัตถุประสงค์ (Objective)
สร้างแดชบอร์ดจัดการข้อความของผู้ดูแลระบบ (Owner Moderation Panel) ที่หน้า `/admin` โดยมีระบบป้องกันสิทธิ์ด้วย Secret Passcode / PIN หรือ Secure Session เพื่อให้เจ้าของเว็บสามารถอนุมัติ (Approve), ปักหมุด (Pin), เก็บเป็นส่วนตัว (Keep Private) หรือลบข้อความ (Delete/Spam) ได้สะดวกทุกที่

---

## 📋 2. รายการงานที่ต้องทำ (Task Checklist)

### 2.1 Admin Authentication & Session Management
- [ ] ตั้งค่า Secret Key ใน Environment: `ADMIN_SECRET_PASSCODE`
- [ ] สร้างหน้า Login: `src/app/admin/login/page.tsx`
  - PIN Input หรือ Password Field แบบ Masked
  - ระบบตรวจสอบรหัสผ่านผ่าน Server Action
  - บันทึก Encrypted Session Cookie (HttpOnly, Secure, SameSite=Strict)
- [ ] Middleware / Guard: `src/middleware.ts` ป้องกันการเข้าถึง `/admin` หากไม่มี Valid Session

### 2.2 Moderation Dashboard UI (`src/app/admin/page.tsx`)
- [ ] Header Dashboard: แสดงสถานะ Login, ปุ่มออกจากระบบ (Logout), ปุ่มกลับหน้าหลัก
- [ ] Summary Counters:
  - 📥 **Pending Review**: จำนวนข้อความรออนุมัติ
  - 🔒 **Private Messages**: จำนวนข้อความลับ
  - ✅ **Approved Messages**: จำนวนข้อความที่เผยแพร่อยู่
- [ ] Tab Navigation:
  - Tab 1: `Pending Review` (Default)
  - Tab 2: `Private Messages`
  - Tab 3: `Approved & Published`
  - Tab 4: `All / Trash`

### 2.3 Moderation Message Cards & Action Controls
- [ ] Message Detail Card:
  - ข้อมูลผู้ส่ง: ชื่อ, Role, Email (เจ้าของเว็บมองเห็นได้), วันที่ส่ง, IP Address
  - ป้ายแสดงสถานะ (`Pending`, `Private`, `Approved`, `Pinned`)
  - เนื้อหาข้อความ
- [ ] Action Buttons & Server Actions (`src/app/actions/admin-moderation.ts`):
  - `[✅ Approve & Publish]`: เปลี่ยนสถานะเป็น `approved` และตั้งค่า `approved_at = NOW()`
  - `[🔒 Keep Private]`: เปลี่ยนสถานะเป็น `private` และตั้งค่า `is_private = true`
  - `[📌 Pin to Top / Unpin]`: สลับสถานะ `is_pinned = true / false`
  - `[🗑️ Delete / Reject]`: เปลี่ยนสถานะเป็น `rejected` หรือ Hard Delete จาก Database
- [ ] Optimistic UI Updates และ Confirmation Dialog ก่อนลบข้อความ

### 2.4 โครงร่างหน้าจอและ Wireframe แดชบอร์ด (`/admin`)

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│  🛡️ Chaow.dev Admin Moderation Panel                           [🟢 Supabase Connected] [Log out] │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│  [ 📥 Pending Review (3) ]   [ 🌟 Approved & Public (12) ]   [ 🔒 Private Messages (5) ]         │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│  ┌────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ 👤 Sender: John Recruiter (john@headhunt.com)          🕒 Date: 27 Aug 2026, 14:30        │  │
│  │ 🏷️ Role: Senior Talent Partner @ Apex Tech            🌐 Visibility: Public Request      │  │
│  │ 💬 Message:                                                                                │  │
│  │ "Hi Chaow, we have an exciting Tech Lead role matching your 15+ YOE distributed systems   │  │
│  │  background. Let's connect!"                                                               │  │
│  │                                                                                            │  │
│  │ ⚡ Actions:                                                                                 │  │
│  │ [ ✅ Approve & Publish ]  [ 📌 Pin to Top ]  [ 🔒 Make Private ]  [ 🗑️ Delete / Reject ]     │  │
│  └────────────────────────────────────────────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────────────────────────────────────────────┐  │
│  │ 👤 Sender: Anonymized Friend                           🕒 Date: 26 Aug 2026, 10:15        │  │
│  │ 🏷️ Role: CMU CS Alumni                                 🔒 Visibility: Private Message     │  │
│  │ 💬 Message:                                                                                │  │
│  │ "ยินดีด้วยกับเว็บใหม่นะพี่เชาวน์ ดีไซน์สวยมากครับ..."                                      │  │
│  │                                                                                            │  │
│  │ ⚡ Actions:                                                                                 │  │
│  │ [ 🌐 Convert to Public & Approve ]                   [ 🗑️ Delete Message ]                │  │
│  └────────────────────────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🔍 3. เกณฑ์การตรวจรับงาน (Acceptance Criteria)
1. **Access Control**: ไม่สามารถเข้าใช้งานหน้า `/admin` หรือเรียก Moderation Server Actions ได้หากไม่ผ่านการยืนยันตัวตนด้วย Admin Passcode
2. **Instant State Sync**: เมื่อกด Approve, Pin, หรือ Keep Private ข้อมูลในฐานข้อมูลและหน้าเว็บหลักต้องอัปเดตสถานะทันที (Revalidate Tag / Path)
3. **Sensitive Field Visibility**: เจ้าของเว็บสามารถเห็น `sender_email` และ `client_ip` ของผู้ส่งในหน้า Admin เพื่อการติดต่อกลับ
4. **Mobile Friendly Dashboard**: เจ้าของเว็บสามารถเปิดหน้า `/admin` จากโทรศัพท์มือถือและกดยืนยันข้อความได้สะดวก

---

## 🧪 4. แผนการทดสอบ (Verification & Testing)
1. **Unauthorized Access Test**: พยายามเปิด `/admin` โดยตรง -> ตรวจสอบว่าระบบ Redirect ไปที่ `/admin/login`
2. **Login Verification**: กรอก PIN ที่ถูกต้อง -> เข้าสู่ Dashboard สำเร็จ
3. **Action Execution Test**:
   - กด Approve ข้อความ Pending -> ตรวจสอบว่าข้อความย้ายไป Tab Approved และขึ้นหน้า Wall of Love
   - กด Pin ข้อความ -> ตรวจสอบว่าข้อความขึ้นป้าย Pinned และอยู่บนสุด
   - กด Delete ข้อความ -> ตรวจสอบว่าข้อความถูกลบหรือย้ายออกจากหน้ารายการ
