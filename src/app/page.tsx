import { CompanyLogos } from "@/components/company-logos";
import BrandStory from "@/components/sections/brand-story";
import ContactCall from "@/components/sections/contact-call";
import Hero from "@/components/sections/hero";
import Products from "@/components/sections/products";
import Services from "@/components/sections/services";
import { WaveSeparator } from "@/components/ui/wave-separator";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Services />
      <WaveSeparator color="#22c55e" />
      <Products />
      <WaveSeparator color="#22c55e" />
      <BrandStory />
      <CompanyLogos />
      <ContactCall />
      <WaveSeparator color="#22c55e" className="mt-5"/>
    </main>
  );
}
