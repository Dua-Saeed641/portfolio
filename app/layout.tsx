import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

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
    <html lang="en" className={cn(satoshi.variable, boska.variable)}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

