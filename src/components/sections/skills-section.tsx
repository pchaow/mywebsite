"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cpu,
  Layers,
  Sparkles,
  Cloud,
  Terminal,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function SkillsSection() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-16 md:py-24 scroll-mt-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            <Code2 className="h-3.5 w-3.5" />
            <span>Section 04 // Core Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-thai text-foreground">
            Skills & Tech Stack Matrix
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-thai max-w-3xl">
            ความเชี่ยวชาญทางเทคนิค 6 หมวดหมู่ที่สั่งสมและพัฒนาอย่างต่อเนื่องกว่า 15 ปีในสายงาน Modern Full-stack & Distributed Systems
          </p>
        </div>

        {/* Skills Grid 6 Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Card className="h-full border-border/60 bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-md flex flex-col justify-between">
                <CardHeader className="pb-3 space-y-1.5">
                  <CardTitle className="text-base font-bold text-foreground font-thai flex items-center justify-between">
                    <span>{category.title}</span>
                  </CardTitle>
                  <CardDescription className="text-xs text-muted-foreground font-thai">
                    {category.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span
                          className={`font-medium ${
                            skill.highlight
                              ? "text-foreground font-semibold flex items-center gap-1"
                              : "text-muted-foreground"
                          }`}
                        >
                          {skill.name}
                          {skill.highlight && (
                            <Sparkles className="h-3 w-3 text-primary inline" />
                          )}
                        </span>
                        <span className="text-[11px] font-mono text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            skill.highlight
                              ? "bg-gradient-to-r from-primary to-cyan-400"
                              : "bg-muted-foreground/40"
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
