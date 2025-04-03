import ProductHero from "@/components/products/product-hero"
import ProductDetails from "@/components/products/product-details"
import ProductCTA from "@/components/products/product-cta"

export const metadata = {
  title: "Products | Wovera",
  description: "Explore Wovera's suite of exceptional SaaS products including Abal, Fidel, and WoveraFund.",
}

export default function ProductsPage() {
  return (
    <main className="flex flex-col items-center justify-between">
      <ProductHero />
      <ProductDetails />
      <ProductCTA />
    </main>
  )
}

