"use client"

import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const ServicesSection = () => {
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
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2 reveal fade-bottom">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Explore the range of services we offer to help your business grow and succeed.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <Card className="reveal fade-bottom shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2" style={{ transitionDelay: "0.1s" }}>
            <CardHeader>
              <CardTitle>Custom Software Engineering</CardTitle>
              <CardDescription>Tailored solutions for your business</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We provide bespoke software development services to meet your unique business needs, ensuring high quality and efficiency.
              </p>
            </CardContent>
          </Card>

          <Card className="reveal fade-bottom shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2" style={{ transitionDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle>Technology Consultancy</CardTitle>
              <CardDescription>Expert advice and guidance</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our consultancy services help you navigate the complex technology landscape, providing strategic insights and solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="reveal fade-bottom shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2" style={{ transitionDelay: "0.3s" }}>
            <CardHeader>
              <CardTitle>B2B SaaS</CardTitle>
              <CardDescription>Scalable and reliable solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We offer robust B2B SaaS solutions that drive efficiency and growth for your business, tailored to your specific industry needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection 