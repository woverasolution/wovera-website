"use client";

import { Bot, Code, Lightbulb, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  return (
    <div className="w-full py-20 lg:py-20 relative overflow-hidden">
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
              <h2 className="text-3xl md:text-5xl tracking-tighter font-regular">
                What We Do
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground">
                We offer a range of services to help businesses leverage
                technology for growth and innovation.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* Custom Software Development */}
            <div className="group bg-emerald-50 dark:bg-emerald-950/20 backdrop-blur-sm rounded-3xl h-auto lg:col-span-2 p-8 flex justify-between flex-col min-h-[280px] relative overflow-hidden border border-emerald-100/20">
              <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent transition-opacity duration-500" />
              <Code className="w-10 h-10 stroke-[2.5] text-emerald-600 dark:text-emerald-500 relative z-10 transition-transform duration-500" />
              <div className="flex flex-col gap-3 relative z-10">
                <h3 className="text-xl font-medium tracking-tight text-emerald-900 dark:text-emerald-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  Custom Software Development
                </h3>
                <p className="text-emerald-700/90 dark:text-emerald-300/90 text-sm">
                  Tailored software solutions designed to address your specific
                  business challenges and opportunities.
                </p>
              </div>
            </div>

            {/* B2B SaaS Development */}
            <div className="group bg-violet-50 dark:bg-violet-950/20 backdrop-blur-sm rounded-3xl h-auto p-8 flex justify-between flex-col min-h-[280px] relative overflow-hidden border border-violet-100/20">
              <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent transition-opacity duration-500" />
              <Server className="w-10 h-10 stroke-[2.5] text-violet-600 dark:text-violet-500 relative z-10 transition-transform duration-500" />
              <div className="flex flex-col gap-3 relative z-10">
                <h3 className="text-xl font-medium tracking-tight text-violet-900 dark:text-violet-100 group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors duration-300">
                  B2B SaaS Development
                </h3>
                <p className="text-violet-700/90 dark:text-violet-300/90 text-sm">
                  End-to-end development of scalable, cloud-based
                  software-as-a-service solutions for businesses.
                </p>
              </div>
            </div>

            {/* AI Workflow Solutions */}
            <div className="group bg-amber-50 dark:bg-amber-950/20 backdrop-blur-sm rounded-3xl h-auto p-8 flex justify-between flex-col min-h-[280px] relative overflow-hidden border border-amber-100/20">
              <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent transition-opacity duration-500" />
              <Bot className="w-10 h-10 stroke-[2.5] text-amber-600 dark:text-amber-500 relative z-10 transition-transform duration-500" />
              <div className="flex flex-col gap-3 relative z-10">
                <h3 className="text-xl font-medium tracking-tight text-amber-900 dark:text-amber-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors duration-300">
                  AI Workflow Solutions
                </h3>
                <p className="text-amber-700/90 dark:text-amber-300/90 text-sm">
                  Customized AI workflows that study your business processes and
                  help grow revenue with a lean model.
                </p>
              </div>
            </div>

            {/* Technology Consultancy */}
            <div className="group bg-sky-50 dark:bg-sky-950/20 backdrop-blur-sm rounded-3xl h-auto lg:col-span-2 p-8 flex justify-between flex-col min-h-[280px] relative overflow-hidden border border-sky-100/20">
              <div className="absolute inset-0 bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:16px_16px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-sky-500/5 via-transparent to-transparent transition-opacity duration-500" />
              <Lightbulb className="w-10 h-10 stroke-[2.5] text-sky-600 dark:text-sky-500 relative z-10 transition-transform duration-500" />
              <div className="flex flex-col gap-3 relative z-10">
                <h3 className="text-xl font-medium tracking-tight text-sky-900 dark:text-sky-100 group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors duration-300">
                  Technology Consultancy
                </h3>
                <p className="text-sky-700/90 dark:text-sky-300/90 text-sm">
                  Strategic guidance to help you make informed technology
                  decisions and investments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
