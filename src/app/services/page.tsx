import ServicesHero from "@/components/services/services-hero"
import ServicesDetails from "@/components/services/services-details"
import ServicesCTA from "@/components/services/services-cta"
import ProcessSection from "@/components/services/process-section"

export const metadata = {
  title: "Services | Wovera",
  description:
    "Discover Wovera's range of technology services including custom software development, B2B SaaS development, and AI workflow solutions.",
}

export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center justify-between">
      <ServicesHero />
      <ServicesDetails />
      <ProcessSection />
      <ServicesCTA />
    </main>
  )
}

