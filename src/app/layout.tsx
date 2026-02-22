import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "@/lib/auth/authContext";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { NotificationToastProvider } from "@/components/notifications/NotificationToast";
import { VormexDock } from "@/components/ui/dock";
import { AgentProvider } from "@/components/agent/AgentContext";
import EngagementProvider from "@/components/engagement/EngagementProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://vormex.vercel.app');

export const metadata: Metadata = {
  title: {
    default: "Vormex - Professional Social Networking for Students",
    template: "%s | Vormex",
  },
  description:
    "Connect with students, share experiences, and grow your network. Vormex is the professional social platform for students to build connections, discover opportunities, and showcase their skills.",
  keywords: ["Vormex", "student network", "professional networking", "students", "college", "career", "connections"],
  authors: [{ name: "Vormex" }],
  creator: "Vormex",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Vormex",
    title: "Vormex - Professional Social Networking for Students",
    description: "Connect with students, share experiences, and grow your network.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vormex - Professional Social Networking for Students",
    description: "Connect with students, share experiences, and grow your network.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(baseUrl),
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <QueryProvider>
            <AuthProvider>
              <NotificationToastProvider>
                <AgentProvider>
                  <EngagementProvider>
                    {children}
                  </EngagementProvider>
                  <VormexDock />
                </AgentProvider>
              </NotificationToastProvider>
            </AuthProvider>
            </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
