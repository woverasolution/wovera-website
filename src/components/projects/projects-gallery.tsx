"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const ProjectsGallery = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const handleCarouselApi = (api: CarouselApi) => {
    setCarouselApi(api);
    if (api) {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());

      api.on("select", () => {
        setCurrentSlide(api.selectedScrollSnap());
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
      });
      api.on("resize", () => {
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
      });
    }
  };

  useEffect(() => {
    if (carouselApi) {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    }
  }, [carouselApi, projects]);

  return (
    <section id="projects" className="relative w-full py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />

      <div className="container mx-auto px-4 relative">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Featured Projects
              </h2>
              <div className="h-1 w-12 bg-primary rounded-full" />
            </div>
            <p className="max-w-lg text-muted-foreground text-lg">
              Explore our portfolio of successful projects that showcase our
              expertise in digital transformation and innovation.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex shrink-0 gap-3"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => carouselApi?.scrollPrev()}
              className="h-11 w-11 rounded-full border-primary/20 hover:bg-primary/5 hover:border-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!canScrollPrev}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => carouselApi?.scrollNext()}
              className="h-11 w-11 rounded-full border-primary/20 hover:bg-primary/5 hover:border-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!canScrollNext}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        <Carousel setApi={handleCarouselApi} className="w-full">
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem
                key={project.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/projects/${project.slug}`}>
                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-background/80 via-background/60 to-background/40 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
                      <div className="aspect-[16/9] overflow-hidden relative ">
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="object-cover transition-all duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="relative p-6">
                        <Badge
                          variant="secondary"
                          className="mb-3 bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {project.category}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-2 mb-4 group-hover:text-foreground/90 transition-colors">
                          {project.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge
                              key={tech.name}
                              variant="outline"
                              className="bg-background/50 backdrop-blur-sm flex items-center gap-2"
                            >
                              <Image
                                src={tech.logo}
                                alt={tech.name}
                                width={16}
                                height={16}
                                className="object-contain"
                              />
                              {tech.name}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge
                              variant="outline"
                              className="bg-background/50 backdrop-blur-sm"
                            >
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center text-sm text-primary font-medium">
                          View Case Study
                          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {(canScrollPrev || canScrollNext) && (
          <div className="mt-12 flex justify-center gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-primary rounded-full"
                    : "w-2.5 bg-primary/20 rounded-full hover:bg-primary/40"
                }`}
                onClick={() => carouselApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGallery;
