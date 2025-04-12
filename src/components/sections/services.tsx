"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Services = () => {
  const commonCardStyles =
    "group backdrop-blur-sm rounded-xs h-auto p-8 flex justify-between flex-col min-h-[280px] relative overflow-hidden transition-all duration-300 hover:scale-[1.02] border-2 border-transparent";

  const services = [
    {
      id: "custom-software",
      title: "Custom Software Development",
      description:
        "We provide bespoke software development services to meet your unique business needs, ensuring high quality and efficiency.",
      icon: "/images/code.png",
      bgClass: "bg-emerald-50 dark:bg-emerald-950/20",
      borderClass: "hover:border-emerald-300/50",
      textClass: "text-emerald-900 dark:text-emerald-100",
      hoverTextClass:
        "group-hover:text-emerald-700 dark:group-hover:text-emerald-400",
      bgPattern: "bg-[radial-gradient(#10b981_1px,transparent_1px)]",
      gradientFrom: "from-emerald-200 to-emerald-50/50",
      cols: "lg:col-span-1",
      borderGradient:
        "before:bg-gradient-to-r before:from-emerald-300 before:via-emerald-500 before:to-emerald-300",
      colorName: "emerald",
    },
    {
      id: "saas-development",
      title: "B2B SaaS",
      description:
        "We offer robust B2B SaaS solutions that drive efficiency and growth for your business, tailored to your specific industry needs.",
      icon: "/images/saas.png",
      bgClass: "bg-violet-50 dark:bg-violet-950/20",
      borderClass: "hover:border-violet-300/50",
      textClass: "text-violet-900 dark:text-violet-100",
      hoverTextClass:
        "group-hover:text-violet-700 dark:group-hover:text-violet-400",
      bgPattern: "bg-[radial-gradient(#8b5cf6_1px,transparent_1px)]",
      gradientFrom: "from-violet-200 to-violet-50/50",
      cols: "lg:col-span-2",
      borderGradient:
        "before:bg-gradient-to-r before:from-violet-300 before:via-violet-500 before:to-violet-300",
      colorName: "violet",
    },
    {
      id: "tech-consultancy",
      title: "Technology Consultancy",
      description:
        "Our consultancy services help you navigate the complex technology landscape, providing strategic insights and solutions.",
      icon: "/images/consultancy.png",
      bgClass: "bg-sky-50 dark:bg-sky-950/20",
      borderClass: "hover:border-sky-300/50",
      textClass: "text-sky-900 dark:text-sky-100",
      hoverTextClass: "group-hover:text-sky-700 dark:group-hover:text-sky-400",
      bgPattern: "bg-[radial-gradient(#0ea5e9_1px,transparent_1px)]",
      gradientFrom: "from-sky-200 to-sky-50/50",
      cols: "lg:col-span-2",
      borderGradient:
        "before:bg-gradient-to-r before:from-sky-300 before:via-sky-500 before:to-sky-300",
      colorName: "sky",
    },
    {
      id: "ai-workflow",
      title: "AI Workflow Solutions",
      description:
        "Customized AI workflows that study your business processes and help grow revenue with a lean model.",
      icon: "/images/ai-workflow.png",
      bgClass: "bg-amber-50 dark:bg-amber-950/20",
      borderClass: "hover:border-amber-300/50",
      textClass: "text-amber-900 dark:text-amber-100",
      hoverTextClass:
        "group-hover:text-amber-700 dark:group-hover:text-amber-400",
      bgPattern: "bg-[radial-gradient(#f59e0b_1px,transparent_1px)]",
      gradientFrom: "from-amber-200 to-amber-50/50",
      cols: "lg:col-span-1",
      borderGradient:
        "before:bg-gradient-to-r before:from-amber-300 before:via-amber-500 before:to-amber-300",
      colorName: "amber",
    },
  ];

  return (
    <div className="w-full py-20 lg:py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-25 dark:opacity-[0.1]" />
      <div className="container mx-auto relative">
        <div className="flex flex-col items-center gap-10 max-w-5xl mx-auto">
          <div className="flex gap-4 flex-col items-center text-center">
            <div>
              <Badge className="rounded-full bg-primary/10 text-primary px-4 py-1 text-sm">
                Services
              </Badge>
            </div>
            <div className="flex gap-2 flex-col items-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What We Do
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground">
                We offer a range of services to help businesses leverage
                technology for growth and innovation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 w-full">
            {services.map((service) => (
              <Link
                href={`/services#${service.id}`}
                key={service.id}
                className={`
                  ${commonCardStyles} 
                  ${service.cols} 
                  ${service.borderClass}
                  before:absolute before:inset-0 before:rounded-xs before:p-[3px] before:content-[''] 
                  before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-700
                  before:-z-10 overflow-visible relative hover:z-10
                  ${service.borderGradient} before:blur-sm
                  after:absolute after:inset-[2px] after:rounded-xs after:content-[''] after:bg-white after:dark:bg-gray-950
                  after:-z-[5]
                `}
                style={{
                  background: `linear-gradient(to bottom right, var(--${service.colorName}-100), var(--${service.colorName}-50), transparent)`,
                }}
              >
                <div
                  className={`absolute inset-0 ${service.bgPattern} [background-size:16px_16px] opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradientFrom} opacity-40 group-hover:opacity-70 transition-opacity duration-500`}
                />
                <div className="flex justify-between items-start">
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    width={90}
                    height={90}
                  />
                  <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-12">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex flex-col gap-1 relative z-10">
                  <h3
                    className={`text-xl font-bold tracking-tight ${service.textClass} ${service.hoverTextClass} transition-colors duration-300`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`${service.textClass.replace(
                      "text-",
                      "text-"
                    )}70 dark:${service.textClass.replace(
                      "dark:text-",
                      "dark:text-"
                    )}90 text-sm`}
                  >
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
