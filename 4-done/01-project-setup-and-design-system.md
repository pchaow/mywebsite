# 📌 TASK-01: Project Setup & Design System Foundation

> **Module**: Core Architecture & Infrastructure  
> **Priority**: P0 (Must Have)  
> **Estimated Scope**: Project Scaffolding, Styling, Themes, Shared UI Components  
> **Reference**: [`CV_SPECIFICATION.md`](../CV_SPECIFICATION.md) — Section 7

---

## 🎯 1. วัตถุประสงค์ (Objective)
ติดตั้งและวางโครงสร้างโปรเจกต์ Next.js (App Router) ร่วมกับ TypeScript, Tailwind CSS, shadcn/ui, Framer Motion และระบบ Theme Provider (Dark/Light Mode) ให้พร้อมสำหรับการพัฒนาในทุกโมดูลถัดไป

---

## 📋 2. รายการงานที่ต้องทำ (Task Checklist)

### 2.1 Project Initialization & Dependencies
- [x] Initialize Next.js 14+ / 15+ โปรเจกต์ด้วย App Router (`src/` directory structure)
- [x] ตั้งค่า TypeScript Config (`tsconfig.json`) พร้อม Path Aliases (`@/*` -> `./src/*`)
- [x] ติดตั้ง Dependencies หลัก:
  - Styling: `tailwindcss`, `postcss`, `autoprefixer`, `tailwind-merge`, `clsx`, `class-variance-authority`
  - Icons: `lucide-react`
  - Animations: `framer-motion`
  - Theme: `next-themes`
  - Utilities: `date-fns` หรือ `dayjs`, `zod`

### 2.2 Design System & Tailwind Configuration
- [x] ตั้งค่า `tailwind.config.ts` ให้รองรับ:
  - Dark Mode class strategy (`darkMode: ["class"]`)
  - Color Tokens: Primary, Secondary, Muted, Accent, Destructive, Card, Background, Foreground
  - Typography Scale และ Custom Font Setup (Inter / Prompt / Sarabun สำหรับภาษาไทยและอังกฤษ)
- [x] ตั้งค่า `src/app/globals.css` สำหรับ Root CSS Variables (HSL Color format สไตล์ shadcn/ui)

### 2.3 Theme Provider & Layout Root
- [x] สร้าง `src/components/theme-provider.tsx` โดยใช้ `next-themes`
- [x] ปรับปรุง `src/app/layout.tsx` ให้หุ้มด้วย `ThemeProvider` (รองรับ default theme: system/dark, enableSystem, disableTransitionOnChange)
- [x] นำเข้าไฟล์รูปภาพโปรไฟล์จาก `assets/profile.png` เข้าสู่ `public/assets/profile.png` หรือโครงสร้าง static assets

### 2.4 Reusable UI Components (shadcn/ui Core)
- [x] ติดตั้ง/สร้าง Core Components ขั้นพื้นฐาน:
  - `Button` (`src/components/ui/button.tsx`)
  - `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` (`src/components/ui/card.tsx`)
  - `Badge` (`src/components/ui/badge.tsx`)
  - `Input` & `Textarea` (`src/components/ui/input.tsx`, `src/components/ui/textarea.tsx`)
  - `Dialog` / `Modal` (`src/components/ui/dialog.tsx`)
  - `DropdownMenu` (`src/components/ui/dropdown-menu.tsx`)
  - `Tabs` (`src/components/ui/tabs.tsx`)
  - `Toast` / `Sonner` (`src/components/ui/sonner.tsx`)

---

## 🔍 3. เกณฑ์การตรวจรับงาน (Acceptance Criteria)
1. **Build & Type Check**: รัน `npm run build` และ `npm run lint` ผ่านโดยไม่มี error หรือ warning ที่ร้ายแรง
2. **Theme Switching**: สามารถสลับระหว่าง Light Mode และ Dark Mode ได้อย่างลื่นไหล ไม่มีอาการ Theme Flashing (FOUC)
3. **Responsive Typography & Font**: ภาษาไทยและภาษาอังกฤษแสดงผลฟอนต์สวยงาม อ่านง่าย ชัดเจน
4. **Clean Folder Structure**: โครงสร้างโฟลเดอร์ใน `src/` เป็นระเบียบ:
   ```text
   src/
   ├── app/
   │   ├── layout.tsx
   │   ├── page.tsx
   │   └── globals.css
   ├── components/
   │   ├── ui/
   │   └── theme-provider.tsx
   ├── lib/
   │   └── utils.ts
   └── types/
   ```

---

## 🧪 4. แผนการทดสอบ (Verification & Testing)
1. **Development Server**: รัน `npm run dev` ตรวจสอบว่าหน้าเว็บเปิดได้ที่ `http://localhost:3000`
2. **Theme Test**: ทดสอบเปลี่ยน `dark` / `light` class บน `<html>` element
3. **Component Smoke Test**: ทดสอบ Render ปุ่ม `Button`, `Card`, และ `Badge` ในหน้า `page.tsx`
