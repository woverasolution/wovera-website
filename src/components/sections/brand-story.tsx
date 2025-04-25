"use client";

import { Yellowtail } from "next/font/google";
import Image from "next/image";
import { useEffect } from "react";

const dawningNewDay = Yellowtail({
  subsets: ["latin"],
  weight: ["400"],
});

const BrandStory = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const reveal = () => {
      revealElements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <section
      className="w-full overflow-x-hidden
        bg-gradient-to-br from-green-50/70 via-yellow-50/20
        to-green-100/60 py-12 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12 lg:items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 overflow-hidden">
            <div className="reveal fade-right space-y-6 overflow-hidden">
              <h2
                className={`text-3xl sm:text-4xl md:text-5xl font-bold
                  tracking-tighter text-primary ${dawningNewDay.className}`}
              >
                Our Story
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground text-base md:text-lg">
                  The name &quot;Wovera&quot; is derived from the Amharic word
                  &quot;ወበራ&quot;, which refers to a community coming together
                  to harvest.
                </p>
                <p className="text-muted-foreground text-base md:text-lg">
                  This concept of collaboration and collective effort is at the
                  heart of our approach to building technology. We believe that
                  the best solutions emerge when talented people work together
                  with a shared purpose.
                </p>
                <p className="text-muted-foreground text-base md:text-lg">
                  Just as a community harvest brings abundance, our
                  collaborative approach to technology creates solutions that
                  are robust, scalable, and truly valuable to those who use
                  them.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 overflow-hidden">
            <div
              className="reveal fade-left mx-auto max-w-[300px]
                sm:max-w-[400px] aspect-square relative overflow-hidden"
            >
              <Image
                src="/images/wovera-et.png"
                alt="Brand Story"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
