import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wovera | Exceptional SaaS Products & Tech Solutions",
  description: "We build exceptional, scalable SaaS products and innovative tech solutions that just work.",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col overflow-x-hidden">
          <Navbar />
          <div className="flex-1 w-full overflow-x-hidden">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}

