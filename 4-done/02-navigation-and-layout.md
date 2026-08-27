# 📌 TASK-02: Navigation, Header, Footer & Global Layout

> **Module**: Navigation & Layout  
> **Priority**: P0 (Must Have)  
> **Estimated Scope**: Navbar, Mobile Drawer Menu, Theme Toggle Button, Footer, Social Links  
> **Reference**: [`CV_SPECIFICATION.md`](../CV_SPECIFICATION.md) — Section 2 & 7

---

## 🎯 1. วัตถุประสงค์ (Objective)
สร้างโครงสร้างส่วนหัว (Navbar) ที่รองรับการเลื่อนไปตามส่วนต่างๆ ของหน้า (Smooth Section Scrolling), ปุ่มสลับ Dark/Light Theme, ปุ่ม Download CV และ Drawer เมนูสำหรับหน้าจอ Mobile รวมถึงส่วนท้าย (Footer) ที่มีลิงก์ Contact และ Social Profiles อย่างมืออาชีพ

---

## 📋 2. รายการงานที่ต้องทำ (Task Checklist)

### 2.1 Header & Sticky Navbar (`src/components/navbar.tsx`)
- [x] สร้าง Navbar ที่มีคุณสมบัติ Sticky หรือ Fixed ด้านบน พร้อมเอฟเฟกต์ Glassmorphism (`backdrop-blur-md bg-background/80`)
- [x] แสดง Brand Logo: `Chaow.dev` หรือ `Chaow Porkaew` พร้อมไอคอนโค้ดดิ้ง (`Terminal` หรือ `Code2`)
- [x] Navigation Links สำหรับการ Scroll ไปยัง Section ต่างๆ:
  - `About` (`#about`)
  - `Experience` (`#experience`)
  - `Projects` (`#projects`)
  - `Skills` (`#skills`)
  - `Guestbook` (`#guestbook`)
  - `Contact` (`#contact`)
- [x] Active Section Highlight (ตรวจจับตำแหน่งการ Scroll และแสดง Active State บน Menu Item)
- [x] ปุ่ม CTA ด้านขวา:
  - `Download CV` (ปุ่มดาวน์โหลด PDF / ไปหน้าพิมพ์)
  - `ThemeToggle` (ปุ่มสลับ Dark / Light / System)

### 2.2 Mobile Navigation Drawer (`src/components/mobile-nav.tsx`)
- [x] ปุ่ม Hamburger Menu สำหรับหน้าจอขนาดเล็ก (Mobile / Tablet < 768px)
- [x] เมนู Drawer สไลด์ออกด้านข้างหรือ Dropdown พร้อม Animation จาก Framer Motion
- [x] ปิด Drawer อัตโนมัติเมื่อผู้ใช้คลิกเลือกลิงก์ใดๆ หรือคลิกพื้นที่ภายนอก

### 2.3 Theme Toggle Component (`src/components/theme-toggle.tsx`)
- [x] สร้าง Dropdown หรือ Toggle Switch เพื่อเลือก: Light, Dark, System
- [x] มี Animation เปลี่ยนไอคอนพระอาทิตย์ (`Sun`) และพระจันทร์ (`Moon`) อย่างลื่นไหล

### 2.4 Footer & Social Links (`src/components/footer.tsx`)
- [x] แสดงข้อความลิขสิทธิ์: `© 2026 Chaow Porkaew. Built with Next.js & Tailwind CSS.`
- [x] ลิงก์ Social Profiles พร้อมไอคอน:
  - GitHub (`https://github.com/...`)
  - LinkedIn (`https://linkedin.com/in/...`)
  - Email Mailto Link
- [x] ปุ่มลัดแอบแฝงสำหรับ Admin Login (`/admin`) ที่ส่วน Footer อย่างแนบเนียน
- [x] ปุ่ม Back to Top ที่ปรากฏเมื่อ Scroll ลงมาเกินระยะที่กำหนด

---

## 🔍 3. เกณฑ์การตรวจรับงาน (Acceptance Criteria)
1. **Smooth Scrolling**: เมื่อคลิกเมนูใน Navbar เว็บไซต์จะเลื่อนไปยัง Section เป้าหมายอย่างนุ่มนวลและไม่ถูก Navbar บังหัวข้อ (ตั้งค่า `scroll-margin-top` เหมาะสม)
2. **Mobile Usability**: Mobile Drawer ใช้งานได้สะดวกบนหน้าจอขนาด 320px–768px และไม่มีปัญหา Horizontal Overflow
3. **Theme Persistence**: การสลับธีมบันทึกค่าลงใน LocalStorage อัตโนมัติและไม่กระพริบเมื่อรีเฟรชหน้าเว็บ
4. **Accessible Links**: ปุ่มและลิงก์ทั้งหมดมี `aria-label` และรองรับ Keyboard Navigation (Tab/Enter)

---

## 🧪 4. แผนการทดสอบ (Verification & Testing)
1. **Responsive Testing**: ทดสอบบน Chrome DevTools ทั้งโหมด Mobile (iPhone, Pixel) และ Desktop (1920x1080)
2. **Scroll Offset Check**: คลิกเมนูแต่ละตัว ตรวจสอบว่าหัวข้อ Section อยู่ในตำแหน่งที่อ่านได้ชัดเจน
3. **Admin Link Check**: ตรวจสอบว่าลิงก์ไปยัง `/admin` ใน Footer สามารถคลิกเข้าหน้า Admin Login ได้
