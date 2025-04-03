"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dumbbell, GraduationCap, Coins, CheckCircle, ArrowRight } from "lucide-react"

const ProductDetails = () => {
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
    <section id="products" className="w-full py-20">
      <div className="container px-4 md:px-6">
        <Tabs defaultValue="abal" className="w-full">
          <div className="flex justify-center mb-8 reveal fade-bottom">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="abal">Abal</TabsTrigger>
              <TabsTrigger value="fidel">Fidel</TabsTrigger>
              <TabsTrigger value="woverafund">WoveraFund</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="abal">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 reveal fade-right">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <Dumbbell className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Abal</h2>
                <p className="text-xl text-muted-foreground">Gym Management & Access Control System</p>
                <p className="text-muted-foreground">
                  A comprehensive solution for gym owners to manage memberships, control access, and streamline
                  operations. Abal helps fitness centers run more efficiently with less overhead.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Automated membership management</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Secure biometric access control</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Integrated payment processing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Attendance tracking and reporting</span>
                  </div>
                </div>
                <div>
                  <Button className="gap-1">
                    Request a demo <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center reveal fade-left">
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                  <Image
                    src="/abal-home.png"
                    alt="Abal Dashboard"
                    width={600}
                    height={400}
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="fidel">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 reveal fade-right">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Fidel</h2>
                <p className="text-xl text-muted-foreground">School Management System</p>
                <p className="text-muted-foreground">
                  An all-in-one platform for educational institutions to manage students, staff, curriculum, and
                  communications. Fidel simplifies administrative tasks so schools can focus on education.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Student information management</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Attendance and grade tracking</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Curriculum and timetable planning</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Parent-teacher communication portal</span>
                  </div>
                </div>
                <div>
                  <Button className="gap-1">
                    Request a demo <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center reveal fade-left">
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Fidel Dashboard"
                    width={600}
                    height={400}
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="woverafund">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 reveal fade-right">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <Coins className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">WoveraFund</h2>
                <p className="text-xl text-muted-foreground">Crowdfunding Platform</p>
                <p className="text-muted-foreground">
                  A powerful crowdfunding solution that connects innovators with backers. WoveraFund provides the tools
                  needed to launch, manage, and grow successful fundraising campaigns.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Customizable campaign pages</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Secure payment processing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Backer management tools</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    <span>Analytics and marketing integrations</span>
                  </div>
                </div>
                <div>
                  <Button className="gap-1">
                    Request a demo <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center reveal fade-left">
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="WoveraFund Dashboard"
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

export default ProductDetails

