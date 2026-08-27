"use client";

import { motion } from "framer-motion";
import {
  User,
  Layers,
  Zap,
  Users,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

const ICON_MAP: Record<string, any> = {
  Layers,
  Zap,
  Users,
  ShieldCheck,
};

export function AboutSection() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-16 md:py-24 scroll-mt-16 bg-muted/25 border-y border-border/40">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            <User className="h-3.5 w-3.5" />
            <span>Section 01 // Overview</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-thai text-foreground">
            About Me & Core Values
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-thai max-w-3xl">
            ประวัติการทำงาน ปรัชญาการออกแบบระบบ และคุณค่าหลักในการทำงานวิศวกรรมซอฟต์แวร์ระดับ Senior & Lead
          </p>
        </div>

        {/* Narrative Bio */}
        <Card className="border-border/60 shadow-xs bg-card/80 backdrop-blur-xs overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-primary via-indigo-500 to-cyan-400" />
          <CardContent className="p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-foreground font-thai flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              วิสัยทัศน์และแนวคิดการทำงาน (Engineering Philosophy)
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground font-thai leading-relaxed">
              ผมเริ่มต้นก้าวแรกในสายงานพัฒนาซอฟต์แวร์ตั้งแต่ปี พ.ศ. 2554 (ค.ศ. 2011) หลังจบการศึกษาระดับปริญญาโทสาขาวิทยาการคอมพิวเตอร์ จากมหาวิทยาลัยเชียงใหม่ ตลอดระยะเวลาการทำงานกว่า 15 ปี ได้ผ่านประสบการณ์ในระบบที่มีความหลากหลาย ตั้งแต่ Enterprise CRM/ERP, Digital Solutions, FinTech Payment Systems ไปจนถึง High-Scale Distributed Microservices
            </p>
            <p className="text-sm sm:text-base text-muted-foreground font-thai leading-relaxed">
              หัวใจสำคัญที่ผมยึดถือเสมอมาคือ <strong className="text-foreground">"Good Software Architecture is an Investment, Not an Expense"</strong> โค้ดที่ดีต้องไม่เพียงแต่ทำงานได้ แต่ต้องอ่านง่าย ดูแลรักษาได้จริง (Maintainability) มีแบบแผนที่ชัดเจน (Clean Architecture) และพร้อมขยายขีดความสามารถรองรับการเติบโตทางธุรกิจได้อย่างยั่งยืน
            </p>
          </CardContent>
        </Card>

        {/* Core Values 4-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {profile.coreValues.map((val, idx) => {
            const Icon = ICON_MAP[val.icon] || Layers;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="h-full border-border/60 hover:border-primary/40 transition-all duration-300 bg-card hover:shadow-md group">
                  <CardHeader className="pb-3 flex flex-row items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-base font-bold text-foreground font-thai">
                        {val.titleTh}
                      </CardTitle>
                      <div className="text-xs font-mono text-primary font-medium">
                        {val.title}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs sm:text-sm text-muted-foreground font-thai leading-relaxed">
                      {val.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
