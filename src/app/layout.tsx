import type { Metadata, Viewport } from "next";
import { Inter, Prompt, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const prompt = Prompt({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-thai",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chaow.dev"),
  title: "Chaow Porkaew (เชาวน์ ปอแก้ว) — Senior Software Developer / Tech Lead",
  description:
    "Senior Software Developer & Technical Lead with 15+ years of experience in Modern Full-stack (Next.js, TypeScript, Node.js, Go), High-scale Distributed Systems, Cloud Architecture & Engineering Leadership.",
  keywords: [
    "Chaow Porkaew",
    "เชาวน์ ปอแก้ว",
    "Senior Software Developer",
    "Technical Lead",
    "Full Stack Developer",
    "Solutions Architect",
    "Next.js",
    "TypeScript",
    "Supabase",
    "Distributed Systems",
    "Chiang Mai University CS",
  ],
  authors: [{ name: "Chaow Porkaew", url: "https://chaow.dev" }],
  creator: "Chaow Porkaew",
  openGraph: {
    type: "profile",
    locale: "th_TH",
    alternateLocale: "en_US",
    url: "https://chaow.dev",
    title: "Chaow Porkaew — Senior Software Developer & Technical Lead",
    description:
      "15+ Years Experience in Modern Full-stack, Distributed Architecture, Cloud & Engineering Leadership.",
    siteName: "Chaow.dev Portfolio",
    images: [
      {
        url: "/assets/profile.png",
        width: 800,
        height: 800,
        alt: "Chaow Porkaew Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaow Porkaew — Senior Software Developer / Tech Lead",
    description:
      "Senior Software Developer with 15+ years of experience in high-scale web systems and cloud architecture.",
    images: ["/assets/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chaow Porkaew",
  alternateName: "เชาวน์ ปอแก้ว",
  jobTitle: "Senior Software Developer & Technical Lead",
  url: "https://chaow.dev",
  image: "https://chaow.dev/assets/profile.png",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Chiang Mai University",
  },
  knowsAbout: [
    "Software Architecture",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Go",
    "PostgreSQL",
    "Redis",
    "Distributed Systems",
    "Microservices",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      suppressHydrationWarning
      className={`${inter.variable} ${prompt.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased selection:bg-primary/20 selection:text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
