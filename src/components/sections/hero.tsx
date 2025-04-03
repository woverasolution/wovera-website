"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Hero = () => {
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
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-white to-primary/5 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none reveal fade-bottom">
                Tech that <span className="text-primary">just works</span>
              </h1>
              <p
                className="max-w-[600px] text-muted-foreground md:text-xl reveal fade-bottom"
                style={{ transitionDelay: "0.1s" }}
              >
                We build exceptional, scalable SaaS products and innovative tech solutions that empower businesses to
                thrive in the digital age.
              </p>
            </div>
            <div
              className="flex flex-col gap-2 min-[400px]:flex-row reveal fade-bottom"
              style={{ transitionDelay: "0.2s" }}
            >
              <Link href="/contact">
                <Button size="lg" className="gap-1">
                  Get in touch <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline">
                  Explore our products
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] reveal fade-left">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/0"></div>
              <Image
                src="/wovera-logo.jpg"
                alt="Wovera Logo"
                width={300}
                height={300}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}

export default Hero

