"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, LucideIcon } from "lucide-react";
import Image from "next/image";

interface ServiceFeature {
  text: string;
}

interface ServiceSectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: ServiceFeature[];
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

const ServiceSection = ({
  icon: Icon,
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  isReversed = false,
}: ServiceSectionProps) => {
  return (
    <div
      className={`grid gap-6 lg:grid-cols-2 lg:gap-12 items-center ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div
        className={`flex flex-col justify-center space-y-4 reveal ${
          isReversed ? "fade-left" : "fade-right"
        }`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-primary" />
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
        <div>
          <Button className="gap-1">
            Discuss your project <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div
        className={`flex items-center justify-center reveal ${
          isReversed ? "fade-right" : "fade-left"
        }`}
      >
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={400}
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
