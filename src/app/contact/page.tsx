import ContactForm from "@/components/contact/contact-form"
import ContactHero from "@/components/contact/contact-hero"
import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Contact | Wovera",
  description: "Get in touch with Wovera for exceptional SaaS products and innovative tech solutions.",
  path: "/contact"
})

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <ContactHero />
      <ContactForm />
      
    </main>
  )
}

