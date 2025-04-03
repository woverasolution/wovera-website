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
    <section id="services" className="w-full py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 reveal fade-bottom">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              We offer a range of services to help businesses leverage technology for growth and innovation.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 py-12">
          {/* Service Card 1 */}
          <div className="flex flex-col items-start space-y-4 p-6 rounded-lg bg-card hover:bg-accent/5 transition-colors reveal fade-bottom flex-1 min-w-[280px] max-w-[400px]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Custom Software Development</h3>
            <p className="text-muted-foreground flex-grow">
              Tailored software solutions designed to address your specific business challenges and opportunities.
            </p>
            <Link href="/services#custom">
              <Button variant="link" className="p-0 h-auto gap-1">
                Learn more <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Service Card 2 */}
          <div className="flex flex-col items-start space-y-4 p-6 rounded-lg bg-card hover:bg-accent/5 transition-colors reveal fade-bottom flex-1 min-w-[280px] max-w-[400px]" style={{ transitionDelay: "0.1s" }}>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Server className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">B2B SaaS Development</h3>
            <p className="text-muted-foreground flex-grow">
              End-to-end development of scalable, cloud-based software-as-a-service solutions for businesses.
            </p>
            <Link href="/services#saas">
              <Button variant="link" className="p-0 h-auto gap-1">
                Learn more <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Service Card 3 */}
          <div className="flex flex-col items-start space-y-4 p-6 rounded-lg bg-card hover:bg-accent/5 transition-colors reveal fade-bottom flex-1 min-w-[280px] max-w-[400px]" style={{ transitionDelay: "0.2s" }}>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Bot className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">AI Workflow Solutions</h3>
            <p className="text-muted-foreground flex-grow">
              Customized AI workflows that study your business processes and help grow revenue with a lean model.
            </p>
            <Link href="/services#ai">
              <Button variant="link" className="p-0 h-auto gap-1">
                Learn more <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Service Card 4 */}
          <div className="flex flex-col items-start space-y-4 p-6 rounded-lg bg-card hover:bg-accent/5 transition-colors reveal fade-bottom flex-1 min-w-[280px] max-w-[400px]" style={{ transitionDelay: "0.3s" }}>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Technology Consultancy</h3>
            <p className="text-muted-foreground flex-grow">
              Strategic guidance to help you make informed technology decisions and investments.
            </p>
            <Link href="/services#consultancy">
              <Button variant="link" className="p-0 h-auto gap-1">
                Learn more <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center reveal fade-bottom">
          <Link href="/services">
            <Button size="lg" className="gap-1">
              View all services <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services

