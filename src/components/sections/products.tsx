"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Coins, Dumbbell, GraduationCap } from "lucide-react";
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
    <section
      id="products"
      className="w-full py-20  overflow-hidden bg-gray-100/20"
    >
      {/* Background texture
      <div className="absolute inset-0 opacity-40 bg-grid-pattern mix-blend-soft-light pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" /> */}

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 reveal fade-bottom">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
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

        <div className="mx-auto max-w-6xl py-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 relative">
          {/* Product 1: Abal */}
          <div
            className="reveal fade-bottom"
            style={{ transitionDelay: "0ms" }}
          >
            <div className="group relative overflow-hidden rounded-sm h-full bg-gradient-to-br from-primary/5 via-primary/10 to-background border border-primary/10 backdrop-blur-sm hover:shadow-xl transition-all duration-500">
              <div className="aspect-video relative overflow-hidden bg-primary/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Dumbbell className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-dot-pattern opacity-10" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Abal
                </h3>
                <div className="text-sm text-muted-foreground mb-3">
                  Gym Management & Access Control
                </div>
                <p className="mb-6 text-sm md:text-base">
                  A comprehensive solution for gym owners to manage memberships,
                  control access, and streamline operations with powerful
                  analytics.
                </p>
                <div className="mt-auto pt-4">
                  <Link href="/products#abal">
                    <Button
                      variant="outline"
                      className="w-full gap-1 border-primary/20 hover:bg-primary hover:text-white transition-all"
                    >
                      Learn more{" "}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </div>

          {/* Product 2: Fidel */}
          <div
            className="reveal fade-bottom"
            style={{ transitionDelay: "150ms" }}
          >
            <div className="group relative overflow-hidden rounded-sm h-full bg-gradient-to-br from-[#f0f4ff] to-[#e0e7ff] border border-[#c7d2fe]/30 hover:shadow-xl hover:shadow-[#818cf8]/10 transition-all duration-500">
              <div className="aspect-video relative overflow-hidden bg-[#818cf8]/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-[#818cf8]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <GraduationCap className="h-12 w-12 text-[#4f46e5]" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-dot-pattern opacity-10" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#4f46e5] transition-colors">
                  Fidel
                </h3>
                <div className="text-sm text-muted-foreground mb-3">
                  School Management System
                </div>
                <p className="mb-6 text-sm md:text-base">
                  An all-in-one platform for educational institutions to manage
                  students, staff, curriculum, and communications.
                </p>
                <div className="mt-auto pt-4">
                  <Link href="/products#fidel">
                    <Button
                      variant="outline"
                      className="w-full gap-1 border-[#818cf8]/30 hover:bg-[#818cf8] hover:text-white transition-all"
                    >
                      Learn more{" "}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#4f46e5]/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </div>

          {/* Product 3: WoveraFund */}
          <div
            className="reveal fade-bottom"
            style={{ transitionDelay: "300ms" }}
          >
            <div className="group relative overflow-hidden rounded-sm h-full bg-gradient-to-br from-[#ffedd5] to-[#fed7aa] border border-[#fdba74]/30 hover:shadow-xl hover:shadow-[#f97316]/10 transition-all duration-500">
              <div className="aspect-video relative overflow-hidden bg-[#f97316]/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-[#f97316]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Coins className="h-12 w-12 text-[#ea580c]" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-dot-pattern opacity-10" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#ea580c] transition-colors">
                  WoveraFund
                </h3>
                <div className="text-sm text-muted-foreground mb-3">
                  Crowdfunding Platform
                </div>
                <p className="mb-6 text-sm md:text-base">
                  A powerful crowdfunding solution that connects innovators with
                  backers to launch successful campaigns.
                </p>
                <div className="mt-auto pt-4">
                  <Link href="/products#woverafund">
                    <Button
                      variant="outline"
                      className="w-full gap-1 border-[#fdba74]/30 hover:bg-[#f97316] hover:text-white transition-all"
                    >
                      Learn more{" "}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ea580c]/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          </div>
        </div>

        <div className="flex justify-center reveal fade-bottom">
          <Link href="/products">
            <Button
              size="lg"
              className="gap-1 group relative overflow-hidden bg-primary hover:bg-primary/90"
            >
              <span className="relative z-10">View all products</span>
              <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
