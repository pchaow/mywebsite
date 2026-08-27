"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Building2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function ExperienceSection() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-16 md:py-24 scroll-mt-16">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Section 02 // Career Journey</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-thai text-foreground">
            Career Timeline & Experience
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-thai max-w-3xl">
            เส้นทางสายอาชีพและการสร้างผลงานกว่า 15 ปี (2011 – ปัจจุบัน) ตั้งแต่การเป็นนักพัฒนาจนถึงการนำทีมในฐานะ Technical Lead
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-border/80 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Bullet Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-background transition-colors ${
                  exp.highlight
                    ? "border-primary text-primary shadow-sm shadow-primary/30 ring-4 ring-primary/10"
                    : "border-muted-foreground/40 text-muted-foreground"
                }`}
              >
                <div
                  className={`h-2 w-2 rounded-full ${
                    exp.highlight ? "bg-primary animate-pulse" : "bg-muted-foreground/50"
                  }`}
                />
              </div>

              {/* Card Body */}
              <Card
                className={`border transition-all duration-300 ${
                  exp.highlight
                    ? "border-primary/40 bg-gradient-to-br from-card to-primary/5 shadow-md"
                    : "border-border/60 bg-card/70 hover:border-border hover:shadow-xs"
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <CardTitle className="text-lg sm:text-xl font-bold text-foreground font-thai">
                          {exp.role}
                        </CardTitle>
                        {exp.highlight && (
                          <Badge variant="default" className="text-[11px] gap-1 py-0">
                            <Sparkles className="h-3 w-3" />
                            Current Role
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-primary font-medium">
                        <Building2 className="h-3.5 w-3.5" />
                        <span>{exp.companyType}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground bg-muted/60 px-3 py-1 rounded-full shrink-0">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-xs sm:text-sm text-muted-foreground font-thai">
                    {exp.description}
                  </p>

                  {/* Achievements Checklist */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-foreground uppercase tracking-wider font-mono">
                      Key Highlights & Impact
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, achIdx) => (
                        <li
                          key={achIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 font-thai"
                        >
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center text-[11px] font-mono font-medium bg-muted/80 text-foreground/80 px-2.5 py-0.5 rounded-md border border-border/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
