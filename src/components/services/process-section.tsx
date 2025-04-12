"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
      icon: "🔍",
      color: "from-blue-500/20 to-indigo-500/20",
      borderColor: "group-hover:border-blue-500/50",
    },
    {
      title: "Strategy",
      description: "Planning the solution",
      content:
        "We develop a comprehensive strategy and roadmap tailored to your specific requirements and business goals.",
      icon: "🧠",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "group-hover:border-purple-500/50",
    },
    {
      title: "Development",
      description: "Building with precision",
      content:
        "Our expert team designs and develops your solution using agile methodologies, ensuring quality at every step.",
      icon: "⚙️",
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "group-hover:border-amber-500/50",
    },
    {
      title: "Delivery & Growth",
      description: "Continuous improvement",
      content:
        "We deploy your solution and provide ongoing support, optimization, and enhancements to ensure long-term success.",
      icon: "🚀",
      color: "from-emerald-500/20 to-green-500/20",
      borderColor: "group-hover:border-emerald-500/50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-24 bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="space-y-2">
            <div className="flex justify-center mb-4">
              <div className="h-1.5 w-12 bg-primary rounded-full"></div>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Our Process
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl mt-4">
              We follow a proven methodology to deliver exceptional results for
              every project.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative group"
              variants={cardVariants}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <Card
                className={cn(
                  "h-full transition-all duration-500 ease-in-out hover:scale-105",
                  "bg-gradient-to-br backdrop-blur-sm border-2",
                  "hover:shadow-[0_0_30px_rgba(0,0,0,0.1)]",
                  step.borderColor,
                  activeStep === index
                    ? "bg-gradient-to-br " + step.color
                    : "bg-card/80"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl overflow-hidden" />

                <CardHeader className="relative">
                  <div className="flex flex-col items-center">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 border border-primary/20 text-primary text-lg font-semibold mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {index + 1}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.content}
                  </p>

                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center text-primary text-sm font-medium">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {index < 3 && (
                <div className="absolute top-1/2 -right-4 hidden lg:flex items-center justify-center transform -translate-y-1/2 w-8 h-8 z-10">
                  <motion.div
                    className="w-12 h-0.5 bg-gradient-to-r from-primary/80 to-primary/20"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full transition-all duration-300 cursor-pointer hover:shadow-lg group">
            <span className="font-medium">Start your journey</span>
            <CheckCircle2 className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
