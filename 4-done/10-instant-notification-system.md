# 📌 TASK-10: Instant Notification System (Telegram / Discord Webhook)

> **Module**: Notification & Alert Integrations  
> **Priority**: P1 (High)  
> **Estimated Scope**: Telegram Bot API / Discord Webhook Integration, Notification Payload Formatter  
> **Reference**: [`CV_SPECIFICATION.md`](../CV_SPECIFICATION.md) — Section 6.2 & 7

---

## 🎯 1. วัตถุประสงค์ (Objective)
สร้างระบบแจ้งเตือนแบบทันที (Instant Notification) ส่งตรงไปยังมือถือของเจ้าของเว็บผ่าน Telegram Bot หรือ Discord Webhook เมื่อมีผู้เยี่ยมชมส่งข้อความใหม่ (ทั้งกรณี Public Comment รออนุมัติ และ Private Message)

---

## 📋 2. รายการงานที่ต้องทำ (Task Checklist)

### 2.1 Notification Config & Environment Variables
- [ ] ตั้งค่าตัวแปรใน `.env.local` / Vercel:
  - กรณี Telegram: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
  - กรณี Discord: `DISCORD_WEBHOOK_URL`
- [ ] สร้าง Configuration Toggle เลือกว่าจะส่งผ่านช่องทางใด (หรือส่งคู่กัน)

### 2.2 Notification Service Implementation (`src/lib/notifications.ts`)
- [ ] ฟังก์ชัน `sendGuestbookNotification(messageData)`:
  - รูปแบบข้อความระบุชัดเจน:
    - 🔔 **ประเภท**: `[🌐 ข้อความรออนุมัติ - Public]` หรือ `[🔒 ข้อความลับ - Private]`
    - 👤 **ผู้ส่ง**: ชื่อผู้ส่ง (Sender Name)
    - 🏢 **บทบาท/ความสัมพันธ์**: Role/Relationship
    - 📧 **อีเมล**: Sender Email (ถ้ามี)
    - 💬 **เนื้อหา**: Message Content
    - ⏱️ **เวลา**: Timestamp
    - 🔗 **ลิงก์ด่วน**: Direct link ไปยังหน้า Admin เพื่อกด Approve ทันที
- [ ] Telegram Message Formatter (MarkdownV2 / HTML formatting)
- [ ] Discord Webhook Embed Formatter (Rich Embed พร้อมสี Color Code: สีเขียวสำหรับ Public, สีกรมท่า/ม่วงสำหรับ Private)

### 2.3 Error Handling & Non-blocking Trigger
- [ ] ครอบการส่ง Notification ด้วย `try-catch` แบบ Asynchronous เพื่อไม่ให้ความล้มเหลวของการยิง webhook ไปบล็อกการตอบกลับหน้าเว็บของผู้ใช้งาน
- [ ] บันทึก Log การแจ้งเตือนเพื่อการ Debug กรณี Webhook Timeout หรือ Token ไม่ถูกต้อง

---

## 🔍 3. เกณฑ์การตรวจรับงาน (Acceptance Criteria)
1. **Real-time Delivery**: เมื่อผู้ใช้กด Submit บนหน้าเว็บ ข้อความแจ้งเตือนต้องส่งเข้า Telegram หรือ Discord ภายใน 1-3 วินาที
2. **Format & Readability**: ข้อความแจ้งเตือนอ่านง่าย แบ่งสัดส่วนชัดเจน และแยกความแตกต่างระหว่างข้อความ Public และ Private ชัดเจน
3. **Resilience**: หาก Telegram/Discord ล่มหรือเกิดข้อผิดพลาด การบันทึกข้อมูล Guestbook ลง Database จะต้องยังคงสำเร็จตามปกติ ไม่เกิด 500 Error

---

## 🧪 4. แผนการทดสอบ (Verification & Testing)
1. **Mock Submission Test**: รันคำสั่งยิง Notification ด้วยข้อมูลจำลอง ตรวจสอบว่ามีข้อความเด้งเข้าแอป Telegram/Discord
2. **Public Message Test**: ทดสอบส่งข้อความ Public -> ตรวจสอบหัวข้อแจ้งเตือนว่าระบุสถานะ "รออนุมัติ" พร้อมลิงก์ไปจัดการ
3. **Private Message Test**: ทดสอบส่งข้อความ Private -> ตรวจสอบว่าแจ้งเตือนระบุ "ข้อความลับ"
4. **Failure Gracefulness Test**: ตั้งค่า Webhook URL ปลอม -> ตรวจสอบว่าการส่งฟอร์มหน้าเว็บยังคงแจ้งเตือนสำเร็จ ไม่ Crash
