"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Coins, Dumbbell, GraduationCap } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

const Products = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal")

    const reveal = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", reveal)
    reveal()

    return () => {
      window.removeEventListener("scroll", reveal)
    }
  }, [])

  return (
    <section id="products" className="w-full py-20 relative overflow-hidden bg-[#f8f9fa]">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-40 bg-grid-pattern mix-blend-soft-light pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      
      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 reveal fade-bottom">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Our Products
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Wovera Suite</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Our growing collection of proven, scalable SaaS products designed to solve real-world problems.
            </p>
          </div>
        </div>
        
        <div className="mx-auto max-w-6xl py-12 grid grid-cols-1 gap-8 md:grid-cols-12 relative">
          {/* Product 1: Abal */}
          <div className="md:col-span-12 reveal fade-left">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-background border border-primary/10 backdrop-blur-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col md:flex-row">
              <div className="md:w-1/2 relative overflow-hidden bg-primary/5 min-h-[200px] md:min-h-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Dumbbell className="h-16 w-16 text-primary" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-dot-pattern opacity-10" />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Dumbbell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Abal</h3>
                <div className="text-sm text-muted-foreground mb-4">Gym Management & Access Control System</div>
                <p className="mb-6">
                  A comprehensive solution for gym owners to manage memberships, control access, and streamline
                  operations with powerful analytics and seamless integrations.
                </p>
                <div className="mt-auto">
                  <Link href="/products#abal">
                    <Button className="gap-1 group-hover:bg-primary group-hover:text-white transition-colors">
                      Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product 2 & 3: Side by side with staggered appearance */}
          <div className="md:col-span-6 reveal fade-bottom">
            <div className="group relative overflow-hidden rounded-2xl h-full bg-gradient-to-br from-[#f0f4ff] to-[#e0e7ff] border border-[#c7d2fe]/30 hover:shadow-xl hover:shadow-[#818cf8]/10 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] bg-[#818cf8]/10" />
              <div className="p-8 relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#818cf8]/20">
                  <GraduationCap className="h-6 w-6 text-[#4f46e5]" />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#4f46e5] transition-colors">Fidel</h3>
                <div className="text-sm text-muted-foreground mb-4">School Management System</div>
                <p className="mb-6">
                  An all-in-one platform for educational institutions to manage students, staff, curriculum, and communications.
                </p>
                <div className="mt-auto pt-4">
                  <Link href="/products#fidel">
                    <Button variant="outline" className="gap-1 bg-white/50 backdrop-blur-sm border-[#818cf8]/30 hover:bg-[#818cf8] hover:text-white transition-all">
                      Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#e0e7ff] to-transparent" />
            </div>
          </div>
          
          <div className="md:col-span-6 reveal fade-right">
            <div className="group relative overflow-hidden rounded-2xl h-full bg-gradient-to-br from-[#ffedd5] to-[#fed7aa] border border-[#fdba74]/30 hover:shadow-xl hover:shadow-[#f97316]/10 transition-all duration-500">
              <div className="absolute top-0 left-0 w-32 h-32 rounded-br-[100px] bg-[#f97316]/10" />
              <div className="p-8 relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f97316]/20">
                  <Coins className="h-6 w-6 text-[#ea580c]" />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#ea580c] transition-colors">WoveraFund</h3>
                <div className="text-sm text-muted-foreground mb-4">Crowdfunding Platform</div>
                <p className="mb-6">
                  A powerful crowdfunding solution that connects innovators with backers to launch successful campaigns.
                </p>
                <div className="mt-auto pt-4">
                  <Link href="/products#woverafund">
                    <Button variant="outline" className="gap-1 bg-white/50 backdrop-blur-sm border-[#fdba74]/30 hover:bg-[#f97316] hover:text-white transition-all">
                      Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#fed7aa] to-transparent" />
            </div>
          </div>
        </div>
        
        <div className="flex justify-center reveal fade-bottom">
          <Link href="/products">
            <Button size="lg" className="gap-1 group relative overflow-hidden bg-primary hover:bg-primary/90">
              <span className="relative z-10">View all products</span>
              <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Products

