"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Products = () => {
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
    reveal();

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <section id="products" className="w-full py-20 bg-gray-100/20">
      {/* Background texture
      <div className="absolute inset-0 opacity-40 bg-grid-pattern mix-blend-soft-light pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" /> */}

      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 reveal fade-bottom">
            <div className="inline-block py-1 px-4 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Our Products
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The Wovera Suite
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Our growing collection of proven, scalable SaaS products designed
              to solve real-world problems.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-6xl py-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 place-items-center">
          {/* Product 2: Fidel */}
          <div
            className="reveal fade-bottom w-full max-w-sm"
            style={{ transitionDelay: "150ms" }}
          >
            <div className="overflow-hidden rounded-2xl h-full bg-gradient-to-br from-violet-50 to-violet-100/50 border-2 border-violet-200/50">
              <div className="p-3 w-full">
                <Image
                  src="/images/fidel-card.png"
                  alt="Fidel"
                  width={250}
                  height={200}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="p-6 py-4">
                <h3 className="text-2xl font-bold mb-2 text-violet-950">
                  Fidel
                </h3>
                <div className="text-sm text-violet-600 mb-3 font-medium">
                  School Management System
                </div>
                <p className="mb-6 text-sm md:text-base text-violet-900/80">
                  An all-in-one platform for educational institutions to manage
                  students, staff, curriculum, and communications.
                </p>
                <div className="pt-4">
                  <Link href="/products#fidel" className="block">
                    <Button
                      variant="outline"
                      className="w-full gap-2 border-2 border-violet-200 bg-white text-violet-700"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Product 1: Abal */}
          <div
            className="reveal fade-bottom w-full max-w-sm"
            style={{ transitionDelay: "0ms" }}
          >
            <div className="overflow-hidden rounded-2xl h-full bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-2 border-emerald-200/50">
              <div className="p-3 w-full">
                <Image
                  src="/images/abal-card.png"
                  alt="Abal"
                  width={250}
                  height={200}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="p-6 py-4">
                <h3 className="text-2xl font-bold mb-2 text-emerald-950">
                  Abal
                </h3>
                <div className="text-sm text-emerald-600 mb-3 font-medium">
                  Gym Management & Access Control
                </div>
                <p className="mb-6 text-sm md:text-base text-emerald-900/80">
                  A comprehensive solution for gym owners to manage memberships,
                  control access, and streamline operations with powerful
                  analytics.
                </p>
                <div className="pt-4">
                  <Link href="/products#abal" className="block">
                    <Button
                      variant="outline"
                      className="w-full gap-2 border-2 border-emerald-200 bg-white text-emerald-700"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Product 3: WoveraFund */}
          <div
            className="reveal fade-bottom w-full max-w-sm"
            style={{ transitionDelay: "300ms" }}
          >
            <div className="overflow-hidden rounded-2xl h-full bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-200/50">
              <div className="p-3 w-full">
                <Image
                  src="/images/wovera-card.png"
                  alt="WoveraFund"
                  width={250}
                  height={200}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              <div className="p-6 py-4">
                <h3 className="text-2xl font-bold mb-2 text-orange-950">
                  WoveraFund
                </h3>
                <div className="text-sm text-orange-600 mb-3 font-medium">
                  Crowdfunding Platform
                </div>
                <p className="mb-6 text-sm md:text-base text-orange-900/80">
                  A powerful crowdfunding solution that connects innovators with
                  backers to launch successful campaigns.
                </p>
                <div className="pt-4">
                  <Link href="/products#woverafund" className="block">
                    <Button
                      variant="outline"
                      className="w-full gap-2 border-2 border-orange-200 bg-white text-orange-700"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center reveal fade-bottom">
          <Link href="/products">
            <Button
              size="lg"
              className="gap-2 border-2 border-primary/20 bg-white text-primary hover:bg-white text-lg p-6 px-20"
            >
              View all products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
