"use client";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { ArrowRight } from "lucide-react";
import { Yellowtail } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const dawningNewDay = Yellowtail({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  const isMobile = useIsMobile();
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const reveal = () => {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 500;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <section className="relative w-full -mt-18 min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e6f7ee] via-[#e8faf0] to-white"></div>
      {/* Radial gradient highlight near navbar */}
      <div className="absolute top-0 left-0 right-0 w-full h-[300px] bg-gradient-radial from-[#d0efdf] to-transparent opacity-70"></div>
      {/* Multiple accent gradients */}
      <div className="absolute right-0 top-0 w-[1000px] h-[1000px] rounded-full bg-gradient-radial from-[#c7eedb] to-transparent translate-x-1/3 -translate-y-1/4 opacity-60"></div>
      <div className="absolute left-0 top-[10%] w-[800px] h-[800px] rounded-full bg-gradient-radial from-[#b9e6cf] to-transparent -translate-x-1/3 opacity-50"></div>
      <div className="absolute left-1/2 top-[15%] w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#a5dec1] to-transparent -translate-x-1/2 opacity-40"></div>

      {/* Hero Image */}
      <div
        className="absolute left-0 right-0 bottom-0 w-full h-[55vh] md:h-auto overflow-hidden"
        aria-hidden="true"
      >
        <div className="relative w-full h-full md:max-w-[2050px] md:mx-auto">
          <Image
            src="/images/hero-image.png"
            alt="Hero illustration"
            width={2050}
            height={1000}
            priority
            className="w-auto h-full md:w-full md:h-auto object-contain object-bottom scale-330 md:scale-100 -mt-145 ml-80 md:ml-0 md:mt-40"
          />
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center -mt-55 md:-mt-30">
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 text-center max-w-3xl">
            <div className="space-y-3 md:space-y-4 md:-mt-40">
              <div className="relative">
                <h1 className="text-6xl md:text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none reveal fade-bottom flex flex-col items-center gap-2 md:gap-4">
                  <span className={""}>We make products that</span>
                  <span
                    className={`${dawningNewDay.className} text-primary text-6xl sm:text-7xl xl:text-8xl -mt-1 md:-mt-4`}
                  >
                    Just Work
                  </span>
                </h1>
                <div
                  className="reveal fade-bottom -mt-1"
                  style={{ transitionDelay: "0.5s" }}
                >
                  <LineSvg width={isMobile ? 180 : 280} />
                </div>
              </div>
              <p
                className="text-muted-foreground reveal fade-bottom max-w-2xl mx-auto text-sm md:text-base px-4"
                style={{ transitionDelay: "0.1s" }}
              >
                We build exceptional, scalable SaaS products and innovative tech
                solutions that empower businesses to thrive in the digital age.
              </p>
            </div>
            <div
              className="flex flex-col sm:flex-row gap-3 justify-center reveal fade-bottom px-4 max-w-md mx-auto w-full"
              style={{ transitionDelay: "0.2s" }}
            >
              <Link href="/products" className={"w-full sm:w-auto"}>
                <Button
                  size="default"
                  variant="outline"
                  className="w-full sm:w-auto text-sm md:text-base px-4 md:px-6 h-10 md:h-11 rounded-full border border-gray-200 bg-white hover:bg-gray-50 shadow-md"
                >
                  Explore our products
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="default"
                  className="w-full sm:w-auto text-sm md:text-base px-4 md:px-6 h-10 md:h-11 rounded-full bg-primary hover:bg-primary/90 text-white shadow-md"
                >
                  Get in touch{" "}
                  <ArrowRight className="h-3.5 md:h-4 w-3.5 md:w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

const LineSvg = ({ width = 240 }: { width?: number }) => {
  return (
    <svg
      className="mx-auto -mt-4"
      width={width}
      height={width / 5}
      viewBox="0 0 120 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>
        {`
          @keyframes drawLine {
            0% {
              stroke-dashoffset: 200;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
          .animated-line {
            stroke-dasharray: 200;
            stroke-dashoffset: 200;
            opacity: 0;
          }
          .reveal.active .animated-line {
            opacity: 1;
            animation: drawLine 1.5s ease-out forwards;
          }
        `}
      </style>
      <path
        className="animated-line"
        d="M10.8721 8.46773C25.6811 7.29616 40.7753 7.35825 55.655 7.35825C70.5348 7.35825 85.4146 7.35825 100.294 8.46773C105.701 8.89915 111.108 9.39264 116.516 9.88616"
        stroke="url(#paint0_linear_301_2)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_301_2"
          x1="10.8721"
          y1="8.62177"
          x2="116.516"
          y2="8.62177"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD700" />
          <stop offset="0.5" stopColor="#FFA500" />
          <stop offset="1" stopColor="#FF8C00" />
        </linearGradient>
      </defs>
    </svg>
  );
};
