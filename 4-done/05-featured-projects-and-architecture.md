# 📌 TASK-05: Featured Projects & System Architecture Showcases

> **Module**: Project Portfolio & Architecture Highlights  
> **Priority**: P0 (Must Have)  
> **Estimated Scope**: Project Showcase Cards, Architecture Diagrams/Highlights, Tech Tags, Category Filtering  
> **Reference**: [`CV_SPECIFICATION.md`](../CV_SPECIFICATION.md) — Section 2 & 3

---

## 🎯 1. วัตถุประสงค์ (Objective)
สร้างส่วนจัดแสดงผลงานและสถาปัตยกรรมระบบเด่น (System Architecture Showcases) ของ Senior Developer เช่น High-Throughput E-Commerce Microservices, Enterprise Analytics BI Platform, Cloud-Native Payment & Caching System พร้อมระบบ Filter หมวดหมู่ผลงาน

---

## 📋 2. รายการงานที่ต้องทำ (Task Checklist)

### 2.1 Project Data Definition (`src/data/projects.ts`)
- [ ] สร้าง Data Model สำหรับ Featured Projects:
  - `id`: Unique identifier
  - `title`: ชื่อโครงการ
  - `category`: `High-Scale Architecture` | `Fintech & Payment` | `Cloud & Analytics` | `Full-stack Web`
  - `summary`: สรุปภาพรวมและปัญหาที่แก้ไข (Problem & Solution)
  - `architectureHighlights`: จุดเด่นของสถาปัตยกรรม (เช่น Event-Driven, Caching Layer, RLS, Microservices)
  - `metrics`: ตัวเลขผลลัพธ์ (เช่น 300% Scale, 45% Latency Drop, 99.99% Uptime)
  - `techStack`: Array ของเทคโนโลยี (Next.js, Go, NestJS, Redis, PostgreSQL, AWS, Kafka)
  - `demoUrl` / `githubUrl` / `diagramUrl` (Optional links)

### 2.2 Populate Core Architecture Projects
- [ ] **Project 1: High-Throughput E-Commerce & Microservices Architecture**
  - สถาปัตยกรรม Event-Driven รองรับ Traffic เติบโต 300% แยก Service จัดการคำสั่งซื้อ คลังสินค้า และชำระเงิน
- [ ] **Project 2: Enterprise Analytics & BI Platform**
  - แพลตฟอร์มวิเคราะห์ข้อมูลองค์กรขนาดใหญ่พร้อม Real-time Dashboard และ Data Aggregation Pipeline
- [ ] **Project 3: Cloud-Native Payment Gateway & Distributed Caching System**
  - ระบบชำระเงินความปลอดภัยสูงพร้อม Multi-level Caching Strategy (Redis) ลดภาระ Database 45%

### 2.3 Interactive Project Showcase Component (`src/components/sections/projects-section.tsx`)
- [ ] หมวดหมู่แท็บกรองผลงาน (Category Filter Tabs: All, Architecture, Fintech, Cloud/DevOps)
- [ ] Project Cards:
  - แสดงชื่อโปรเจกต์, Badge ประเภทงาน, รายละเอียดสถาปัตยกรรม
  - Highlights Panel แสดงการแก้ปัญหาทางเทคนิคและสถิติความสำเร็จ
  - Tech Stack Badges
  - ปุ่ม `View Architecture Details` หรือ Modal รายละเอียดเชิงลึก
- [ ] Animation: Animated layout transitions เมื่อคลิกเปลี่ยนหมวดหมู่ด้วย Framer Motion (`layoutId` / `AnimatePresence`)

---

## 🔍 3. เกณฑ์การตรวจรับงาน (Acceptance Criteria)
1. **Senior Engineering Depth**: รายละเอียดโปรเจกต์สะท้อนการตัดสินใจทางสถาปัตยกรรม (Architecture Decision), Trade-offs และผลกระทบต่อธุรกิจ (Business Impact)
2. **Category Filtering**: สามารถกดกรองหมวดหมู่ได้อย่างราบรื่น ไม่กระตุก
3. **Card Layout & Aesthetics**: ดีไซน์เป็นการ์ดทันสมัย สไตล์ Dark/Light Mode สวยงาม มี Elevation/Border ชัดเจน

---

## 🧪 4. แผนการทดสอบ (Verification & Testing)
1. **Filter Switching**: ทดสอบคลิกทุกแท็บในหมวดหมู่ ตรวจสอบจำนวนการ์ดที่แสดงผล
2. **Responsive Grid**: ตรวจสอบ Grid 1 คอลัมน์บน Mobile, 2 คอลัมน์บน Tablet และ 3 คอลัมน์บน Desktop
3. **Link Handling**: ตรวจสอบว่าปุ่ม Action ต่างๆ ทำงานถูกต้อง ไม่เกิด Broken Link
