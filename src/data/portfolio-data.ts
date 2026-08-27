export interface WorkExperience {
  id: string;
  period: string;
  role: string;
  companyType: string;
  description: string;
  achievements: string[];
  skills: string[];
  highlight?: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Architecture" | "Full Stack" | "Fintech & Cloud" | "E-Commerce";
  description: string;
  metrics: string[];
  architectureDetails: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface Education {
  degree: string;
  degreeEn: string;
  institution: string;
  institutionEn: string;
  year: string;
  yearEn: string;
  honors?: string;
  field: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  date: string;
  message: string;
  visibility: "public" | "private";
  status: "approved" | "pending" | "rejected";
  pinned?: boolean;
  avatarUrl?: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    nameTh: "เชาวน์ ปอแก้ว",
    nameEn: "Chaow Porkaew",
    roleTh: "Senior Software Developer / Technical Lead",
    roleEn: "Senior Software Developer & Technical Lead",
    experienceYears: "15+",
    statusText: "พร้อมรับพิจารณาข้อเสนองานระดับ Senior / Lead / Solutions Architect",
    summary:
      "Senior Software Developer ประสบการณ์กว่า 15 ปี ในการออกแบบและพัฒนาระบบ Web Application, Cloud Architecture และ High-scale Distributed Systems มีความเชี่ยวชาญทั้ง Frontend และ Backend สมัยใหม่ (Modern Full-stack) ให้ความสำคัญกับ Clean Code, Performance Optimization และ Scalability พร้อมทั้งมีประสบการณ์ในการนำทีม (Technical Leadership) และผลักดัน Best Practices ทางวิศวกรรมซอฟต์แวร์",
    email: "chaow.porkaew@gmail.com",
    location: "เชียงใหม่ / กรุงเทพฯ / Remote (Thailand)",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    stats: [
      { label: "Years Experience", value: "15+", detail: "2011 – ปัจจุบัน" },
      { label: "Enterprise Projects", value: "30+", detail: "Delivered & Scaled" },
      { label: "System Scale", value: "300%", detail: "Microservices Throughput" },
      { label: "Education", value: "M.Sc. & B.Sc.", detail: "วิทยาการคอมพิวเตอร์ มช." },
    ],
    coreValues: [
      {
        icon: "Layers",
        title: "Clean Architecture & Scalability",
        titleTh: "สถาปัตยกรรมที่ยืดหยุ่น & ขยายตัวได้สูง",
        description:
          "ออกแบบระบบโดยยึดหลัก Modular Architecture, Separation of Concerns และ Event-Driven เพื่อรองรับการขยายตัว (Scale) ได้อย่างราบรื่น",
      },
      {
        icon: "Zap",
        title: "Performance & Low Latency",
        titleTh: "ประสิทธิภาพและความเร็วสูงสุด",
        description:
          "ให้ความสำคัญกับการปรับแต่ง Query Optimization, Multi-layer Caching (Redis), Edge CDN และ Efficient State Management",
      },
      {
        icon: "Users",
        title: "Technical Leadership & Mentoring",
        titleTh: "ความเป็นผู้นำทางเทคนิคและการโค้ชชิ่ง",
        description:
          "ถ่ายทอด Best Practices, Code Review มาตรฐานสูง, โค้ชชิ่งทีมวิศวกร และสร้างวัฒนธรรม Continuous Learning ภายในทีม",
      },
      {
        icon: "ShieldCheck",
        title: "Security & Zero-Downtime Reliability",
        titleTh: "ความปลอดภัยและความเสถียร 99.99%",
        description:
          "วางมาตรฐานความปลอดภัย RBAC, Data Protection, Automated CI/CD Pipelines และระบบ Monitoring ติดตามสถานะระบบตลอด 24/7",
      },
    ],
  },

  experiences: [
    {
      id: "exp-1",
      period: "2022 – ปัจจุบัน",
      role: "Senior Software Developer / Technical Lead",
      companyType: "Tech Enterprise & Scale-up Platform",
      description:
        "รับผิดชอบการออกแบบสถาปัตยกรรมระบบ (System Architecture), กำกับดูแลมาตรฐานวิศวกรรมซอฟต์แวร์ และเป็นที่ปรึกษาทางเทคนิคให้กับทีมวิศวกร",
      achievements: [
        "ออกแบบและ Migrate สถาปัตยกรรมจาก Monolith สู่ Microservices (Event-Driven Architecture) รองรับผู้ใช้งานเพิ่มขึ้น 300%",
        "พัฒนาระบบ Core API และ Caching Strategy (Redis) ช่วยลด Response Time ของระบบลง 45%",
        "นำ AI/LLM Integration เข้ามาช่วยเพิ่มประสิทธิภาพการทำงานและฟีเจอร์อัตโนมัติในโปรดักต์",
        "โค้ชชิ่งและ Mentoring ทีม Developer ระดับ Junior และ Mid-level มากกว่า 10 คน",
      ],
      skills: ["Next.js", "TypeScript", "Node.js (NestJS)", "Go", "Redis", "Docker", "Kubernetes", "AWS"],
      highlight: true,
    },
    {
      id: "exp-2",
      period: "2018 – 2022",
      role: "Senior Full Stack Developer",
      companyType: "Fintech & E-Commerce Solutions",
      description:
        "พัฒนาระบบ Payment Gateway, Dashboard วิเคราะห์ข้อมูลความเร็วสูง และแพลตฟอร์ม E-Commerce ขนาดใหญ่",
      achievements: [
        "สร้าง Web Platform ด้วย React / Next.js, Node.js / TypeScript, PostgreSQL พร้อมระบบ CI/CD Pipeline อัตโนมัติ",
        "ปรับปรุงโครงสร้าง Database และ Query Optimization ทำให้ต้นทุน Cloud Server (AWS) ลดลง 30% ต่อเดือน",
        "วางระบบ Security & Authentication (OAuth2, JWT, Role-based Access Control) ตามมาตรฐานความปลอดภัยสากล",
      ],
      skills: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Docker", "GitHub Actions"],
    },
    {
      id: "exp-3",
      period: "2014 – 2018",
      role: "Software Engineer / Full Stack Developer",
      companyType: "Digital Agency & Enterprise Web Applications",
      description:
        "พัฒนาเว็บแอปพลิเคชันแบบ Single Page Applications (SPA) และออกแบบ RESTful APIs สำหรับลูกค้าระดับองค์กร",
      achievements: [
        "พัฒนาเว็บแอปพลิเคชันและ Back-office มากกว่า 15 โครงการ สำหรับลูกค้ากลุ่มค้าปลีกและองค์กร",
        "ร่วมเปลี่ยนผ่านเทคโนโลยีจาก Legacy Web สู่ Modern JavaScript Ecosystem (ES6+, React, Node.js)",
      ],
      skills: ["JavaScript (ES6+)", "React", "Vue.js", "Node.js", "MySQL", "REST APIs"],
    },
    {
      id: "exp-4",
      period: "2011 – 2014",
      role: "Junior to Mid-level Web Developer",
      companyType: "IT Consulting & Software House",
      description:
        "เริ่มต้นสายงานซอฟต์แวร์ พัฒนาระบบฐานข้อมูล เขียน Business Backend Logic และพัฒนา Frontend User Interfaces",
      achievements: [
        "พัฒนาและบำรุงรักษาระบบ ERP / CRM ภายในองค์กร",
        "วางรากฐานด้าน Relational Databases (MySQL, SQL Server), OOP และการออกแบบ Database Schema",
      ],
      skills: ["PHP", "Java", "HTML5", "CSS3", "JavaScript", "jQuery", "MySQL"],
    },
  ] as WorkExperience[],

  projects: [
    {
      id: "proj-1",
      title: "High-Throughput Microservices E-Commerce Platform",
      subtitle: "Event-Driven Distributed E-Commerce Architecture",
      category: "Architecture",
      description:
        "สถาปัตยกรรม Microservices สำหรับแพลตฟอร์ม E-Commerce ขนาดใหญ่ รองรับทราฟฟิกระดับ Flash Sale ด้วย Message Broker และ Distributed Caching",
      metrics: [
        "รองรับ 50,000+ Requests / Minute ในช่วง Peak",
        "ลด Response Time ลง 45% (P99 < 120ms)",
        "Zero-downtime Deployment ด้วย Kubernetes",
      ],
      architectureDetails: [
        "API Gateway Routing & Rate Limiting",
        "Kafka / RabbitMQ Event-Driven Order Processing",
        "Redis Distributed Locks & Multi-layer Cache",
        "PostgreSQL Read Replicas & Connection Pooling",
      ],
      techStack: ["Next.js", "Go", "NestJS", "Kafka", "Redis", "PostgreSQL", "Docker", "K8s"],
      featured: true,
    },
    {
      id: "proj-2",
      title: "Cloud-Native Fintech Payment Gateway & Reconciliation",
      subtitle: "Secure & Resilient Financial Transaction Engine",
      category: "Fintech & Cloud",
      description:
        "ระบบประมวลผลการชำระเงินและกระทบยอดเงิน (Payment Reconciliation) แบบ Real-time พร้อมมาตรฐานความปลอดภัยเข้มงวด",
      metrics: [
        "ประมวลผลธุรกรรมทางการเงินถูกต้อง 99.999% (Idempotency Key)",
        "ลดค่าใช้จ่าย Cloud AWS ลง 30% จากการ Optimize Architecture",
        "ระบบ Audit Trail บันทึกทุกความเคลื่อนไหว 100%",
      ],
      architectureDetails: [
        "Idempotent API Transaction Handling",
        "Double-Entry Ledger Architecture",
        "Automated Nightly Reconciliation Engine",
        "AWS KMS Encryption & PCI-DSS Compliance Guidelines",
      ],
      techStack: ["Node.js", "TypeScript", "PostgreSQL", "AWS Lambda", "SQS", "Redis", "Docker"],
      featured: true,
    },
    {
      id: "proj-3",
      title: "Enterprise Analytics & Real-time BI Dashboard",
      subtitle: "High-Volume Data Visualization & Reporting System",
      category: "Full Stack",
      description:
        "แดชบอร์ดสรุปผลและวิเคราะห์ข้อมูลเชิงลึกสำหรับผู้บริหาร แสดงผลกราฟและ KPI แบบ Real-time พร้อมฟังก์ชัน Export รายงานหลายรูปแบบ",
      metrics: [
        "โหลดข้อมูล 1,000,000+ Data Points ภายใน 800ms",
        "รองรับการปรับแต่ง Custom Widgets อิสระของผู้ใช้",
        "Export รายงาน PDF & Excel ข้อมูลมหาศาลได้อย่างลื่นไหล",
      ],
      architectureDetails: [
        "Next.js App Router Server-Side Streaming",
        "Tailwind CSS + shadcn/ui Data Grid Visualization",
        "Optimized Database Aggregation Queries & Indexed Views",
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "PostgreSQL", "Redis"],
      featured: true,
    },
    {
      id: "proj-4",
      title: "Modern Portfolio & Verified Guestbook Platform (This Website)",
      subtitle: "Zero-Ops Full-Stack Serverless Architecture",
      category: "Full Stack",
      description:
        "เว็บไซต์ Portfolio และ Online CV ส่วนตัว พร้อมระบบสมุดเยี่ยมชม (Guestbook) และระบบจัดการสำหรับเจ้าของเว็บ (Admin Moderation)",
      metrics: [
        "100% Free-Tier Architecture (Next.js + Supabase + Vercel)",
        "Lighthouse Score 98+ (Performance, SEO, a11y)",
        "Sub-second Page Load ด้วย Static Generation (SSG)",
      ],
      architectureDetails: [
        "Next.js Server Actions สำหรับ Mutation Logic",
        "Supabase PostgreSQL พร้อม Row Level Security (RLS)",
        "Cloudflare Turnstile Anti-Spam Verification",
        "Instant Webhook Notifications (Telegram / Discord)",
      ],
      techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase", "Turnstile"],
      featured: true,
    },
  ] as Project[],

  skills: [
    {
      title: "Programming Languages",
      description: "ภาษาหลักที่เชี่ยวชาญและใช้งานในการพัฒนา",
      skills: [
        { name: "TypeScript", level: 95, highlight: true },
        { name: "JavaScript (ES6+)", level: 95, highlight: true },
        { name: "Go (Golang)", level: 85, highlight: true },
        { name: "SQL", level: 90, highlight: true },
        { name: "Python", level: 80 },
        { name: "HTML5 / CSS3", level: 95 },
      ],
    },
    {
      title: "Frontend & UI Ecosystem",
      description: "เทคโนโลยีสร้างส่วนต่อประสานผู้ใช้ที่ทันสมัย",
      skills: [
        { name: "React", level: 95, highlight: true },
        { name: "Next.js (App Router)", level: 95, highlight: true },
        { name: "Tailwind CSS", level: 95, highlight: true },
        { name: "shadcn/ui & Radix UI", level: 90 },
        { name: "Vue.js", level: 80 },
        { name: "State Management (Zustand/Redux)", level: 90 },
      ],
    },
    {
      title: "Backend & API Architecture",
      description: "การพัฒนาเซิร์ฟเวอร์, APIs และโครงสร้างระบบบริการ",
      skills: [
        { name: "Node.js / NestJS", level: 92, highlight: true },
        { name: "RESTful APIs & GraphQL", level: 95, highlight: true },
        { name: "Microservices Architecture", level: 90, highlight: true },
        { name: "Event-Driven (Kafka/RabbitMQ)", level: 85 },
        { name: "Server Actions & Serverless", level: 90 },
        { name: "Authentication (OAuth2, JWT)", level: 92 },
      ],
    },
    {
      title: "Databases & Caching",
      description: "การจัดเก็บข้อมูล, แคชชิ่ง และการเพิ่มความเร็วในการสืบค้น",
      skills: [
        { name: "PostgreSQL", level: 92, highlight: true },
        { name: "Redis", level: 90, highlight: true },
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "Supabase", level: 88, highlight: true },
        { name: "Query Optimization & Indexing", level: 90 },
      ],
    },
    {
      title: "Cloud, DevOps & Infrastructure",
      description: "การ Deploy, Containerization และ CI/CD Pipelines",
      skills: [
        { name: "Docker", level: 90, highlight: true },
        { name: "AWS (ECS, S3, RDS, Lambda)", level: 85, highlight: true },
        { name: "Kubernetes (K8s)", level: 78 },
        { name: "CI/CD (GitHub Actions)", level: 88, highlight: true },
        { name: "Linux & Nginx", level: 85 },
        { name: "Vercel Platform", level: 95 },
      ],
    },
    {
      title: "Engineering Leadership & Best Practices",
      description: "ระเบียบวิธีวิศวกรรมซอฟต์แวร์และการนำทีม",
      skills: [
        { name: "Clean Architecture & DDD", level: 92, highlight: true },
        { name: "System Design & Scalability", level: 95, highlight: true },
        { name: "Code Review & Mentoring", level: 95, highlight: true },
        { name: "Agile / Scrum Leadership", level: 90 },
        { name: "Test-Driven Development (TDD)", level: 85 },
        { name: "Security Best Practices", level: 90 },
      ],
    },
  ] as SkillCategory[],

  education: [
    {
      degree: "วิทยาศาสตรมหาบัณฑิต (วท.ม.) สาขาวิทยาการคอมพิวเตอร์",
      degreeEn: "Master of Science (M.Sc.) in Computer Science",
      institution: "มหาวิทยาลัยเชียงใหม่",
      institutionEn: "Chiang Mai University (CMU)",
      year: "สำเร็จการศึกษา พ.ศ. 2554",
      yearEn: "Graduated in 2011",
      field: "Advanced Algorithms, Distributed Systems & Database Systems",
    },
    {
      degree: "วิทยาศาสตรบัณฑิต (วท.บ.) สาขาวิทยาการคอมพิวเตอร์",
      degreeEn: "Bachelor of Science (B.Sc.) in Computer Science",
      institution: "มหาวิทยาลัยเชียงใหม่",
      institutionEn: "Chiang Mai University (CMU)",
      year: "สำเร็จการศึกษา พ.ศ. 2552",
      yearEn: "Graduated in 2009",
      field: "Software Engineering, Computer Networks & Object-Oriented Programming",
    },
  ] as Education[],

  initialTestimonials: [
    {
      id: "test-1",
      name: "Somchai D.",
      role: "Former Engineering Manager @ FinTech Corp",
      date: "Aug 2026",
      message:
        "คุณเชาวน์เป็น Technical Lead ที่มีความเป็นมืออาชีพสูงมาก สามารถพาคณะวิศวกร Migrate ระบบสู่ Microservices ได้อย่างราบรื่นไร้รอยต่อ และยังเป็นพี่เลี้ยงที่ยอดเยี่ยมให้กับทีม",
      visibility: "public",
      status: "approved",
      pinned: true,
    },
    {
      id: "test-2",
      name: "Jane S.",
      role: "Senior Talent Partner @ Global Tech",
      date: "Jul 2026",
      message:
        "Great working with Chaow on multiple high-impact projects! Highly recommended for any senior engineering leadership and high-scale architecture roles.",
      visibility: "public",
      status: "approved",
      pinned: false,
    },
    {
      id: "test-3",
      name: "Kittisak P.",
      role: "Colleague @ CMU CS Alumni",
      date: "Jun 2026",
      message:
        "พี่เชาวน์มีความรู้ด้าน Database และ System Design แน่นมาก ทำงานร่วมด้วยแล้วสบายใจ โค้ดสะอาด เข้าใจง่าย และคอยช่วยเหลือผู้อื่นเสมอครับ",
      visibility: "public",
      status: "approved",
      pinned: false,
    },
  ] as Testimonial[],
};
