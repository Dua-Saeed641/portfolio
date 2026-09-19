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
import DataRevealLayer from "@/components/DataRevealLayer";
import { SidebarProvider } from "@/context/SidebarContext";

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
      <body className="antialiased min-h-screen bg-background text-foreground relative">
        <SidebarProvider>
          {/* Full-height flex row */}
          <div className="flex min-h-screen">
            {/* Sidebar — sticky on desktop, drawer on mobile */}
            <Sidebar />

            {/* Main column: navbar + page content */}
            <div className="flex-1 min-w-0 flex flex-col relative">
              <Navbar />

              {/* Content viewport area — bounds the cursor reveal layer */}
              <div className="flex-1 relative min-h-0 overflow-hidden">
                <DataRevealLayer />
                <main className="relative z-10 min-h-full flex flex-col">
                  {children}
                </main>
              </div>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
