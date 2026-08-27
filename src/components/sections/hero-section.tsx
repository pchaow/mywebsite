"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FileDown,
  Mail,
  Layers,
  Sparkles,
  Award,
  Briefcase,
  TrendingUp,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function HeroSection() {
  const { profile } = PORTFOLIO_DATA;

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
      {/* Background Gradient Orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-40 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Profile Avatar Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative shrink-0"
          >
            <div className="relative h-44 w-44 sm:h-52 sm:w-52 md:h-60 md:w-60 overflow-hidden rounded-3xl border-2 border-primary/30 p-1.5 shadow-2xl backdrop-blur-sm bg-background/50 ring-8 ring-primary/5">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-muted">
                <Image
                  src="/assets/profile.png"
                  alt={profile.nameEn}
                  fill
                  sizes="(max-width: 768px) 208px, 240px"
                  priority
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-4 rounded-2xl border border-border/80 bg-card/90 px-3.5 py-2 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">15+ Years</div>
                  <div className="text-[10px] text-muted-foreground font-thai">
                    Senior Experience
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Profile Details Column */}
          <div className="space-y-6 text-center lg:text-left flex-1">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{profile.statusText}</span>
            </motion.div>

            {/* Names & Titles */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-thai text-foreground">
                {profile.nameTh}{" "}
                <span className="text-xl sm:text-2xl md:text-3xl font-mono text-muted-foreground font-normal block sm:inline sm:ml-2">
                  ({profile.nameEn})
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-primary font-thai">
                {profile.roleTh}
              </p>
            </motion.div>

            {/* Short Bio */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-muted-foreground max-w-2xl font-thai leading-relaxed mx-auto lg:mx-0"
            >
              {profile.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <Button size="lg" className="gap-2 shadow-md" asChild>
                <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")}>
                  <Mail className="h-4 w-4" />
                  <span>Contact Me</span>
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-border/80 hover:border-primary/50"
                asChild
              >
                <a href="/resume" target="_blank" rel="noopener noreferrer">
                  <FileDown className="h-4 w-4" />
                  <span>Download CV (ATS PDF)</span>
                </a>
              </Button>

              <Button
                size="lg"
                variant="ghost"
                className="gap-2"
                asChild
              >
                <a href="#projects" onClick={(e) => handleScrollTo(e, "#projects")}>
                  <span>View Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-border/60 bg-card/60 p-5 shadow-xs transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-md backdrop-blur-xs text-center sm:text-left"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-foreground font-mono group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-foreground/80 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-muted-foreground font-thai mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
