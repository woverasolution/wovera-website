"use client";

import Image from "next/image";
import { useEffect } from "react";

const BrandStory = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const reveal = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    // Initial check
    reveal();

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <section id="about" className="w-full py-20 bg-green-50/80">
      <div className="container px-6 md:px-10 lg:px-12 mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6 pl-0 sm:pl-4 md:pl-6">
            <div className="space-y-4 reveal fade-right">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Our Story
              </h2>
              <p className="text-muted-foreground md:text-xl">
                The name &quot;Wovera&quot; is derived from the Amharic word
                &quot;ወበራ&quot;, which refers to a community coming together to
                harvest.
              </p>
              <p className="text-muted-foreground md:text-xl">
                This concept of collaboration and collective effort is at the
                heart of our approach to building technology. We believe that
                the best solutions emerge when talented people work together
                with a shared purpose.
              </p>
              <p className="text-muted-foreground md:text-xl">
                Just as a community harvest brings abundance, our collaborative
                approach to technology creates solutions that are robust,
                scalable, and truly valuable to those who use them.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] reveal fade-left">
              <Image
                src="/images/wovera-et.png"
                alt="Brand Story"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
