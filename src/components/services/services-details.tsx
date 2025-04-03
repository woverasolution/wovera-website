"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Server, Lightbulb, Bot, CheckCircle, ArrowRight } from "lucide-react"

const ServicesDetails = () => {
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
        <Tabs defaultValue="custom" className="w-full">
          <div className="flex justify-center mb-8 reveal fade-bottom">
            <TabsList className="grid w-full max-w-2xl grid-cols-4">
              <TabsTrigger value="custom">Custom Software</TabsTrigger>
              <TabsTrigger value="saas">B2B SaaS</TabsTrigger>
              <TabsTrigger value="ai">AI Workflows</TabsTrigger>
              <TabsTrigger value="consultancy">Consultancy</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="custom">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 reveal fade-right">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Custom Software Development</h2>
                <p className="text-muted-foreground">
                  Tailored software solutions designed to address your specific business challenges and opportunities.
                  We build software that aligns perfectly with your workflows and objectives.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Web & Mobile Applications</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Enterprise Software</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Integration Solutions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Legacy System Modernization</span>
                  </div>
                </div>
                <div>
                  <Button className="gap-1">
                    Discuss your project <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center reveal fade-left">
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Custom Software Development"
                    width={600}
                    height={400}
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="saas">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 reveal fade-right">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">B2B SaaS Development</h2>
                <p className="text-muted-foreground">
                  End-to-end development of scalable, cloud-based software-as-a-service solutions for businesses. We
                  help you build, launch, and scale your SaaS product from concept to market.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Multi-tenant Architecture</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Subscription Management</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>API Development & Integration</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Scalable Cloud Infrastructure</span>
                  </div>
                </div>
                <div>
                  <Button className="gap-1">
                    Discuss your project <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center reveal fade-left">
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="B2B SaaS Development"
                    width={600}
                    height={400}
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ai">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 reveal fade-right">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">AI Workflow Solutions</h2>
                <p className="text-muted-foreground">
                  We study your business processes and create customized AI workflows that help your business grow
                  revenue with a lean model. Our AI solutions automate repetitive tasks, extract insights from data, and
                  enhance decision-making.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Business Process Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Custom AI Model Development</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Workflow Automation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Data-Driven Revenue Growth</span>
                  </div>
                </div>
                <div>
                  <Button className="gap-1">
                    Discuss your project <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center reveal fade-left">
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="AI Workflow Solutions"
                    width={600}
                    height={400}
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="consultancy">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 reveal fade-right">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Technology Consultancy</h2>
                <p className="text-muted-foreground">
                  Strategic guidance to help you make informed technology decisions and investments. Our consultancy
                  services help you navigate the complex technology landscape and align your tech strategy with business
                  goals.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Digital Transformation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Technology Stack Selection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Process Optimization</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>IT Strategy Development</span>
                  </div>
                </div>
                <div>
                  <Button className="gap-1">
                    Discuss your project <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center reveal fade-left">
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Technology Consultancy"
                    width={600}
                    height={400}
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default ServicesDetails

