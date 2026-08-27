"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  ExternalLink,
  Github,
  CheckCircle2,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Sparkles,
  Search,
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio-data";

const CATEGORIES = ["All", "Architecture", "Full Stack", "Fintech & Cloud"] as const;

export function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = React.useState<string>("All");
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "All") return true;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="py-16 md:py-24 scroll-mt-16 bg-muted/25 border-y border-border/40">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              <Layers className="h-3.5 w-3.5" />
              <span>Section 03 // Architecture & Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-thai text-foreground">
              Featured Projects & System Architecture
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground font-thai max-w-2xl">
              ตัวอย่างระบบและผลงานสำคัญที่เน้นการแก้โจทย์สถาปัตยกรรมขนาดใหญ่ ความเสถียร และประสิทธิภาพสูง
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-1.5 p-1 bg-background rounded-xl border border-border/60 shadow-xs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <Card className="h-full flex flex-col justify-between border-border/60 bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
                  <CardHeader className="space-y-2 pb-3">
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="secondary" className="text-[11px] font-mono font-medium">
                        {project.category}
                      </Badge>
                      {project.featured && (
                        <Badge variant="success" className="text-[10px] gap-1">
                          <Sparkles className="h-3 w-3" />
                          Key Architecture
                        </Badge>
                      )}
                    </div>

                    <CardTitle className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors font-thai">
                      {project.title}
                    </CardTitle>

                    <CardDescription className="text-xs text-primary font-medium font-mono">
                      {project.subtitle}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground font-thai line-clamp-2">
                      {project.description}
                    </p>

                    {/* Metric Highlights */}
                    <div className="rounded-lg bg-muted/50 p-3 border border-border/40 space-y-1.5">
                      <div className="text-[11px] font-bold text-foreground font-mono uppercase tracking-wider flex items-center gap-1.5">
                        <TrendingUp className="h-3.5 w-3.5 text-primary" />
                        Impact & Performance Metrics
                      </div>
                      <ul className="space-y-1">
                        {project.metrics.map((m, mIdx) => (
                          <li
                            key={mIdx}
                            className="flex items-center gap-2 text-xs text-foreground/85 font-thai"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono bg-background text-muted-foreground px-2 py-0.5 rounded border border-border/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-2 border-t border-border/40 flex items-center justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs gap-1.5 border-border hover:border-primary/50"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Cpu className="h-3.5 w-3.5 text-primary" />
                      <span>Deep Dive Architecture</span>
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs text-muted-foreground hover:text-foreground"
                      onClick={() => setSelectedProject(project)}
                    >
                      <span>Details</span>
                      <ExternalLink className="h-3.5 w-3.5 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Deep Dive Architecture Modal */}
        <Dialog
          open={Boolean(selectedProject)}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <div className="space-y-6 pt-2">
                <DialogHeader className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="default" className="text-xs">
                      {selectedProject.category}
                    </Badge>
                  </div>
                  <DialogTitle className="text-xl sm:text-2xl font-bold font-thai text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm font-mono text-primary">
                    {selectedProject.subtitle}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 text-sm text-foreground/90 font-thai leading-relaxed">
                  <p>{selectedProject.description}</p>

                  <div className="rounded-xl border bg-muted/40 p-4 space-y-3">
                    <h4 className="font-bold text-xs uppercase tracking-wider font-mono text-foreground flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-primary" />
                      Architectural Building Blocks
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.architectureDetails.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border bg-muted/40 p-4 space-y-3">
                    <h4 className="font-bold text-xs uppercase tracking-wider font-mono text-foreground flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-emerald-500" />
                      Key Results & Verified Metrics
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.metrics.map((metric, mIdx) => (
                        <li key={mIdx} className="flex items-start gap-2.5 text-xs text-foreground/80">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono font-semibold text-foreground uppercase tracking-wider">
                      Technologies & Tools
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.techStack.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="font-mono text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
