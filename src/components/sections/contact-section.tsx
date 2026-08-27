"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  FileDown,
  Calendar,
  Send,
  Sparkles,
  ExternalLink,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function ContactSection() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="contact" className="py-16 md:py-24 scroll-mt-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            <Mail className="h-3.5 w-3.5" />
            <span>Section 06 // Get in Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-thai text-foreground">
            Get in Touch & Download CV
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-thai max-w-3xl">
            พร้อมรับการติดต่อสำหรับข้อเสนองานระดับ Senior Software Developer, Technical Lead, Solutions Architect หรือแลกเปลี่ยนความคิดเห็นด้าน Software Engineering
          </p>
        </div>

        {/* Contact Grid Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Direct Contact & Availability */}
          <Card className="border-border/60 shadow-md bg-card/80 flex flex-col justify-between">
            <CardHeader className="space-y-2">
              <div className="flex items-center justify-between">
                <Badge variant="success" className="text-xs gap-1.5 py-0.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Actively Available
                </Badge>
              </div>
              <CardTitle className="text-xl font-bold font-thai text-foreground">
                ช่องทางการติดต่อโดยตรง (Direct Channels)
              </CardTitle>
              <CardDescription className="text-xs font-thai">
                ตอบกลับภายใน 24 ชั่วโมง สำหรับโอกาสงานหรือการปรึกษาทางเทคนิค
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 border border-border/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-0.5 overflow-hidden">
                  <div className="text-xs text-muted-foreground font-thai">อีเมล (Primary Email)</div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-semibold font-mono text-foreground hover:text-primary transition-colors truncate block"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 border border-border/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs text-muted-foreground font-thai">ทำเลที่ตั้ง / การทำงาน (Work Mode)</div>
                  <div className="text-sm font-semibold font-thai text-foreground">
                    {profile.location}
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="pt-2 border-t border-border/40 flex items-center gap-3">
              <Button className="w-full gap-2 text-xs" asChild>
                <a href={`mailto:${profile.email}`}>
                  <Send className="h-3.5 w-3.5" />
                  <span>Send Direct Email</span>
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Card 2: Print-Ready ATS CV */}
          <Card className="border-border/60 shadow-md bg-gradient-to-br from-card via-card to-primary/5 flex flex-col justify-between">
            <CardHeader className="space-y-2">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs gap-1 py-0.5">
                  <Sparkles className="h-3 w-3 text-primary" />
                  Print & ATS Optimized
                </Badge>
              </div>
              <CardTitle className="text-xl font-bold font-thai text-foreground">
                ดาวน์โหลดเรซูเม่ (Resume / CV)
              </CardTitle>
              <CardDescription className="text-xs font-thai">
                เอกสารสรุปประวัติการทำงานแบบย่อ ออกแบบมาสำหรับระบบ ATS และสั่งพิมพ์ PDF
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 text-xs text-muted-foreground font-thai">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-foreground/90">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>ATS-Friendly Clean Typography (Inter & Sarabun)</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/90">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>จัดรูปแบบ 1-2 หน้า A4 สำหรับสั่ง Print / Save to PDF</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/90">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>อัปเดตล่าสุด: สิงหาคม 2569 (Aug 2026)</span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="pt-2 border-t border-border/40 flex flex-col sm:flex-row items-center gap-3">
              <Button
                variant="default"
                className="w-full gap-2 text-xs shadow-sm"
                asChild
              >
                <a href="/resume" target="_blank" rel="noopener noreferrer">
                  <FileDown className="h-4 w-4" />
                  <span>Open Printable CV (PDF View)</span>
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
