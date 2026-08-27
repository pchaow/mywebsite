"use client";

import * as React from "react";
import Link from "next/link";
import {
  Shield,
  KeyRound,
  ArrowLeft,
  Lock,
  LogOut,
  CheckCircle2,
  Pin,
  Trash2,
  Globe,
  Mail,
  Clock,
  Sparkles,
  Inbox,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import {
  getAdminMessages,
  moderateMessageAction,
} from "@/lib/guestbook-actions";
import { GuestbookMessageRecord } from "@/lib/supabase";

export default function AdminPage() {
  const [passcode, setPasscode] = React.useState("");
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [messages, setMessages] = React.useState<GuestbookMessageRecord[]>([]);
  const [actionLoading, setActionLoading] = React.useState<string | null>(null);

  const fetchMessages = async (code: string) => {
    setLoading(true);
    try {
      const res = await getAdminMessages(code);
      if (res.success && res.messages) {
        setMessages(res.messages);
        setIsAuthenticated(true);
        sessionStorage.setItem("admin_passcode", code);
      } else {
        toast.error(res.error || "รหัสผ่านไม่ถูกต้อง");
      }
    } catch (err) {
      toast.error("ไม่สามารถเชื่อมต่อระบบแอดมินได้");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const savedCode = sessionStorage.getItem("admin_passcode");
    if (savedCode) {
      setPasscode(savedCode);
      fetchMessages(savedCode);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchMessages(passcode);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPasscode("");
    sessionStorage.removeItem("admin_passcode");
    toast.info("ออกจากระบบแอดมินแล้ว");
  };

  const handleAction = async (
    id: string,
    action: "approve" | "make_private" | "pin" | "unpin" | "reject" | "delete"
  ) => {
    setActionLoading(id);
    try {
      const res = await moderateMessageAction(id, action, passcode);
      if (res.success) {
        toast.success(`ดำเนินการ ${action} สำเร็จ`);
        await fetchMessages(passcode);
      } else {
        toast.error(res.error || "เกิดข้อผิดพลาด");
      }
    } catch (err) {
      toast.error("เกิดข้อผิดพลาดในการดำเนินการ");
    } finally {
      setActionLoading(null);
    }
  };

  // Filter lists
  const pendingMessages = messages.filter(
    (m) => m.status === "pending" && m.visibility === "public"
  );
  const approvedMessages = messages.filter(
    (m) => m.status === "approved" && m.visibility === "public"
  );
  const privateMessages = messages.filter((m) => m.visibility === "private");
  const rejectedMessages = messages.filter((m) => m.status === "rejected");

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-muted/30">
        <div className="w-full max-w-md space-y-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>กลับสู่หน้าพอร์ตโฟลิโอ (Back to Portfolio)</span>
          </Link>

          <Card className="border-border/60 shadow-xl backdrop-blur-sm">
            <CardHeader className="text-center space-y-2 pb-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Shield className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold font-thai">
                Admin Moderation Portal
              </CardTitle>
              <CardDescription className="text-xs font-thai">
                ระบบจัดการและตรวจสอบข้อความสมุดเยี่ยมชม (Owner Only)
              </CardDescription>
            </CardHeader>

            <form onSubmit={handleLogin}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="passcode"
                      className="text-xs font-medium text-foreground font-thai"
                    >
                      รหัสผ่านผู้ดูแล (Admin Passcode)
                    </label>
                    <span className="text-[10px] text-muted-foreground font-mono">
                      (Default: admin1234)
                    </span>
                  </div>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="passcode"
                      type="password"
                      placeholder="ป้อนรหัสผ่าน..."
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      className="pl-9 text-sm"
                      required
                    />
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col space-y-3 pt-2">
                <Button
                  type="submit"
                  className="w-full gap-2 text-xs"
                  disabled={loading || !passcode}
                >
                  <Lock className="h-3.5 w-3.5" />
                  <span>{loading ? "กำลังตรวจสอบ..." : "เข้าสู่ระบบ (Unlock)"}</span>
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl space-y-8">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex h-9 w-9 items-center justify-center rounded-lg border hover:bg-muted transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold font-thai flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Chaow.dev Admin Moderation Panel
              </h1>
              <p className="text-xs text-muted-foreground font-thai">
                ระบบจัดการและควบคุมข้อความ Guestbook / Wall of Love แบบเรียลไทม์
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => fetchMessages(passcode)}
              className="gap-1.5 text-xs"
              disabled={loading}
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </Button>

            <Button
              variant="destructive"
              size="sm"
              onClick={handleLogout}
              className="gap-1.5 text-xs"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Log out</span>
            </Button>
          </div>
        </div>

        {/* Tab Controls */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid grid-cols-4 max-w-2xl h-10">
            <TabsTrigger value="pending" className="text-xs gap-1.5">
              <Inbox className="h-3.5 w-3.5" />
              <span>Pending ({pendingMessages.length})</span>
            </TabsTrigger>
            <TabsTrigger value="approved" className="text-xs gap-1.5">
              <Globe className="h-3.5 w-3.5" />
              <span>Wall of Love ({approvedMessages.length})</span>
            </TabsTrigger>
            <TabsTrigger value="private" className="text-xs gap-1.5">
              <Lock className="h-3.5 w-3.5" />
              <span>Private ({privateMessages.length})</span>
            </TabsTrigger>
            <TabsTrigger value="rejected" className="text-xs gap-1.5">
              <Trash2 className="h-3.5 w-3.5" />
              <span>Spam ({rejectedMessages.length})</span>
            </TabsTrigger>
          </TabsList>

          {/* Tab 1: Pending */}
          <TabsContent value="pending" className="space-y-4">
            {pendingMessages.length === 0 ? (
              <Card className="p-8 text-center text-muted-foreground text-xs font-thai">
                ไม่มีข้อความใหม่ที่รอการตรวจสอบ 🎉
              </Card>
            ) : (
              pendingMessages.map((msg) => (
                <Card key={msg.id} className="border-border/80 shadow-xs">
                  <CardHeader className="pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm font-thai text-foreground">
                          {msg.name}
                        </span>
                        <Badge variant="outline" className="text-[10px] text-amber-500">
                          Pending Review
                        </Badge>
                      </div>
                      {msg.role && (
                        <div className="text-xs text-muted-foreground font-thai">
                          {msg.role}
                        </div>
                      )}
                      {msg.email && (
                        <div className="text-xs font-mono text-primary flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {msg.email}
                        </div>
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      {new Date(msg.created_at).toLocaleString("th-TH")}
                    </span>
                  </CardHeader>

                  <CardContent>
                    <p className="text-xs sm:text-sm text-foreground/90 font-thai bg-muted/40 p-3 rounded-lg border">
                      "{msg.message}"
                    </p>
                  </CardContent>

                  <CardFooter className="pt-2 border-t flex flex-wrap items-center justify-end gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs text-muted-foreground"
                      onClick={() => handleAction(msg.id, "make_private")}
                      disabled={actionLoading === msg.id}
                    >
                      <Lock className="h-3.5 w-3.5 mr-1" />
                      Make Private
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="text-xs"
                      onClick={() => handleAction(msg.id, "reject")}
                      disabled={actionLoading === msg.id}
                    >
                      Reject / Spam
                    </Button>
                    <Button
                      size="sm"
                      className="text-xs bg-emerald-600 hover:bg-emerald-700 text-white"
                      onClick={() => handleAction(msg.id, "approve")}
                      disabled={actionLoading === msg.id}
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                      Approve & Publish
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Tab 2: Approved / Wall of Love */}
          <TabsContent value="approved" className="space-y-4">
            {approvedMessages.length === 0 ? (
              <Card className="p-8 text-center text-muted-foreground text-xs font-thai">
                ยังไม่มีข้อความบน Wall of Love
              </Card>
            ) : (
              approvedMessages.map((msg) => (
                <Card key={msg.id} className="border-border/80 shadow-xs">
                  <CardHeader className="pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm font-thai text-foreground">
                          {msg.name}
                        </span>
                        {msg.pinned && (
                          <Badge variant="default" className="text-[10px] gap-1 py-0">
                            <Pin className="h-2.5 w-2.5" /> Pinned
                          </Badge>
                        )}
                        <Badge variant="success" className="text-[10px]">
                          Live on Wall
                        </Badge>
                      </div>
                      {msg.role && (
                        <div className="text-xs text-muted-foreground font-thai">
                          {msg.role}
                        </div>
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      {new Date(msg.created_at).toLocaleDateString("th-TH")}
                    </span>
                  </CardHeader>

                  <CardContent>
                    <p className="text-xs sm:text-sm text-foreground/90 font-thai bg-muted/40 p-3 rounded-lg border">
                      "{msg.message}"
                    </p>
                  </CardContent>

                  <CardFooter className="pt-2 border-t flex flex-wrap items-center justify-end gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs"
                      onClick={() =>
                        handleAction(msg.id, msg.pinned ? "unpin" : "pin")
                      }
                      disabled={actionLoading === msg.id}
                    >
                      <Pin className="h-3.5 w-3.5 mr-1" />
                      {msg.pinned ? "Unpin" : "Pin to Top"}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs"
                      onClick={() => handleAction(msg.id, "make_private")}
                      disabled={actionLoading === msg.id}
                    >
                      <Lock className="h-3.5 w-3.5 mr-1" />
                      Hide (Make Private)
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="text-xs"
                      onClick={() => handleAction(msg.id, "delete")}
                      disabled={actionLoading === msg.id}
                    >
                      Delete
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Tab 3: Private Messages */}
          <TabsContent value="private" className="space-y-4">
            {privateMessages.length === 0 ? (
              <Card className="p-8 text-center text-muted-foreground text-xs font-thai">
                ไม่มีข้อความส่วนตัว
              </Card>
            ) : (
              privateMessages.map((msg) => (
                <Card key={msg.id} className="border-border/80 shadow-xs bg-card">
                  <CardHeader className="pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm font-thai text-foreground">
                          {msg.name}
                        </span>
                        <Badge variant="secondary" className="text-[10px] gap-1">
                          <Lock className="h-2.5 w-2.5" /> Owner Only
                        </Badge>
                      </div>
                      {msg.role && (
                        <div className="text-xs text-muted-foreground font-thai">
                          {msg.role}
                        </div>
                      )}
                      {msg.email && (
                        <div className="text-xs font-mono text-primary flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          <a href={`mailto:${msg.email}`} className="underline">
                            {msg.email}
                          </a>
                        </div>
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      {new Date(msg.created_at).toLocaleString("th-TH")}
                    </span>
                  </CardHeader>

                  <CardContent>
                    <p className="text-xs sm:text-sm text-foreground/90 font-thai bg-muted/40 p-3 rounded-lg border">
                      "{msg.message}"
                    </p>
                  </CardContent>

                  <CardFooter className="pt-2 border-t flex flex-wrap items-center justify-end gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs"
                      onClick={() => handleAction(msg.id, "approve")}
                      disabled={actionLoading === msg.id}
                    >
                      <Globe className="h-3.5 w-3.5 mr-1" />
                      Convert to Public & Publish
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="text-xs"
                      onClick={() => handleAction(msg.id, "delete")}
                      disabled={actionLoading === msg.id}
                    >
                      Delete
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </TabsContent>

          {/* Tab 4: Spam / Rejected */}
          <TabsContent value="rejected" className="space-y-4">
            {rejectedMessages.length === 0 ? (
              <Card className="p-8 text-center text-muted-foreground text-xs font-thai">
                ไม่มีข้อความในกล่องขยะ/สแปม
              </Card>
            ) : (
              rejectedMessages.map((msg) => (
                <Card key={msg.id} className="border-border/80 opacity-75">
                  <CardHeader className="pb-3 flex justify-between">
                    <div className="font-bold text-sm font-thai">{msg.name}</div>
                    <Badge variant="destructive" className="text-[10px]">
                      Rejected
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground font-thai">
                      "{msg.message}"
                    </p>
                  </CardContent>
                  <CardFooter className="pt-2 border-t flex justify-end gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs"
                      onClick={() => handleAction(msg.id, "approve")}
                    >
                      Restore to Public
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="text-xs"
                      onClick={() => handleAction(msg.id, "delete")}
                    >
                      Permanently Delete
                    </Button>
                  </CardFooter>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
