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
    <section id="services" className="w-full py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-grid-pattern mix-blend-soft-light pointer-events-none" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
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

        <div className="flex flex-wrap justify-center gap-8 py-12">
          {/* Service Card 1 */}
          <div className="group flex flex-col items-start p-0 rounded-2xl overflow-hidden shadow-md bg-white dark:bg-card hover:shadow-xl transition-all duration-300 reveal fade-bottom flex-1 min-w-[280px] max-w-[340px] transform hover:-translate-y-1">
            <div className="w-full h-32 bg-gradient-to-r from-primary/20 to-primary/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-dot-pattern opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 dark:bg-background/90 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 shadow-sm">
                  <Code className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-card to-transparent" />
            </div>
            
            <div className="p-6 flex flex-col flex-grow w-full">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Custom Software Development</h3>
              <p className="text-muted-foreground flex-grow">
                Tailored software solutions designed to address your specific business challenges and opportunities.
              </p>
              <div className="mt-6 w-full">
                <Link href="/services?service=custom" className="w-full block">
                  <Button variant="outline" className="w-full gap-1 border-primary/20 dark:border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 border border-primary/5 dark:border-primary/10 rounded-2xl pointer-events-none group-hover:border-primary/20 transition-colors duration-300" />
          </div>

          {/* Service Card 2 */}
          <div className="group flex flex-col items-start p-0 rounded-2xl overflow-hidden shadow-md bg-white dark:bg-card hover:shadow-xl transition-all duration-300 reveal fade-bottom flex-1 min-w-[280px] max-w-[340px] transform hover:-translate-y-1" style={{ transitionDelay: "0.1s" }}>
            <div className="w-full h-32 bg-gradient-to-r from-[#8b5cf6]/20 to-[#8b5cf6]/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-dot-pattern opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 dark:bg-background/90 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 shadow-sm">
                  <Server className="h-10 w-10 text-[#8b5cf6]" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-card to-transparent" />
            </div>
            
            <div className="p-6 flex flex-col flex-grow w-full">
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#8b5cf6] transition-colors">B2B SaaS Development</h3>
              <p className="text-muted-foreground flex-grow">
                End-to-end development of scalable, cloud-based software-as-a-service solutions for businesses.
              </p>
              <div className="mt-6 w-full">
                <Link href="/services?service=saas" className="w-full block">
                  <Button variant="outline" className="w-full gap-1 border-[#8b5cf6]/20 dark:border-[#8b5cf6]/20 group-hover:bg-[#8b5cf6] group-hover:text-white transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 border border-[#8b5cf6]/5 dark:border-[#8b5cf6]/10 rounded-2xl pointer-events-none group-hover:border-[#8b5cf6]/20 transition-colors duration-300" />
          </div>

          {/* Service Card 3 */}
          <div className="group flex flex-col items-start p-0 rounded-2xl overflow-hidden shadow-md bg-white dark:bg-card hover:shadow-xl transition-all duration-300 reveal fade-bottom flex-1 min-w-[280px] max-w-[340px] transform hover:-translate-y-1" style={{ transitionDelay: "0.2s" }}>
            <div className="w-full h-32 bg-gradient-to-r from-[#2563eb]/20 to-[#2563eb]/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-dot-pattern opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 dark:bg-background/90 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 shadow-sm">
                  <Bot className="h-10 w-10 text-[#2563eb]" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-card to-transparent" />
            </div>
            
            <div className="p-6 flex flex-col flex-grow w-full">
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#2563eb] transition-colors">AI Workflow Solutions</h3>
              <p className="text-muted-foreground flex-grow">
                Customized AI workflows that study your business processes and help grow revenue with a lean model.
              </p>
              <div className="mt-6 w-full">
                <Link href="/services?service=ai" className="w-full block">
                  <Button variant="outline" className="w-full gap-1 border-[#2563eb]/20 dark:border-[#2563eb]/20 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 border border-[#2563eb]/5 dark:border-[#2563eb]/10 rounded-2xl pointer-events-none group-hover:border-[#2563eb]/20 transition-colors duration-300" />
          </div>

          {/* Service Card 4 */}
          <div className="group flex flex-col items-start p-0 rounded-2xl overflow-hidden shadow-md bg-white dark:bg-card hover:shadow-xl transition-all duration-300 reveal fade-bottom flex-1 min-w-[280px] max-w-[340px] transform hover:-translate-y-1" style={{ transitionDelay: "0.3s" }}>
            <div className="w-full h-32 bg-gradient-to-r from-[#f59e0b]/20 to-[#f59e0b]/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-dot-pattern opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 dark:bg-background/90 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 shadow-sm">
                  <Lightbulb className="h-10 w-10 text-[#f59e0b]" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-card to-transparent" />
            </div>
            
            <div className="p-6 flex flex-col flex-grow w-full">
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#f59e0b] transition-colors">Technology Consultancy</h3>
              <p className="text-muted-foreground flex-grow">
                Strategic guidance to help you make informed technology decisions and investments.
              </p>
              <div className="mt-6 w-full">
                <Link href="/services?service=consultancy" className="w-full block">
                  <Button variant="outline" className="w-full gap-1 border-[#f59e0b]/20 dark:border-[#f59e0b]/20 group-hover:bg-[#f59e0b] group-hover:text-white transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 border border-[#f59e0b]/5 dark:border-[#f59e0b]/10 rounded-2xl pointer-events-none group-hover:border-[#f59e0b]/20 transition-colors duration-300" />
          </div>
        </div>

        <div className="flex justify-center reveal fade-bottom">
          <Link href="/services">
            <Button size="lg" className="gap-1 group relative overflow-hidden hover:shadow-lg transition-all duration-300">
              <span className="relative z-10">View all services</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary to-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services

