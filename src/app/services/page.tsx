import ContactCall from "@/components/sections/contact-call"
import ProcessSection from "@/components/services/process-section"
import ServicesDetails from "@/components/services/services-details"
import ServicesHero from "@/components/services/services-hero"

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
      <div className="w-full pt-10">
        <ContactCall />
      </div>
    </main>
  );
}

