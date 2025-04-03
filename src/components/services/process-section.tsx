"use client"

import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const ProcessSection = () => {
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Process</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              We follow a proven methodology to deliver exceptional results for every project.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="reveal fade-bottom" style={{ transitionDelay: "0.1s" }}>
            <CardHeader>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                1
              </div>
              <CardTitle>Discovery</CardTitle>
              <CardDescription>Understanding your needs</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We begin by deeply understanding your business, challenges, and objectives through collaborative
                workshops and research.
              </p>
            </CardContent>
          </Card>

          <Card className="reveal fade-bottom" style={{ transitionDelay: "0.2s" }}>
            <CardHeader>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                2
              </div>
              <CardTitle>Strategy</CardTitle>
              <CardDescription>Planning the solution</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We develop a comprehensive strategy and roadmap tailored to your specific requirements and business
                goals.
              </p>
            </CardContent>
          </Card>

          <Card className="reveal fade-bottom" style={{ transitionDelay: "0.3s" }}>
            <CardHeader>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                3
              </div>
              <CardTitle>Development</CardTitle>
              <CardDescription>Building with precision</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our expert team designs and develops your solution using agile methodologies, ensuring quality at every
                step.
              </p>
            </CardContent>
          </Card>

          <Card className="reveal fade-bottom" style={{ transitionDelay: "0.4s" }}>
            <CardHeader>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                4
              </div>
              <CardTitle>Delivery & Growth</CardTitle>
              <CardDescription>Continuous improvement</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We deploy your solution and provide ongoing support, optimization, and enhancements to ensure long-term
                success.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection

