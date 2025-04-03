"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const ServicesCTA = () => {
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
    <section className="w-full py-20 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center bg-no-repeat">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center reveal fade-bottom">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Let&apos;s build something amazing together
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Whether you need a custom solution, SaaS product, or strategic guidance, we&apos;re here to help you succeed.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg" className="gap-1">
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline">
                  Explore our products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesCTA

