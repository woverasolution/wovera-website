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
        const elementVisible = 500

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", reveal)
    reveal()
    return () => window.removeEventListener("scroll", reveal)
  }, [])

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-white to-primary/5 overflow-hidden py-20">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center max-w-3xl mx-auto lg:text-left lg:mx-0">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none reveal fade-bottom flex flex-col items-center lg:items-start gap-4">
                <span>WE MAKE PRODUCTS THAT</span>
                <span className="text-primary">JUST WORK</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground reveal fade-bottom max-w-2xl mx-auto lg:mx-0" style={{ transitionDelay: "0.1s" }}>
                We build exceptional, scalable SaaS products and innovative tech solutions that empower businesses to
                thrive in the digital age.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start reveal fade-bottom" style={{ transitionDelay: "0.2s" }}>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 h-12">
                  Get in touch <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/products" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 h-12 border-2">
                  Explore our products
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end relative">
            <div className="relative h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] lg:h-[600px] lg:w-[600px] reveal fade-left">
              <div className="absolute inset-0 rounded-full bg-primary/10"></div>
              <Image
                src="/abal-home.png"
                alt="Abal Mockup"
                width={700}
                height={700}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform scale-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

