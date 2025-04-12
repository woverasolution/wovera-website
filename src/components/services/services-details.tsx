"use client";

import { cn } from "@/lib/utils";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
const services = [
  {
    iconSrc: "/images/code.png",
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to address your specific business challenges and opportunities. We build software that aligns perfectly with your workflows and objectives.",
    features: [
      { text: "Web & Mobile Applications" },
      { text: "Enterprise Software" },
      { text: "Integration Solutions" },
      { text: "Legacy System Modernization" },
    ],
    imageSrc: "/images/code-service.png",
    imageAlt: "Custom Software Development",
    colorName: "emerald",
    colorHex: "#10b981",
    bgClass: "bg-emerald-50 dark:bg-emerald-950/20",
    borderClass: "border-emerald-100/20",
    hoverTextClass:
      "group-hover:text-emerald-700 dark:group-hover:text-emerald-400",
    textClass: "text-emerald-900 dark:text-emerald-100",
  },
  {
    iconSrc: "/images/saas.png",
    title: "B2B SaaS Development",
    description:
      "End-to-end development of scalable, cloud-based software-as-a-service solutions for businesses. We help you build, launch, and scale your SaaS product from concept to market.",
    features: [
      { text: "Multi-tenant Architecture" },
      { text: "Subscription Management" },
      { text: "API Development & Integration" },
      { text: "Scalable Cloud Infrastructure" },
    ],
    imageSrc: "/images/saas-service.png",
    imageAlt: "B2B SaaS Development",
    colorName: "violet",
    colorHex: "#8b5cf6",
    bgClass: "bg-violet-50 dark:bg-violet-950/20",
    borderClass: "border-violet-100/20",
    hoverTextClass:
      "group-hover:text-violet-700 dark:group-hover:text-violet-400",
    textClass: "text-violet-900 dark:text-violet-100",
  },
  {
    iconSrc: "/images/ai-workflow.png",
    title: "AI Workflow Solutions",
    description:
      "We study your business processes and create customized AI workflows that help your business grow revenue with a lean model. Our AI solutions automate repetitive tasks, extract insights from data, and enhance decision-making.",
    features: [
      { text: "Business Process Analysis" },
      { text: "Custom AI Model Development" },
      { text: "Workflow Automation" },
      { text: "Data-Driven Revenue Growth" },
    ],
    imageSrc: "/images/ai-service.png",
    imageAlt: "AI Workflow Solutions",
    colorName: "amber",
    colorHex: "#f59e0b",
    bgClass: "bg-amber-50 dark:bg-amber-950/20",
    borderClass: "border-amber-100/20",
    hoverTextClass:
      "group-hover:text-amber-700 dark:group-hover:text-amber-400",
    textClass: "text-amber-900 dark:text-amber-100",
  },
  {
    iconSrc: "/images/consultancy.png",
    title: "Technology Consultancy",
    description:
      "Strategic guidance to help you make informed technology decisions and investments. Our consultancy services help you navigate the complex technology landscape and align your tech strategy with business goals.",
    features: [
      { text: "Digital Transformation" },
      { text: "Technology Stack Selection" },
      { text: "Process Optimization" },
      { text: "IT Strategy Development" },
    ],
    imageSrc: "/images/consultancy-service.png",
    imageAlt: "Technology Consultancy",
    colorName: "sky",
    colorHex: "#0ea5e9",
    bgClass: "bg-sky-50 dark:bg-sky-950/20",
    borderClass: "border-sky-100/20",
    hoverTextClass: "group-hover:text-sky-700 dark:group-hover:text-sky-400",
    textClass: "text-sky-900 dark:text-sky-100",
  },
];

const ServicesDetails = () => {
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
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <section id="services" className="w-full py-20 max-w-7xl mx-auto">
      <div className="container px-4 md:px-6">
        <div className="space-y-25">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="grid gap-4 lg:grid-cols-2 lg:gap-1 items-center"
            >
              <div
                className={`flex flex-col justify-center space-y-4 reveal ${
                  index % 2 === 0
                    ? "fade-right lg:order-first"
                    : "fade-left lg:order-last"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "flex  items-center justify-center rounded-md bg-primary/10 rounded-xl",
                      service.bgClass
                    )}
                  >
                    <Image
                      src={service.iconSrc}
                      alt={service.title}
                      width={200}
                      height={200}
                      className="p-3"
                    />
                  </div>
                  <div>
                    <h2 className={cn("text-2xl font-bold", service.textClass)}>
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="relative pt-4">
                  {/* Vertical Line */}
                  <div
                    className="absolute left-2.5 top-0 bottom-0 w-px"
                    style={{ backgroundColor: service.colorHex }}
                  />
                  {/* Feature Items */}
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="relative pl-13 mb-4">
                      {/* Horizontal Line */}
                      <div
                        className="absolute -top-2 left-0 w-[80%] h-px opacity-50"
                        style={{ backgroundColor: service.colorHex }}
                      />

                      {/* Checkmark & Text */}
                      <div className="flex items-center gap-2 relative">
                        <BadgeCheck
                          className={cn(
                            "w-5 h-5 absolute -left-6",
                            service.textClass
                          )}
                          style={{ color: service.colorHex }}
                        />
                        <span className="text-muted-foreground">
                          {feature.text}
                        </span>
                      </div>
                      {idx === service.features.length - 1 && (
                        <div
                          className="absolute -bottom-2 left-0 w-[80%] h-px opacity-50"
                          style={{ backgroundColor: service.colorHex }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* <div>
                  <Button className="gap-2">
                    Discuss your project <ArrowRight className="w-4 h-4" />
                  </Button>
                </div> */}
              </div>
              <div
                className={`flex items-center justify-center reveal ${
                  index % 2 === 0
                    ? "fade-left lg:order-last"
                    : "fade-right lg:order-first"
                }`}
              >
                <div
                  className={cn(
                    " w-full overflow-hidden rounded-md border p-2",
                    service.borderClass
                  )}
                >
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    width={450}
                    height={400}
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetails;
