# 📌 TASK-12: SEO, OpenGraph Metadata, Performance & Accessibility (a11y)

> **Module**: SEO, Performance & Web Standards  
> **Priority**: P1 (High)  
> **Estimated Scope**: Next.js Metadata API, OpenGraph Social Image, Favicons, Semantic HTML, ARIA, Lighthouse 95+  
> **Reference**: [`CV_SPECIFICATION.md`](../CV_SPECIFICATION.md) — Section 7

---

## 🎯 1. วัตถุประสงค์ (Objective)
เพิ่มประสิทธิภาพด้าน SEO, สร้างการ์ดแสดงผลเมื่อแชร์บนโซเชียลมีเดีย (OpenGraph / Twitter Card), ปรับแต่ง Web Accessibility (WCAG 2.1 AA) และ Optimize Performance ให้ได้คะแนน Google Lighthouse ระดับ 95+

---

## 📋 2. รายการงานที่ต้องทำ (Task Checklist)

### 2.1 Next.js Metadata API Configuration (`src/app/layout.tsx`)
- [ ] Title Template: `Chaow Porkaew | Senior Software Developer & Technical Lead`
- [ ] Meta Description: สรุปความเชี่ยวชาญ 15+ ปี Full-stack, Microservices, Cloud Architecture
- [ ] Meta Keywords: `Chaow Porkaew`, `Senior Software Developer`, `Technical Lead`, `Full Stack Developer`, `Next.js`, `TypeScript`, `Node.js`, `Go`, `Microservices`, `System Architecture`
- [ ] Canonical URL & Alternates
- [ ] Robots Tag: `index, follow`

### 2.2 OpenGraph & Twitter Card
- [ ] สร้าง Social Preview Card Image (`src/app/opengraph-image.tsx` หรือ `public/og-image.png` ขนาด 1200x630 px)
- [ ] แสดงชื่อ, ตำแหน่ง, รูปโปรไฟล์ และสถิติ "15+ Years Experience" บนภาพแชร์
- [ ] Twitter Card Tags (`summary_large_image`, site, creator)

### 2.3 Favicon & App Icons
- [ ] จัดเตรียม Favicon หลายขนาด (`favicon.ico`, `icon.png`, `apple-icon.png`)
- [ ] Web Manifest (`src/app/manifest.ts` หรือ `public/manifest.json`)

### 2.4 Semantic HTML & Accessibility (a11y)
- [ ] ตรวจสอบการใช้ Semantic Tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- [ ] เพิ่ม `aria-label` และ `role` ให้กับปุ่มและ Interactive Elements ทั้งหมด
- [ ] ตรวจสอบการรองรับ Keyboard Navigation (Focus ring ชัดเจน, Focus Trap ใน Modal)
- [ ] Color Contrast Ratio >= 4.5:1 ตามมาตรฐาน WCAG AA

### 2.5 Sitemap & Robots (`src/app/sitemap.ts`, `src/app/robots.ts`)
- [ ] Generate Dynamic `sitemap.xml` ครอบคลุม Root page และ `/resume`
- [ ] Generate `robots.txt` ป้องกันการ Index หน้าแอดมิน (`Disallow: /admin`)

---

## 🔍 3. เกณฑ์การตรวจรับงาน (Acceptance Criteria)
1. **Social Sharing Preview**: เมื่อนำ URL ไปทดสอบใน Facebook Sharing Debugger หรือ Twitter Card Validator ภาพและข้อความแสดงผลสวยงาม คมชัด
2. **Lighthouse Score**: ผ่านเกณฑ์ Lighthouse ด้วยคะแนน:
   - Performance: >= 90
   - Accessibility: >= 95
   - Best Practices: >= 95
   - SEO: 100
3. **No a11y Violations**: ไม่มี Error ด้าน Accessibility จากเครื่องมือ Axe หรือ Lighthouse Audit

---

## 🧪 4. แผนการทดสอบ (Verification & Testing)
1. **Lighthouse Audit**: รัน Google Lighthouse บน Chrome DevTools ทั้งโหมด Mobile และ Desktop
2. **Social Card Debugger**: ทดสอบผ่าน OpenGraph Linter
3. **Keyboard Only Navigation**: ทดสอบใช้เฉพาะแป้นพิมพ์ (Tab, Enter, Space, Esc) ใช้งานเว็บไซต์ตั้งแต่ต้นจนจบ
