"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { cursiveFont } from "../sections/hero";

const ServicesHero = () => {
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
    <section className="-mt-20 w-full px-[16%] flex flex-col lg:flex-row items-center justify-between gap-12 pt-20 px-4 bg-gradient-to-br from-yellow-100 via-transparent to-green-100">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
        <h1 className="text-6xl font-bold ml-22">Our </h1>
        <h1 className={cn("text-primary text-8xl -mt-16", cursiveFont.className)}>
          Services
        </h1>
        <p className="text-muted-foreground">
          We offer a range of technology services to help businesses leverage
          innovation for growth and digital transformation.
        </p>
        <div className="flex gap-4">
          <Link href="#services">
            <Button>
              Explore services <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Get in touch</Button>
          </Link>
        </div>
      </div>

      <Image
        src="/images/service.png"
        alt="Services illustration"
        width={600}
        height={600}
        className="object-contain -mb-5"
        priority
      />
    </section>
  );
};

export default ServicesHero;
