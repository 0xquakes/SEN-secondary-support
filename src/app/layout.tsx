import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Disclaimer } from "@/components/layout/Disclaimer";
import { ChatButton } from "@/components/ai/ChatButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Includable | SEND Strategies for Secondary Teachers",
  description: "What to actually do when documentation says 'benefits from visual supports' or 'needs tasks breaking into steps'. Evidence-based strategies with exact scripts, worked examples, and 5-minute prep plans for KS3/KS4 teachers supporting pupils working significantly below age-related expectations.",
  keywords: ["SEND strategies", "SEND teaching", "KS3 SEND", "KS4 SEND", "differentiation strategies", "visual supports", "task analysis", "chunking instructions", "secondary SEND", "teaching assistants", "SENCO resources"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} font-sans antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col`}>
        {/* Skip link for keyboard navigation */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Header />
        <Disclaimer />

        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>

        <Footer />
        <ChatButton />
      </body>
    </html>
  );
}
