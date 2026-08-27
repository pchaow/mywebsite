"use client";

import * as React from "react";
import Link from "next/link";
import { Terminal, FileDown, Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Guestbook", href: "#guestbook" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = React.useState<string>("");
  const [scrolled, setScrolled] = React.useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section scroll spy
      const sections = NAV_LINKS.map((link) =>
        document.querySelector(link.href)
      ).filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${section.id}`);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", href);
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md shadow-xs"
          : "bg-background/50 backdrop-blur-xs"
      )}
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight transition-colors hover:text-primary"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
            <Terminal className="h-4 w-4" />
          </div>
          <span className="font-bold text-base text-foreground">
            Chaow<span className="text-primary">.dev</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-normal text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for Lead Roles
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={cn(
                  "relative px-3.5 py-1.5 rounded-md transition-colors",
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-primary rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions & Theme Toggle */}
        <div className="hidden md:flex items-center gap-2.5">
          <ThemeToggle />

          <Button
            size="sm"
            variant="outline"
            className="gap-1.5 font-medium text-xs h-9 border-border/80 hover:border-primary/50"
            onClick={(e) => {
              const target = document.querySelector("#contact");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Contact</span>
          </Button>

          <Button
            size="sm"
            className="gap-1.5 font-medium text-xs h-9 shadow-sm"
            asChild
          >
            <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")}>
              <FileDown className="h-3.5 w-3.5" />
              <span>Download CV</span>
            </a>
          </Button>
        </div>

        {/* Mobile Hamburger & Controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                aria-label="Open Navigation Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] p-6">
              <div className="flex flex-col h-full justify-between pt-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-4 border-b">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                      <Terminal className="h-4 w-4" />
                    </div>
                    <span className="font-mono font-bold text-base">
                      Chaow<span className="text-primary">.dev</span>
                    </span>
                  </div>

                  <div className="flex flex-col space-y-2">
                    {NAV_LINKS.map((link) => {
                      const isActive = activeSection === link.href;
                      return (
                        <a
                          key={link.name}
                          href={link.href}
                          onClick={(e) => handleScrollTo(e, link.href)}
                          className={cn(
                            "flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors",
                            isActive
                              ? "bg-primary/10 text-primary font-semibold"
                              : "text-muted-foreground hover:bg-accent hover:text-foreground"
                          )}
                        >
                          <span>{link.name}</span>
                          {isActive && (
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t">
                  <Button
                    className="w-full gap-2 text-xs"
                    size="sm"
                    asChild
                  >
                    <a
                      href="#contact"
                      onClick={(e) => handleScrollTo(e, "#contact")}
                    >
                      <FileDown className="h-4 w-4" />
                      <span>Download Full CV (PDF)</span>
                    </a>
                  </Button>
                  <p className="text-[11px] text-center text-muted-foreground">
                    Senior Software Developer / Tech Lead
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
