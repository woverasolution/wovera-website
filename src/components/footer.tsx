import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg"
              alt="Wovera Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="font-bold text-xl">Wovera</span>
          </Link>
          <p className="text-muted-foreground max-w-xs">
            Building exceptional, scalable SaaS products and innovative tech solutions that just work.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
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
              <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Products</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#abal" className="text-muted-foreground hover:text-primary transition-colors">
                Abal
              </Link>
            </li>
            <li>
              <Link href="#fidel" className="text-muted-foreground hover:text-primary transition-colors">
                Fidel
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-muted-foreground">
              <Mail size={16} />
              <span>contact@wovera.com</span>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Phone size={16} />
              <span>+251 (910) 428-013</span>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} />
              <span>Addis Ababa, Ethiopia</span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t">
        <p className="text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Wovera. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

