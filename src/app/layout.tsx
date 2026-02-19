import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "@/lib/auth/authContext";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { NotificationToastProvider } from "@/components/notifications/NotificationToast";
import { VormexDock } from "@/components/ui/dock";
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

export const metadata: Metadata = {
  title: "Vormex - Professional Social Networking for Students",
  description: "Connect with students, share experiences, and grow your network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <AuthProvider>
            <NotificationToastProvider>
              <EngagementProvider>
                {children}
              </EngagementProvider>
              <VormexDock />
            </NotificationToastProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
