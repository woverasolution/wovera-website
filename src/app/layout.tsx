import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import type React from "react";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] })
const eczar = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wovera | Exceptional SaaS Products & Tech Solutions",
  description:
    "We build exceptional, scalable SaaS products and innovative tech solutions that just work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={eczar.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
