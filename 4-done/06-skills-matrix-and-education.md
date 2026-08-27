# 📌 TASK-06: Skills & Tech Stack Matrix & Education Section

> **Module**: Skills Competency & Academic Background  
> **Priority**: P0 (Must Have)  
> **Estimated Scope**: Skills Matrix (6 Categories), Interactive Skill Cards/Badges, Education Cards (CMU M.Sc./B.Sc.)  
> **Reference**: [`CV_SPECIFICATION.md`](../CV_SPECIFICATION.md) — Section 4 & 5

---

## 🎯 1. วัตถุประสงค์ (Objective)
สร้างส่วนจัดแสดงทักษะความเชี่ยวชาญ (Skills Matrix) ครอบคลุม 6 หมวดหมู่วิศวกรรมซอฟต์แวร์ และส่วนประวัติการศึกษา (Education) จากมหาวิทยาลัยเชียงใหม่ (ปริญญาโท และปริญญาตรี ด้านวิทยาการคอมพิวเตอร์)

---

## 📋 2. รายการงานที่ต้องทำ (Task Checklist)

### 2.1 Skills Data Definition (`src/data/skills.ts`)
- [ ] กำหนดข้อมูล Skills ทั้ง 6 หมวดหมู่ตามตารางใน `CV_SPECIFICATION.md`:
  1. **Programming Languages**: TypeScript, JavaScript, Python, Go, SQL, HTML5/CSS3
  2. **Frontend Frameworks**: React, Next.js, Vue.js, Tailwind CSS, Redux / Zustand
  3. **Backend & APIs**: Node.js (NestJS, Express), Go, RESTful APIs, GraphQL, Microservices, Event-Driven (Kafka/RabbitMQ)
  4. **Databases & Caching**: PostgreSQL, MySQL, MongoDB, Redis
  5. **Cloud & DevOps**: Docker, Kubernetes, AWS, CI/CD (GitHub Actions), Linux, Nginx
  6. **Architecture & Best Practices**: Clean Architecture, Domain-Driven Design (DDD), TDD, System Design, Agile/Scrum, Mentoring
- [ ] เพิ่มไอคอนหรือระดับความเชี่ยวชาญสำหรับแต่ละทักษะ

### 2.2 Skills Matrix Component (`src/components/sections/skills-section.tsx`)
- [ ] Grid Layout แสดงการ์ด 6 หมวดหมู่
- [ ] หัวข้อหมวดหมู่พร้อมไอคอนกำกับ
- [ ] Chip/Badge แสดงรายการทักษะที่อ่านง่ายและมี Interactive Hover Effect
- [ ] ตัวเลือกค้นหาหรือกรองทักษะ (Skill Quick Search / Filter) เพื่อความสะดวกของ Technical Recruiter

### 2.3 Education Data & Component (`src/components/sections/education-section.tsx`)
- [ ] Data Structure (`src/data/education.ts`):
  - 🎓 **ปริญญาโท (Master's Degree)**:
    - วท.ม. วิทยาการคอมพิวเตอร์ (M.Sc. in Computer Science)
    - มหาวิทยาลัยเชียงใหม่ (Chiang Mai University)
    - ปีที่สำเร็จการศึกษา: พ.ศ. 2554 (ค.ศ. 2011)
  - 🎓 **ปริญญาตรี (Bachelor's Degree)**:
    - วท.บ. วิทยาการคอมพิวเตอร์ (B.Sc. in Computer Science)
    - มหาวิทยาลัยเชียงใหม่ (Chiang Mai University)
    - ปีที่สำเร็จการศึกษา: พ.ศ. 2552 (ค.ศ. 2009)
- [ ] ดีไซน์การ์ดการศึกษาที่ดูน่าเชื่อถือ เป็นทางการ พร้อมไอคอนสถาบัน/หมวกบัณฑิต

---

## 🔍 3. เกณฑ์การตรวจรับงาน (Acceptance Criteria)
1. **Complete Tech Coverage**: มีรายการทักษะครบทั้ง 6 หมวดหมู่ตรงตาม Spec
2. **Accurate Degree Info**: ข้อมูลปริญญาโทและปริญญาตรี มช. ถูกต้อง ครบทั้งปี พ.ศ. และ ค.ศ.
3. **Visual Balance**: การ์ด Skills Matrix และ Education จัดวางอย่างสมดุลบนทุกขนาดหน้าจอ

---

## 🧪 4. แผนการทดสอบ (Verification & Testing)
1. **Content Verification**: ตรวจสอบการสะกดชื่อเทคโนโลยีและชื่อปริญญาภาษาไทย/อังกฤษ
2. **Responsive Check**: ตรวจสอบการแสดงผลบนจอมือถือและการตัดคำ (Word Break / Badge Wrap)
3. **Theme Contrast**: ตรวจสอบสีพื้นหลังของการ์ดและตัวหนังสือให้อ่านง่ายทั้ง Light/Dark Mode
