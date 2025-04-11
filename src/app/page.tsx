import BrandStory from "@/components/sections/brand-story"
import Contact from "@/components/sections/contact"
import Hero from "@/components/sections/hero"
import Products from "@/components/sections/products"
import Services from "@/components/sections/services"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />

      <Products />
      <Separator className="w-[300px]" />
      <Services />
      <BrandStory />

      {/* <CompanyLogos /> */}
      <Contact />
    </main>
  );
}

