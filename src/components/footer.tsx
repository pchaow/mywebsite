"use client";

import * as React from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Terminal,
  Shield,
  Heart,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const [showBackToTop, setShowBackToTop] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-border/60 bg-card/50 backdrop-blur-xs py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Summary */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary border border-primary/20">
                <Terminal className="h-3.5 w-3.5" />
              </div>
              <span className="font-mono font-bold text-base">
                Chaow<span className="text-primary">.dev</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground max-w-md font-thai">
              Senior Software Developer / Technical Lead — มุ่งเน้นการสร้างสรรค์สถาปัตยกรรมซอฟต์แวร์ที่แข็งแกร่ง รองรับการขยายตัว และมีประสิทธิภาพสูง
            </p>
          </div>

          {/* Social Profiles & Contacts */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-lg border-border hover:border-primary hover:text-primary transition-colors"
              asChild
              aria-label="GitHub Profile"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-lg border-border hover:border-primary hover:text-primary transition-colors"
              asChild
              aria-label="LinkedIn Profile"
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-lg border-border hover:border-primary hover:text-primary transition-colors"
              asChild
              aria-label="Send Email"
            >
              <a href="mailto:chaow.porkaew@example.com">
                <Mail className="h-4 w-4" />
              </a>
            </Button>

            {/* Back to Top */}
            {showBackToTop && (
              <Button
                variant="secondary"
                size="icon"
                onClick={scrollToTop}
                className="h-9 w-9 rounded-lg shadow-sm transition-all animate-in fade-in"
                aria-label="Scroll back to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="flex items-center gap-1.5 font-thai">
            © 2026 Chaow Porkaew. Built with Next.js 15, Tailwind CSS & Supabase.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[11px]">
              <Code2 className="h-3 w-3 text-primary" /> Clean Architecture & 100% Type-Safe
            </span>
            {/* Discrete Admin Link */}
            <Link
              href="/admin"
              className="inline-flex items-center gap-1 text-[11px] text-muted-foreground/60 hover:text-foreground transition-colors"
              title="Admin Moderation Portal"
            >
              <Shield className="h-3 w-3" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
