import { CompanyLogos } from "@/components/company-logos";
import BrandStory from "@/components/sections/brand-story";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Products from "@/components/sections/products";
import Services from "@/components/sections/services";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Services />
      <Separator className="max-w-[500px] min-h-0.25 bg-green-500" />
      <Products />
      <Separator className="max-w-[500px] min-h-0.25 bg-green-500" />
      <CompanyLogos />
      <Separator className="max-w-[500px] min-h-0.25 bg-green-500" />
      <BrandStory />

      <Contact />
    </main>
  );
}
