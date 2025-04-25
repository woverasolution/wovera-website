"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const ProjectsHero = () => {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/85 to-background/80">
      {/* World Map Background */}
      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/world-map.png"
          alt="World Map"
          fill
          className="object-cover mix-blend-luminosity"
          priority
        />
      </div>

      {/* Grid and Glow Effects */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute left-0 right-0 top-0 m-auto h-[500px] w-[500px] rounded-full bg-primary/20 blur-[128px] opacity-30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-4"
          >
            <div className="absolute -left-12 -top-12 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
            <span className="relative inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Our Portfolio
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative space-y-4"
          >
            <h1 className="bg-gradient-to-br from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
              Transforming Ideas into
              <br />
              Digital Excellence
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary/60 via-primary to-primary/60 mx-auto rounded-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed"
          >
            Discover how we&apos;ve helped leading organizations across Ethiopia
            transform their digital presence and achieve remarkable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="#projects">
              <Button
                size="lg"
                className="group h-11 px-6 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="h-11 px-6 rounded-full border-primary/20 hover:bg-primary/5"
              >
                Start Your Project
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 animate-bounce"
          >
            <Link href="#projects">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-12 w-12 hover:bg-primary/5"
              >
                <ArrowDown className="h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 h-16 w-px bg-gradient-to-b from-primary/20 to-transparent transform -translate-x-1/2" />
    </section>
  );
};

export default ProjectsHero;
