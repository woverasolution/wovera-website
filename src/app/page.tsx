import Hero from "@/components/sections/hero"
import Products from "@/components/sections/products"
import Services from "@/components/sections/services"
import BrandStory from "@/components/sections/brand-story"
import Contact from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <Products />
      <Services />
      <BrandStory />
      <Contact />
    </main>
  )
}

