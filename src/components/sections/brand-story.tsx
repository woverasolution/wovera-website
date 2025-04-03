"use client"

import { useEffect } from "react"

const BrandStory = () => {
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
    <section id="about" className="w-full py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2 reveal fade-right">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
              <p className="text-muted-foreground md:text-xl">
                The name "Wovera" is derived from the Amharic word "ወበራ" (webera), which refers to a community coming
                together to harvest.
              </p>
              <p className="text-muted-foreground md:text-xl">
                This concept of collaboration and collective effort is at the heart of our approach to building
                technology. We believe that the best solutions emerge when talented people work together with a shared
                purpose.
              </p>
              <p className="text-muted-foreground md:text-xl">
                Just as a community harvest brings abundance, our collaborative approach to technology creates solutions
                that are robust, scalable, and truly valuable to those who use them.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] reveal fade-left">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/0"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-sm space-y-4 text-center">
                  <h3 className="text-2xl font-bold text-primary">ወበራ</h3>
                  <p className="text-muted-foreground">A community coming together to harvest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory

