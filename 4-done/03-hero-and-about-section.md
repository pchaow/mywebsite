# 📌 TASK-03: Hero Section & About Me / Core Values

> **Module**: Profile Presentation & Introduction  
> **Priority**: P0 (Must Have)  
> **Estimated Scope**: Hero Banner, Profile Avatar, Headline, Quick Stats, About Me, Engineering Core Values  
> **Reference**: [`CV_SPECIFICATION.md`](../CV_SPECIFICATION.md) — Section 1 & 2

---

## 🎯 1. วัตถุประสงค์ (Objective)
สร้างส่วน Hero Section และ About Me ที่เน้นภาพลักษณ์ระดับ Senior Software Developer / Technical Lead ประสบการณ์ 15+ ปี พร้อม Quick Stats สรุปความสำเร็จ และปรัชญาการทำงาน (Engineering Excellence & Leadership)

---

## 📋 2. รายการงานที่ต้องทำ (Task Checklist)

### 2.1 Hero Section (`src/components/sections/hero-section.tsx`)
- [ ] Profile Photo Display:
  - ดึงรูปภาพจาก `assets/profile.png`
  - ทำกรอบรูปทรงกลมหรือโมเดิร์นพร้อม Subtle Glow / Gradient Ring
  - รองรับ Next.js `<Image />` optimization (priority loading)
- [ ] Status Badge:
  - 🟢 `Available for Senior Developer / Tech Lead / Solutions Architect roles`
- [ ] Headline & Title:
  - **ชื่อ-นามสกุล**: เชาวน์ ปอแก้ว (Chaow Porkaew)
  - **ตำแหน่งเป้าหมาย**: Senior Software Developer / Technical Lead
  - คำโปรยสั้นกระชับ ดึงดูดสายตา Recruiter และ Hiring Manager
- [ ] Call To Action (CTA) Buttons:
  - `[📄 Download CV / Resume]` (Trigger PDF Print / Download)
  - `[💬 Contact / Guestbook]` (Smooth scroll ไปยังส่วน Guestbook/Contact)
  - `[🔗 View Projects]` (Smooth scroll ไปยังส่วน Featured Projects)
- [ ] Quick Stats Highlight Grid / Badges:
  - 🏆 **15+ Years** Experience (2011 – Present)
  - 🚀 **30+ Enterprise Projects** Delivered
  - 📈 **300% Scale** & Microservices Optimization
  - 🎓 **M.Sc. & B.Sc.** in Computer Science (CMU)

### 2.2 About Me & Core Values Section (`src/components/sections/about-section.tsx`)
- [ ] Professional Summary Paragraph:
  - สรุปความเชี่ยวชาญ Full-stack สมัยใหม่, Cloud Architecture, Distributed Systems, Clean Code และ Scalability
- [ ] Core Values & Engineering Philosophy Cards:
  - 🏗️ **Clean Architecture & Scalability**: ออกแบบระบบที่รองรับการเติบโต ขยายตัวง่าย ดูแลรักษาง่าย
  - ⚡ **Performance & Optimization**: ให้ความสำคัญกับ Low Latency, Efficient Caching และ Resource Optimization
  - 👥 **Technical Leadership & Mentoring**: แบ่งปันความรู้ โค้ชชิ่งทีม พัฒนาวัฒนธรรมทางวิศวกรรม (Engineering Culture)
  - 🔒 **Security & Reliability**: ยึดมั่นมาตรฐานความปลอดภัย Best Practices และ Zero-downtime reliability
- [ ] Modern UI Animation: ใช้ Framer Motion ทำ Stagger Fade-in เมื่อ Scroll เข้าสู่หน้าจอ

---

## 🔍 3. เกณฑ์การตรวจรับงาน (Acceptance Criteria)
1. **Visual Hierarchy**: ส่วน Hero ต้องโดดเด่น อ่านง่ายภายใน 5 วินาทีแรกที่ผู้เข้าชมเปิดหน้าเว็บ
2. **High-DPI Profile Image**: รูปโปรไฟล์คมชัด โหลดไว ไม่เสียสัดส่วน (Aspect Ratio) บนทุกอุปกรณ์
3. **Data Accuracy**: ข้อมูลทั้งหมดตรงตามที่ระบุไว้ใน `CV_SPECIFICATION.md` ข้อ 1 และ 2
4. **Interactive CTAs**: ปุ่ม Action ทำงานถูกต้องตามคำสั่งและมี Hover Effects ที่เป็นธรรมชาติ

---

## 🧪 4. แผนการทดสอบ (Verification & Testing)
1. **Responsive Viewports**: ทดสอบหน้าจอขนาด 375px (iPhone), 768px (iPad), 1280px (MacBook), 1920px (Desktop)
2. **Next.js Image Audit**: ตรวจสอบ Network Tab ว่ารูปภาพถูก Optimize เป็น WebP/AVIF ผ่าน Next.js Image Component
3. **Typography & Readability**: ตรวจสอบ Contrast ของข้อความทั้งใน Dark Theme และ Light Theme
