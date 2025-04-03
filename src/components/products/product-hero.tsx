"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const ProductHero = () => {
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
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 reveal fade-bottom">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              The <span className="text-primary">Wovera Suite</span>
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Our growing collection of proven, scalable SaaS products designed to solve real-world problems.
            </p>
          </div>
          <div
            className="flex flex-col gap-2 min-[400px]:flex-row reveal fade-bottom"
            style={{ transitionDelay: "0.1s" }}
          >
            <Link href="#products">
              <Button size="lg" className="gap-1">
                Explore products <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}

export default ProductHero

