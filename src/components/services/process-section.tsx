"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { WaveSeparator } from "../ui/wave-separator";

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

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

  const steps = [
    {
      title: "Discovery",
      description: "Understanding your needs",
      content:
        "We begin by deeply understanding your business, challenges, and objectives through collaborative workshops and research.",
      image: "/images/discovery.png",
      color: "from-blue-500/20 to-indigo-500/20",
      borderColor: "group-hover:border-blue-500/50",
    },
    {
      title: "Strategy",
      description: "Planning the solution",
      content:
        "We develop a comprehensive strategy and roadmap tailored to your specific requirements and business goals.",
      image: "/images/strategy.png",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "group-hover:border-purple-500/50",
    },
    {
      title: "Development",
      description: "Building with precision",
      content:
        "Our expert team designs and develops your solution using agile methodologies, ensuring quality at every step.",
      image: "/images/development.png",
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "group-hover:border-amber-500/50",
    },
    {
      title: "Delivery & Growth",
      description: "Continuous improvement",
      content:
        "We deploy your solution and provide ongoing support, optimization, and enhancements to ensure long-term success.",
      image: "/images/growth.png",
      color: "from-emerald-500/20 to-green-500/20",
      borderColor: "group-hover:border-emerald-500/50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  // const arrowVariants = {
  //   hidden: { opacity: 0, x: -20 },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeOut",
  //       delay: 0.5,
  //     },
  //   },
  // };

  return (
    <section className="w-full py-24 bg-gradient-to-br -mt-20  from-yellow-50/10 to-primary/5 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center  text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className=" w-full text-center">
            <h2
              className={cn(
                "text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text",
                "reveal fade-bottom"
              )}
            >
              Our Process
            </h2>
            <p className="max-w-[500px] text-muted-foreground md:text-xl mt-1 mx-auto ">
              We follow a proven methodology to deliver exceptional results for
              every project.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative grid gap-4 md:gap-2 md:grid-cols-2 lg:grid-cols-4 mx-auto justify-center "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative group min-w-[300px] hover:z-10"
              variants={cardVariants}
              custom={index}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <Card
                className={cn(
                  "h-full  transition-all duration-500 ease-in-out hover:scale-105 rounded-sm",
                  "bg-gradient-to-br backdrop-blur-sm shadow-none",
                  "hover:shadow-[0_0_30px_rgba(0,0,0,0.1)]",
                  step.borderColor,
                  activeStep === index
                    ? "bg-gradient-to-br " + step.color
                    : "bg-card/80"
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br transition-opacity duration-500 rounded-md overflow-hidden",
                    step.color,
                    "opacity-40 group-hover:opacity-25"
                  )}
                />

                <CardHeader className="relative">
                  <div className="flex items-center gap-2 justify-between">
                    <div
                      className={cn(
                        "flex items-center justify-center h-10 w-10 rounded-md bg-primary/5 border-2 border-primary/20 text-primary ",
                        activeStep === index &&
                          "bg-primary text-primary-foreground",
                        "text-lg font-bold mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                      )}
                    >
                      {index + 1}
                    </div>
                    <div className="absolute top-1 right-5">
                      <motion.div variants={imageVariants}>
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={70}
                          height={70}
                        />
                      </motion.div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold -mt-3">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium -mt-2">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <WaveSeparator className="max-w-[300px] pl-2 -my-4" />
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.content}
                  </p>
                </CardContent>
              </Card>

              {/* {index < 3 && (
                <div className="absolute top-1/2 -right-11 hidden lg:flex items-center justify-center transform -translate-y-1/2 z-10 opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                  <motion.div variants={arrowVariants} custom={index}>
                    <Image
                      src="/images/arrow.png"
                      alt="Arrow right"
                      width={60}
                      height={60}
                    />
                  </motion.div>
                </div>
              )} */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
