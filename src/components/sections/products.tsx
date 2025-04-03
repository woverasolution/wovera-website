"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, GraduationCap, Coins, ArrowRight } from "lucide-react"

const Products = () => {
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
    <section id="products" className="w-full py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 reveal fade-bottom">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Wovera Suite</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Our growing collection of proven, scalable SaaS products designed to solve real-world problems.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <Card className="reveal fade-right">
            <CardHeader className="pb-2">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                <Dumbbell className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Abal</CardTitle>
              <CardDescription>Gym Management & Access Control System</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <p>
                A comprehensive solution for gym owners to manage memberships, control access, and streamline
                operations.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/products#abal">
                <Button variant="outline" className="gap-1">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="reveal fade-bottom">
            <CardHeader className="pb-2">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Fidel</CardTitle>
              <CardDescription>School Management System</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <p>
                An all-in-one platform for educational institutions to manage students, staff, curriculum, and
                communications.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/products#fidel">
                <Button variant="outline" className="gap-1">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="reveal fade-left">
            <CardHeader className="pb-2">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                <Coins className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">WoveraFund</CardTitle>
              <CardDescription>Crowdfunding Platform</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <p>
                A powerful crowdfunding solution that connects innovators with backers to launch successful campaigns.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/products#woverafund">
                <Button variant="outline" className="gap-1">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="flex justify-center reveal fade-bottom">
          <Link href="/products">
            <Button size="lg" className="gap-1">
              View all products <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Products

