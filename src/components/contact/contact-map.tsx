"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

const ContactMap = () => {
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
    <section className="w-full py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2 reveal fade-bottom">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Visit Our Office</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              We'd love to meet you in person at our headquarters in Addis Ababa.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl reveal fade-bottom">
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video w-full bg-muted">
                {/* This would be replaced with an actual map component in production */}
                <div className="h-full w-full flex items-center justify-center bg-muted">
                  <p className="text-muted-foreground">Interactive Map Would Be Displayed Here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactMap

