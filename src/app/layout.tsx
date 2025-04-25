import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { generateMetadata } from "@/lib/metadata";
import { Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";



import type React from "react";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] })
const eczar = Source_Sans_3({ subsets: ["latin"] });



export const metadata = generateMetadata();




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
        <SpeedInsights />
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
