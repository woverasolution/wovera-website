import ContactForm from "@/components/contact/contact-form"
import ContactHero from "@/components/contact/contact-hero"

export const metadata = {
  title: "Contact | Wovera",
  description: "Get in touch with Wovera for exceptional SaaS products and innovative tech solutions.",
}

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <ContactHero />
      <ContactForm />
      
    </main>
  )
}

