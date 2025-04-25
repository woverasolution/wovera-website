"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  Clock
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <article className="min-h-screen bg-gradient-to-b from-background via-background to-background/95">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <Link href="/projects">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-primary/20 hover:bg-primary/5 hover:border-primary/30"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                  </Button>
                </Link>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  {project.category}
                </Badge>
              </div>

              <div className="space-y-8">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                  {project.title}
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="h-5 w-5" />
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-5 w-5" />
                    <span>{project.duration}</span>
                  </div>
                  {/* <Button className="rounded-full gap-2 ml-auto">
                    View Live Project <ArrowUpRight className="h-4 w-4" />
                  </Button> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 border-t border-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-16"
            >
              {/* Project Images Carousel */}
              <div>
                <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-16">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <Image
                            src={image}
                            alt={`${project.title} - Image ${index + 1}`}
                            width={1200}
                            height={675}
                            className="object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-6">
                  Overview
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid gap-12 md:grid-cols-2">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight">
                    Challenges
                  </h2>
                  <ul className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                        <span className="text-muted-foreground">
                          {challenge}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight">
                    Solutions
                  </h2>
                  <ul className="space-y-4">
                    {project.solutions.map((solution, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                        <span className="text-muted-foreground">
                          {solution}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-8">
                  Key Results
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {project.results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="group relative p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100/50 dark:border-emerald-900/50 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors"
                    >
                      <div className="absolute -top-2 -left-2 bg-white rounded-full p-2 shadow-md shadow-emerald-500/20">
                        <BadgeCheck className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="text-foreground/90 font-medium leading-relaxed">
                        {result}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Technologies */}
              <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-background to-background border border-primary/20 p-6 backdrop-blur-sm sticky top-8">
                <h3 className="text-lg font-semibold mb-4">
                  Technologies Used
                </h3>
                <div className="grid gap-3">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-primary/10 hover:border-primary/30 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                        <Image
                          src={tech.logo}
                          alt={tech.name}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <span className="font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-background to-background border border-primary/20 p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-4">
                    Client Testimonial
                  </h3>
                  <blockquote className="space-y-3">
                    <p className="text-muted-foreground italic">
                      &quot;{project.testimonial.quote}&quot;
                    </p>
                    <footer className="pt-3 border-t border-primary/10">
                      <p className="font-medium">
                        {project.testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {project.testimonial.position}
                      </p>
                    </footer>
                  </blockquote>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ProjectDetail;
