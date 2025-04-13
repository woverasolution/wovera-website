"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ProductHero = () => {
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
    <section className="w-full py-5 md:py-5 overflow-hidden bg-gradient-to-b from-transparent via-primary/5 to-primary/10">
      <div
        className="w-full h-full"
        style={{
       
        }}
      >
        <div className="container px-4 md:px-6 mx-auto py-20">
          <div className="flex flex-col items-start  justify-center space-y-8 text-center max-w-3xl mx-auto">
            <div className="space-y-4 reveal fade-bottom text-left">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                The Wovera Suite
              </h1>
              <div className="h-0.5 w-40 bg-primary/40 rounded-full -mt-2"></div>

              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Our growing collection of proven, scalable SaaS products
                designed to solve real-world problems.
              </p>
            </div>

            <div
              className={cn(
                "flex flex-col gap-4 min-[400px]:flex-row reveal fade-bottom",
                "backdrop-blur-sm py-2 px-3 rounded-full border border-primary/10 border-2"
              )}
              style={{ transitionDelay: "0.1s" }}
            >
              <Link href="#products">
                <Button size="lg" className="gap-2 rounded-full px-6">
                  Explore products{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-6"
                >
                  Contact sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/images/products-hero.png"
          alt="Product Hero"
          width={1000}
          height={1000}
          className="absolute top-0 right-0 opacity-5 lg:opacity-15"
        />
      </div>
    </section>
  );
};

export default ProductHero;
