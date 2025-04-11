import Hero from "@/components/sections/hero"
import Products from "@/components/sections/products"
import BrandStory from "@/components/sections/brand-story"
import Contact from "@/components/sections/contact"
import ServicesSection from "@/components/services/services-section"  
import { CompanyLogos } from "@/components/company-logos"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <ServicesSection />
      <Products />
      <BrandStory />
      <CompanyLogos />
      <Contact />
    </main>
  )
}

