"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, Server, Lightbulb, Bot, ArrowRight } from "lucide-react"

const Services = () => {
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
    // Initial check
    reveal()

    return () => {
      window.removeEventListener("scroll", reveal)
    }
  }, [])

  return (
    <section id="services" className="w-full py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-grid-pattern mix-blend-soft-light pointer-events-none" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2 reveal fade-bottom">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
              What We Do
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              We offer a range of services to help businesses leverage technology for growth and innovation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8 max-w-6xl mx-auto">
          {/* Service Card 1 - Top Left */}
          <div 
            className="group flex flex-col items-start p-0 rounded-2xl overflow-hidden bg-white dark:bg-card transition-all duration-500 reveal fade-bottom min-h-[380px] transform hover:-translate-y-2 hover:rotate-1 relative md:translate-y-0"
            style={{ zIndex: 1 }}
          >
            {/* Card gradient background for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 dark:from-card/40 to-white dark:to-card rounded-2xl" />
            
            {/* Card border and shadow */}
            <div className="absolute inset-0 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] group-hover:shadow-[0_15px_30px_rgb(0,0,0,0.07)] dark:group-hover:shadow-[0_15px_30px_rgb(0,0,0,0.15)] transition-all duration-500" />
            
            <div className="w-full h-40 bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-dot-pattern opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-white/90 to-white/70 dark:from-background/90 dark:to-background/70 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 shadow-md">
                  <Code className="h-12 w-12 text-primary/80" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-card to-transparent" />
            </div>
            
            <div className="p-8 flex flex-col flex-grow w-full relative z-10">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Custom Software Development</h3>
              <p className="text-muted-foreground flex-grow text-lg">
                Tailored software solutions designed to address your specific business challenges and opportunities.
              </p>
              <div className="mt-8 w-full">
                <Link href="/services?service=custom" className="w-full block">
                  <Button variant="outline" className="w-full gap-2 text-base py-6 border-primary/10 dark:border-primary/10 group-hover:bg-primary/90 group-hover:text-white transition-all duration-300 relative overflow-hidden">
                    <span className="relative z-10">Learn more</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/80 to-primary/100 transition-opacity duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 border border-primary/5 dark:border-primary/10 rounded-2xl pointer-events-none group-hover:border-primary/20 transition-colors duration-300" />
          </div>

          {/* Service Card 2 - Top Right */}
          <div 
            className="group flex flex-col items-start p-0 rounded-2xl overflow-hidden bg-white dark:bg-card transition-all duration-500 reveal fade-bottom min-h-[380px] transform hover:-translate-y-2 hover:rotate-[-1deg] relative md:translate-y-8" 
            style={{ transitionDelay: "0.1s", zIndex: 2 }}
          >
            {/* Card gradient background for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 dark:from-card/40 to-white dark:to-card rounded-2xl" />
            
            {/* Card border and shadow */}
            <div className="absolute inset-0 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] group-hover:shadow-[0_15px_30px_rgb(0,0,0,0.07)] dark:group-hover:shadow-[0_15px_30px_rgb(0,0,0,0.15)] transition-all duration-500" />
            
            <div className="w-full h-40 bg-gradient-to-br from-primary/15 to-primary/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-dot-pattern opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-white/90 to-white/70 dark:from-background/90 dark:to-background/70 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 shadow-md">
                  <Server className="h-12 w-12 text-primary/70" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-card to-transparent" />
            </div>
            
            <div className="p-8 flex flex-col flex-grow w-full relative z-10">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">B2B SaaS Development</h3>
              <p className="text-muted-foreground flex-grow text-lg">
                End-to-end development of scalable, cloud-based software-as-a-service solutions for businesses.
              </p>
              <div className="mt-8 w-full">
                <Link href="/services?service=saas" className="w-full block">
                  <Button variant="outline" className="w-full gap-2 text-base py-6 border-primary/10 dark:border-primary/10 group-hover:bg-primary/80 group-hover:text-white transition-all duration-300 relative overflow-hidden">
                    <span className="relative z-10">Learn more</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/80 to-primary/100 transition-opacity duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 border border-primary/5 dark:border-primary/10 rounded-2xl pointer-events-none group-hover:border-primary/20 transition-colors duration-300" />
          </div>

          {/* Service Card 3 - Bottom Left */}
          <div 
            className="group flex flex-col items-start p-0 rounded-2xl overflow-hidden bg-white dark:bg-card transition-all duration-500 reveal fade-bottom min-h-[380px] transform hover:-translate-y-2 hover:rotate-1 relative md:translate-y-[-8px]" 
            style={{ transitionDelay: "0.2s", zIndex: 3 }}
          >
            {/* Card gradient background for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 dark:from-card/40 to-white dark:to-card rounded-2xl" />
            
            {/* Card border and shadow */}
            <div className="absolute inset-0 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] group-hover:shadow-[0_15px_30px_rgb(0,0,0,0.07)] dark:group-hover:shadow-[0_15px_30px_rgb(0,0,0,0.15)] transition-all duration-500" />
            
            <div className="w-full h-40 bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-dot-pattern opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-white/90 to-white/70 dark:from-background/90 dark:to-background/70 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 shadow-md">
                  <Bot className="h-12 w-12 text-primary/75" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-card to-transparent" />
            </div>
            
            <div className="p-8 flex flex-col flex-grow w-full relative z-10">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">AI Workflow Solutions</h3>
              <p className="text-muted-foreground flex-grow text-lg">
                Customized AI workflows that study your business processes and help grow revenue with a lean model.
              </p>
              <div className="mt-8 w-full">
                <Link href="/services?service=ai" className="w-full block">
                  <Button variant="outline" className="w-full gap-2 text-base py-6 border-primary/10 dark:border-primary/10 group-hover:bg-primary/85 group-hover:text-white transition-all duration-300 relative overflow-hidden">
                    <span className="relative z-10">Learn more</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/80 to-primary/100 transition-opacity duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 border border-primary/5 dark:border-primary/10 rounded-2xl pointer-events-none group-hover:border-primary/20 transition-colors duration-300" />
          </div>

          {/* Service Card 4 - Bottom Right */}
          <div 
            className="group flex flex-col items-start p-0 rounded-2xl overflow-hidden bg-white dark:bg-card transition-all duration-500 reveal fade-bottom min-h-[380px] transform hover:-translate-y-2 hover:rotate-[-1deg] relative md:translate-y-0" 
            style={{ transitionDelay: "0.3s", zIndex: 4 }}
          >
            {/* Card gradient background for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 dark:from-card/40 to-white dark:to-card rounded-2xl" />
            
            {/* Card border and shadow */}
            <div className="absolute inset-0 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] group-hover:shadow-[0_15px_30px_rgb(0,0,0,0.07)] dark:group-hover:shadow-[0_15px_30px_rgb(0,0,0,0.15)] transition-all duration-500" />
            
            <div className="w-full h-40 bg-gradient-to-br from-primary/25 to-primary/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-dot-pattern opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-white/90 to-white/70 dark:from-background/90 dark:to-background/70 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 shadow-md">
                  <Lightbulb className="h-12 w-12 text-primary/80" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-card to-transparent" />
            </div>
            
            <div className="p-8 flex flex-col flex-grow w-full relative z-10">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">Technology Consultancy</h3>
              <p className="text-muted-foreground flex-grow text-lg">
                Strategic guidance to help you make informed technology decisions and investments.
              </p>
              <div className="mt-8 w-full">
                <Link href="/services?service=consultancy" className="w-full block">
                  <Button variant="outline" className="w-full gap-2 text-base py-6 border-primary/10 dark:border-primary/10 group-hover:bg-primary/95 group-hover:text-white transition-all duration-300 relative overflow-hidden">
                    <span className="relative z-10">Learn more</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/80 to-primary/100 transition-opacity duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 border border-primary/5 dark:border-primary/10 rounded-2xl pointer-events-none group-hover:border-primary/20 transition-colors duration-300" />
          </div>
        </div>

        <div className="flex justify-center mt-16 reveal fade-bottom">
          <Link href="/services">
            <Button size="lg" className="gap-2 group relative overflow-hidden hover:shadow-lg transition-all duration-300 text-lg py-6 px-8">
              <span className="relative z-10">View all services</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/90 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services

