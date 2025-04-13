"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone } from "lucide-react"

const Contact = () => {
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
    <section id="contact" className="w-full py-20 flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 reveal fade-bottom">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Have a project in mind or want to learn more about our products? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <Card className="reveal fade-right">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out to us through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">info@woverasolutions.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-sm text-muted-foreground">+251 910428013</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Office</h3>
                  <p className="text-sm text-muted-foreground">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="reveal fade-left">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we&apos;ll get back to you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Send Message</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

  export default Contact

