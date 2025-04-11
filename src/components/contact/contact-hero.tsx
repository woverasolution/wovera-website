"use client"

import { useEffect } from "react"

const ContactHero = () => {
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
    <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-white to-primary/5 overflow-hidden flex items-center justify-center">
      {/* Geometric Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-secondary/10 rounded-lg rotate-12"></div>
      <div className="absolute top-1/3 left-1/4 w-20 h-20 border-2 border-primary/20 rounded-lg rotate-45"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 border-4 border-primary/10 rounded-full"></div>
      
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center relative z-10">
        <div className="space-y-2 reveal fade-bottom">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Have a project in mind or want to learn more about our products and services? We&apos;d love to hear from you.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}

export default ContactHero

