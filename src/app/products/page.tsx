import AbalProduct from "@/components/products/items/AbalProduct"
import FidelProduct from "@/components/products/items/FidelProduct"
import WoveraFundProduct from "@/components/products/items/WoveraFundProduct"
import ProductHero from "@/components/products/product-hero"
import ContactCall from "@/components/sections/contact-call"
import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Products | Wovera",
  description: "Explore Wovera's suite of exceptional SaaS products including Abal, Fidel, and WoveraFund.",
  path: "/products"
})

export default function ProductsPage() {
  return (
    <main className="flex flex-col items-center justify-between">
      <ProductHero />

      <div className="w-full">
        <AbalProduct />
        <FidelProduct />
        <WoveraFundProduct />
      </div>
      <div className="w-full pt-10">
        <ContactCall />
      </div>
    </main>
  );
}

