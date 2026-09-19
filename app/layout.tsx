import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const boska = localFont({
  src: [
    {
      path: "./fonts/Boska-Variable.woff2",
      style: "normal",
    },
    {
      path: "./fonts/Boska-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-boska",
  display: "swap",
});

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Dua Saeed Portfolio",
  description: "Personal Portfolio of Dua Saeed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(satoshi.variable, boska.variable, spaceMono.variable)}>
      <body className="antialiased min-h-screen bg-background text-foreground flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 min-w-0 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}


