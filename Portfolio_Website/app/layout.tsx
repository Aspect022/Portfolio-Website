import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Mona_Sans as FontSans, Press_Start_2P as PixelFont } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { Toaster } from "@/components/ui/toaster"
import { RobotAssistantWrapper } from "@/components/ui/robot-assistant-wrapper"
import { PageTransition } from "@/components/ui/page-transition"
import { Suspense } from "react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
const pixelFont = PixelFont({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
})

export const metadata: Metadata = {
  title: "Jayesh RL | Full-Stack Developer & AI Engineer",
  description:
    "Passionate Full-Stack Developer and AI Engineer building intelligent, impactful software solutions. Experienced in React, Next.js, Python, FastAPI, and Machine Learning.",
  keywords: [
    "Full-Stack Developer",
    "AI Engineer",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "Machine Learning",
    "Web Development",
    "Software Engineer",
  ],
  authors: [{ name: "Jayesh RL", url: "https://jayeshrl.dev" }],
  creator: "Jayesh RL",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jayeshrl.dev",
    title: "Jayesh RL | Full-Stack Developer & AI Engineer",
    description: "Passionate Full-Stack Developer and AI Engineer building intelligent, impactful software solutions.",
    siteName: "Jayesh RL Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jayesh RL - Full-Stack Developer & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayesh RL | Full-Stack Developer & AI Engineer",
    description: "Passionate Full-Stack Developer and AI Engineer building intelligent, impactful software solutions.",
    images: ["/og-image.jpg"],
    creator: "@Jayesh25279350",
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
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
<html lang="en" suppressHydrationWarning className={`${fontSans.variable} ${pixelFont.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <PageTransition>
              {children}
              <RobotAssistantWrapper />
              <Analytics />
              <Toaster />
            </PageTransition>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
