import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import type React from "react";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] })
const eczar = Source_Sans_3({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Wovera Solutions PLC",
  description: "Building technology solutions that matter",
  icons: {
    icon: "/svg/wovera-icon.svg",
  },
};




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          eczar.className
        )}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
