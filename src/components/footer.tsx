import { Facebook, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-6">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/wovera-icon.svg"
                  alt="Wovera Logo"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <span className="text-xl font-semibold">Wovera</span>
              </Link>
              <p className="text-muted-foreground max-w-xs">
                Building exceptional, scalable SaaS products and innovative tech solutions that just work.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mb-6">Products</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="https://www.abal.et" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    Abal
                  </Link>
                </li>
                <li>
                  <Link href="https://www.fidel.et" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    Fidel
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mb-6">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={16} />
                  <span>info@woverasolutions.com</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={16} />
                  <span>+251910428013</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <MapPin size={16} />
                  <span>Addis Ababa, Ethiopia</span>
                </li>
              </ul>
              <div className="flex space-x-4 mt-6">
                <Link href="https://www.linkedin.com/company/wovera-solutions" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </Link>
                <Link href="https://www.facebook.com/woverasolutions" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={20} />
                </Link>
                <Link href="https://t.me.woverasolutions" className="text-muted-foreground hover:text-primary transition-colors">
                  <Send size={20} />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-muted-foreground/20">
            <p className="text-center text-muted-foreground text-sm">
              © {new Date().getFullYear()} Wovera Solutions PLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

