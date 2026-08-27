"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Send,
  Pin,
  Lock,
  Globe,
  Sparkles,
  ShieldCheck,
  MessageSquare,
  Clock,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { toast } from "sonner";
import { submitGuestbookMessage, getApprovedTestimonials } from "@/lib/guestbook-actions";
import { Testimonial } from "@/data/portfolio-data";

export function GuestbookSection() {
  const [testimonials, setTestimonials] = React.useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [visibility, setVisibility] = React.useState<"public" | "private">("public");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const fetchTestimonials = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getApprovedTestimonials();
      setTestimonials(data || []);
    } catch (err) {
      console.error("Failed to load testimonials:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      toast.error("กรุณากรอกชื่อและข้อความ");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await submitGuestbookMessage({
        name,
        role: role || undefined,
        email: email || undefined,
        message,
        visibility,
      });

      if (res.success) {
        toast.success(res.message, {
          duration: 5000,
        });

        // Reset form
        setName("");
        setRole("");
        setEmail("");
        setMessage("");

        // Refresh list
        await fetchTestimonials();
      } else {
        toast.error(res.error || "เกิดข้อผิดพลาดในการส่งข้อความ");
      }
    } catch (err) {
      toast.error("ไม่สามารถส่งข้อความได้ กรุณาลองใหม่อีกครั้ง");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="guestbook" className="py-16 md:py-24 scroll-mt-16 bg-muted/25 border-y border-border/40">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            <HeartHandshake className="h-3.5 w-3.5" />
            <span>Section 05 // Community & Guestbook</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-thai text-foreground">
            Guestbook & Recommendations
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-thai max-w-3xl">
            สมุดเยี่ยมชม คำนิยมจากเพื่อนร่วมงาน และช่องทางส่งข้อความส่วนตัวถึงคุณเชาวน์ (ข้อมูลเชื่อมต่อฐานข้อมูล Supabase PostgreSQL แบบ Real-time)
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-5">
            <Card className="border-border/70 shadow-lg bg-card sticky top-24">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-bold font-thai flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  ฝากข้อความ / คำนิยม (Leave a Message)
                </CardTitle>
                <CardDescription className="text-xs font-thai">
                  คุณสามารถเลือกแสดงบนหน้าเว็บ (Public) หรือส่งแบบลับเฉพาะคุณเชาวน์ (Private)
                </CardDescription>
              </CardHeader>

              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  {/* Sender Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground font-thai">
                      ชื่อ-นามสกุล / ชื่อเล่น <span className="text-destructive">*</span>
                    </label>
                    <Input
                      placeholder="e.g. สมชาย หรือ John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      maxLength={60}
                      required
                    />
                  </div>

                  {/* Role / Relationship */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground font-thai">
                      ความสัมพันธ์ / ตำแหน่งงาน (ระบุหรือไม่ก็ได้)
                    </label>
                    <Input
                      placeholder="e.g. อดีตเพื่อนร่วมงาน @ Company X หรือ Recruiter"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      maxLength={80}
                    />
                  </div>

                  {/* Email (Private) */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold text-foreground font-thai">
                        อีเมลสำหรับติดต่อกลับ
                      </label>
                      <span className="text-[10px] text-muted-foreground flex items-center gap-1 font-thai">
                        <Lock className="h-2.5 w-2.5" /> ซ่อนเป็นความลับ
                      </span>
                    </div>
                    <Input
                      type="email"
                      placeholder="email@example.com (ไม่แสดงต่อสาธารณะ)"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-semibold text-foreground font-thai">
                        ข้อความ / คำนิยม <span className="text-destructive">*</span>
                      </label>
                      <span className="text-[10px] font-mono text-muted-foreground">
                        {message.length}/500
                      </span>
                    </div>
                    <Textarea
                      placeholder="เขียนข้อความทักทาย ความประทับใจ หรือคำแนะนำ..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      maxLength={500}
                      rows={4}
                      required
                    />
                  </div>

                  {/* Visibility Option Radio */}
                  <div className="space-y-2 pt-1">
                    <label className="text-xs font-semibold text-foreground font-thai">
                      ระดับความเป็นส่วนตัว (Visibility)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setVisibility("public")}
                        className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs font-medium transition-all ${
                          visibility === "public"
                            ? "border-primary bg-primary/10 text-primary font-semibold"
                            : "border-border text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        <Globe className="h-4 w-4 shrink-0" />
                        <div className="text-left">
                          <div className="font-thai">🌐 Public</div>
                          <div className="text-[10px] opacity-75 font-thai">แสดงบน Wall</div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setVisibility("private")}
                        className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs font-medium transition-all ${
                          visibility === "private"
                            ? "border-primary bg-primary/10 text-primary font-semibold"
                            : "border-border text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        <Lock className="h-4 w-4 shrink-0" />
                        <div className="text-left">
                          <div className="font-thai">🔒 Private</div>
                          <div className="text-[10px] opacity-75 font-thai">เห็นเฉพาะคุณเชาวน์</div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Anti-spam Badge */}
                  <div className="flex items-center justify-between rounded-lg bg-muted/40 p-2.5 border border-border/50 text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-emerald-500" />
                      <span>Protected by Anti-Spam Security</span>
                    </div>
                    <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      VERIFIED
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="pt-2">
                  <Button
                    type="submit"
                    className="w-full gap-2 text-xs"
                    disabled={isSubmitting || !name.trim() || !message.trim()}
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>{isSubmitting ? "กำลังบันทึกข้อมูล..." : "ส่งข้อความ (Send Message)"}</span>
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>

          {/* Right Column: Wall of Love */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-foreground font-thai flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-500" />
                Wall of Love ({testimonials.length})
              </h3>
              <span className="text-xs text-muted-foreground font-thai">
                ดึงข้อมูลจริงจาก Supabase Database
              </span>
            </div>

            {isLoading ? (
              <div className="flex flex-col items-center justify-center p-12 rounded-xl border border-dashed text-muted-foreground space-y-2">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
                <span className="text-xs font-thai">กำลังดึงข้อมูลจากฐานข้อมูล Supabase...</span>
              </div>
            ) : testimonials.length === 0 ? (
              <Card className="p-8 text-center text-muted-foreground space-y-3 border-dashed">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground font-thai">
                    ยังไม่มีข้อความบน Wall of Love ในขณะนี้
                  </p>
                  <p className="text-xs font-thai">
                    ร่วมเป็นคนแรกที่เขียนคำนิยมหรือทักทายคุณเชาวน์ผ่านแบบฟอร์มด้านซ้ายได้เลยครับ!
                  </p>
                </div>
              </Card>
            ) : (
              <div className="space-y-4">
                {testimonials.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <Card
                      className={`border transition-all duration-300 ${
                        item.pinned
                          ? "border-amber-500/50 bg-gradient-to-br from-card to-amber-500/5 shadow-md"
                          : "border-border/60 bg-card hover:border-border hover:shadow-xs"
                      }`}
                    >
                      <CardHeader className="pb-2 space-y-1">
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm text-foreground font-thai">
                                {item.name}
                              </span>
                              {item.pinned && (
                                <Badge
                                  variant="outline"
                                  className="border-amber-500/40 text-amber-600 dark:text-amber-400 text-[10px] gap-1 py-0"
                                >
                                  <Pin className="h-2.5 w-2.5" />
                                  Pinned Recommendation
                                </Badge>
                              )}
                            </div>
                            {item.role && (
                              <div className="text-xs text-muted-foreground font-thai">
                                {item.role}
                              </div>
                            )}
                          </div>

                          <span className="text-[11px] font-mono text-muted-foreground shrink-0 flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {item.date}
                          </span>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <p className="text-xs sm:text-sm text-foreground/90 font-thai leading-relaxed italic">
                          "{item.message}"
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
