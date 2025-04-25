import { Metadata } from "next";
import ProjectsHero from "@/components/projects/projects-hero";
import ProjectsGallery from "@/components/projects/projects-gallery";
import ContactCall from "@/components/sections/contact-call";

export const metadata: Metadata = {
  title: "Projects | Wovera",
  description:
    "Explore our portfolio of successful digital transformation projects across various industries in Ethiopia and beyond.",
};

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ProjectsHero />
      <ProjectsGallery />
      <div className="w-full pt-10">
        <ContactCall />
      </div>
    </main>
  );
}
