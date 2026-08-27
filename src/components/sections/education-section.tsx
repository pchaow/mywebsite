"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function EducationSection() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section className="py-12 bg-muted/20 border-t border-border/40">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight font-thai text-foreground">
            ประวัติการศึกษา (Education & Academic Degrees)
          </h2>
        </div>

        {/* Education 2-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card className="h-full border-border/60 bg-card hover:border-primary/40 transition-all duration-300">
                <CardHeader className="pb-3 flex flex-row items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="secondary" className="text-[10px] font-mono">
                        {edu.yearEn}
                      </Badge>
                      <span className="text-xs font-mono text-muted-foreground">
                        {edu.year}
                      </span>
                    </div>
                    <CardTitle className="text-base font-bold text-foreground font-thai leading-snug">
                      {edu.degree}
                    </CardTitle>
                    <div className="text-xs font-mono text-primary font-medium">
                      {edu.degreeEn}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-2 text-xs text-muted-foreground font-thai">
                  <div className="font-semibold text-foreground flex items-center gap-1.5">
                    <span>{edu.institution}</span>
                    <span className="text-muted-foreground font-normal">({edu.institutionEn})</span>
                  </div>
                  <p className="font-mono text-[11px] text-muted-foreground/90 bg-muted/50 p-2.5 rounded-lg border border-border/40">
                    📚 Focus: {edu.field}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
