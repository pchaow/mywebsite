# 📌 TASK-11: Print-Ready CSS & ATS/PDF Resume Export

> **Module**: Resume Export & ATS Formatting  
> **Priority**: P1 (High)  
> **Estimated Scope**: `@media print` Stylesheet, Dedicated ATS Resume View (`/resume`), PDF Export Button  
> **Reference**: [`CV_SPECIFICATION.md`](../CV_SPECIFICATION.md) — Section 2 & 7

---

## 🎯 1. วัตถุประสงค์ (Objective)
จัดเตรียมเลย์เอาต์ที่พร้อมสำหรับการพิมพ์ (Print-Ready) และการดาวน์โหลดเป็นเอกสาร PDF สำหรับสมัครงาน โดยยึดหลัก ATS-Friendly (Applicant Tracking Systems) อ่านง่าย ชัดเจน ไม่สูญเสียข้อมูลสำคัญเมื่อสั่งพิมพ์ผ่านเบราว์เซอร์

---

## 📋 2. รายการงานที่ต้องทำ (Task Checklist)

### 2.1 Print Stylesheet Optimization (`@media print`)
- [ ] ตั้งค่า Global Print Rules ใน `globals.css` หรือ Tailwind `@media print`:
  - ซ่อนส่วนที่ไม่จำเป็นในการพิมพ์: Navbar, Mobile Menu, Guestbook Form, Footer Buttons, Theme Toggle, Background Gradients, Decorative Animations
  - ปรับสีข้อความเป็นสีดำสนิท (`text-black`) และพื้นหลังสีขาวบริสุทธิ์ (`bg-white`) เพื่อประหยัดหมึกและอ่านง่าย
  - กำหนด Page Margins (`@page { margin: 15mm; size: A4; }`)
  - ป้องกัน Page Break ขาดกลางกล่องข้อความ (`break-inside: avoid`, `page-break-inside: avoid`) บน Career Cards และ Education

### 2.2 Dedicated Clean Resume View (`src/app/resume/page.tsx`)
- [ ] สร้างหน้าเฉพาะ `/resume` สไตล์ Professional Tech Resume มาตรฐานสากล:
  - Header: ชื่อ-นามสกุล, ตำแหน่ง, เบอร์โทร/อีเมล/ลิงก์ GitHub/LinkedIn/Portfolio
  - Professional Summary (15+ Years Tech Lead / Senior Full Stack)
  - Work Experience แบ่งชัดเจนตามปี พร้อม Achievements แบบ Bullet points ที่มีตัวเลขกำกับ
  - Technical Skills Matrix 6 หมวด
  - Education: วท.ม. และ วท.บ. วิทยาการคอมพิวเตอร์ มหาวิทยาลัยเชียงใหม่
- [ ] ปุ่ม Floating Action: `[🖨️ Print / Save as PDF]` ที่จะเรียก `window.print()`

### 2.3 Download CV Trigger Button in Navbar & Hero
- [ ] เชื่อมโยงปุ่ม `[Download CV]` ในหน้าแรก:
  - ตัวเลือก 1: สั่งเรียก `window.print()` หรือเปิดหน้า `/resume`
  - ตัวเลือก 2: ดาวน์โหลดไฟล์ PDF ที่เตรียมไว้ล่วงหน้า (`public/Chaow_Porkaew_CV.pdf`)

---

## 🔍 3. เกณฑ์การตรวจรับงาน (Acceptance Criteria)
1. **Clean Print Output**: เมื่อกด `Ctrl + P` (หรือ `Cmd + P`) เอกสารที่แสดงในตัวอย่างก่อนพิมพ์ต้องไม่มี Navbar, Footer หรือปุ่มลอยติดมา
2. **Page Break Management**: หัวข้องานและผลงานไม่ถูกตัดขาดครึ่งหน้าระหว่างรอยต่อหน้า A4
3. **ATS Readability**: โครงสร้างข้อความในหน้า Resume เป็น Semantic HTML (`<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`) ที่ ATS Parser สามารถอ่านและสกัดข้อมูลได้สมบูรณ์ 100%
4. **Color Contrast & Legibility**: ฟอนต์อ่านง่าย คมชัดเมื่อพิมพ์บนกระดาษ A4

---

## 🧪 4. แผนการทดสอบ (Verification & Testing)
1. **Browser Print Preview Test**: กดพิมพ์ใน Chrome / Firefox / Safari และตรวจสอบ Print Preview
2. **Save as PDF Test**: บันทึกเป็นไฟล์ PDF และตรวจสอบขนาดตัวอักษร การเว้นวรรค และการจัดหน้า
3. **ATS Text Extractor Test**: ก๊อปปี้ข้อความทั้งหมดจาก PDF ที่ Export ออกมา ตรวจสอบว่าลำดับข้อความไม่สลับกัน
