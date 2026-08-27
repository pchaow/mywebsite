# 📌 TASK-04: Career Timeline & Work Experience Details

> **Module**: Work Experience & Career Milestones  
> **Priority**: P0 (Must Have)  
> **Estimated Scope**: Interactive Timeline UI, Work Experience Cards, Key Achievements, Tech Badges  
> **Reference**: [`CV_SPECIFICATION.md`](../CV_SPECIFICATION.md) — Section 3

---

## 🎯 1. วัตถุประสงค์ (Objective)
พัฒนาระบบแสดงประวัติการทำงานแบบ Interactive Timeline ครอบคลุมประสบการณ์ 15+ ปี (2011 – ปัจจุบัน) แยกเป็น 4 ยุคสำคัญ พร้อมรายละเอียดผลงานเชิงประจักษ์ (Key Achievements พร้อมตัวเลข % Growth / Performance) และ Tech Stack ที่ใช้งานในแต่ละตำแหน่ง

---

## 📋 2. รายการงานที่ต้องทำ (Task Checklist)

### 2.1 Career Data Structure (`src/data/experience.ts`)
- [ ] สร้าง Data Model สำหรับ Work Experience ที่มี Type ปลอดภัย:
  - Role Title, Company Category/Industry, Period (Start - End)
  - Key Responsibilities
  - Key Achievements (Bullet points with metric highlights)
  - Tech Stack Array (List of technologies used)
  - Period Highlight (เช่น 2022-Present, 2018-2022, 2014-2018, 2011-2014)

### 2.2 Populate Experience Content (ตรงตาม `CV_SPECIFICATION.md`)
- [ ] **1. Senior Software Developer / Technical Lead (2022 – ปัจจุบัน)**
  - *Tech Enterprise & Scale-up Platform*
  - Achievements: Migrate Monolith -> Microservices (300% Scale), Caching Redis ลด latency 45%, AI/LLM Integration, Mentoring Developer 10+ คน
  - Tech Stack: `Next.js`, `TypeScript`, `Node.js (NestJS)`, `Go`, `Redis`, `Docker`, `Kubernetes`, `AWS`
- [ ] **2. Senior Full Stack Developer (2018 – 2022)**
  - *Fintech & E-Commerce Solutions*
  - Achievements: พัฒนา Web Platform (React/Next.js/Node.js/PostgreSQL) + CI/CD, DB Optimization ลด Cloud cost 30%/เดือน, ระบบ Security & Auth (OAuth2, JWT, RBAC)
  - Tech Stack: `React`, `Node.js`, `Express`, `PostgreSQL`, `AWS`, `Docker`, `GitHub Actions`
- [ ] **3. Software Engineer / Full Stack Developer (2014 – 2018)**
  - *Digital Agency & Enterprise Web Applications*
  - Achievements: พัฒนา Web SPA & Back-office 15+ โครงการ, นำการเปลี่ยนผ่านสู่ Modern JavaScript Ecosystem (ES6+, React, Node.js)
  - Tech Stack: `JavaScript (ES6+)`, `React`, `Vue.js`, `Node.js`, `MySQL`, `REST APIs`
- [ ] **4. Junior to Mid-level Web Developer (2011 – 2014)**
  - *IT Consulting & Software House*
  - Achievements: พัฒนาและดูแลระบบ ERP/CRM, วางรากฐาน RDBMS, OOP และ Database Schema
  - Tech Stack: `PHP / Java`, `HTML5`, `CSS3`, `JavaScript`, `jQuery`, `MySQL`

### 2.3 Interactive Timeline Component (`src/components/sections/experience-section.tsx`)
- [ ] เส้นแกนเวลาแนวตั้ง (Vertical Timeline Tree) พร้อม Pulse Node Indicator
- [ ] การจัด Layout แบบสลับซ้าย-ขวาบนจอใหญ่ (Desktop) และเป็นแถวเดียวชิดซ้ายบน Mobile
- [ ] การจัดรูปแบบตัวเลขสถิติความสำเร็จ (Metrics Highlighter เช่น `300%`, `45%`, `30%`, `15+ Projects`) ให้อ่านง่ายและสะดุดตา
- [ ] กล่อง Tech Badges ในแต่ละการ์ดงาน
- [ ] ตัวเลือก Expand/Collapse หรือ Filter ดูเฉพาะ Role เพื่อความกระชับ

---

## 🔍 3. เกณฑ์การตรวจรับงาน (Acceptance Criteria)
1. **Accurate History**: ข้อมูลทั้ง 4 ช่วงเวลาและตัวเลขสถิติต้องตรงตาม `CV_SPECIFICATION.md` ข้อ 3 ครบถ้วน 100%
2. **Timeline Visuals**: เส้น Timeline เชื่อมต่อกันอย่างต่อเนื่อง สวยงาม ไม่มีรอยต่อขาดตอน
3. **Mobile Layout**: บนหน้าจอ Mobile (ความกว้าง < 768px) ไม่มีการ์ดล้นจอหรือตัวอักษรทับเส้น Timeline
4. **Interactive Hover**: การ์ดแต่ละใบมี Hover State ตอบสนองต่อผู้ใช้

---

## 🧪 4. แผนการทดสอบ (Verification & Testing)
1. **Content Review**: ตรวจทานข้อความภาษาไทยและเทคโนโลยีในแต่ละ Role
2. **Mobile Timeline Test**: ทดสอบการเลื่อนหน้าจอผ่าน Timeline บนโทรศัพท์มือถือ
3. **Print Stylesheet Compatibility**: ตรวจสอบว่าเมื่อสั่งพิมพ์ Timeline แปลงเป็นการ์ด Resume ที่เป็นระเบียบ
