import { Button } from "@/components/ui/button";
import { Mail, MoveRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WaveSeparator } from "../ui/wave-separator";

const ContactCall = () => {
  return (
    <div className="w-full">
      <div className="container px-4 mx-auto md:max-w-6xl">
        <div className="relative overflow-visible border-2 border-green-100 rounded-3xl bg-gradient-to-br from-yellow-50/80 via-green-100/20 to-green-100">
          <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-6 gap-4">
            {/* Content Section */}
            <div className="flex-1 z-10 max-w-xl pl-2 pt-4 md:pt-0 md:pl-12 ">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">
                Get in touch
              </h2>
              <WaveSeparator color="#22c55e" className="my-2 max-w-[250px]" />
              <p className="text-muted-foreground text-sm md:text-base mb-4">
                Have a project in mind or want to learn more about our products?
                We&apos;d love to hear from you.
              </p>

              <div className="space-y-2 mb-4">
                <a
                  href="mailto:info@woverasolutions.com"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors group"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  info@woverasolutions.com
                </a>
                <a
                  href="tel:+251910428013"
                  className="flex items-center gap-2 text-sm hover:text-primary transition-colors group"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  +251 910 42 80 13
                </a>
              </div>

              <Button
                asChild
                size="default"
                className="relative font-medium bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-2.5 group"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <span className="relative z-10">Contact Us</span>
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                    <MoveRight className="h-4 w-4" />
                  </span>
                  <div className="absolute inset-0 rounded-full">
                    <div className="absolute inset-0 rounded-full animate-ping bg-primary/25" />
                  </div>
                  <div className="absolute -inset-1 rounded-full border border-primary/50 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                </Link>
              </Button>
            </div>

            {/* Image Section */}
            <div className="relative flex-1 min-h-[200px] md:min-h-[280px] w-full">
              <div className="absolute right-0 bottom-2 md:-right-6 md:-top-20 w-[260px] md:w-[400px]">
                <Image
                  src="/images/lion.png"
                  alt="Support Lion"
                  width={400}
                  height={400}
                  className="object-contain transform hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCall;
