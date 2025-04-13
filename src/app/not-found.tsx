import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] w-full -mt-20 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 -z-10" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.08) 0%, rgba(99, 102, 241, 0.02) 50%, transparent 100%)",
          backgroundSize: "100% 100%",
        }}
      />

      <div className="container px-4 flex flex-col items-center">
        {/* 404 text with gradient */}
    

        {/* Image */}
        <div className="mt-10 mb-6">
          {/* <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-purple-400/10 rounded-full blur-xl opacity-70 -z-10 animate-pulse" /> */}
          <Image
            src="/images/lion-404.png"
            alt="404"
            width={400}
            height={400}
            className=""
          />
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Looks like you&apos;re lost.
        </h2>
        <p className="text-muted-foreground max-w-md text-center mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved
          to another URL.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "lg",
                className: "rounded-full px-8",
              }),
              "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary border-0 transition-all duration-300"
            )}
          >
            <div className="flex items-center gap-2">
              Go Home{" "}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
                className: "rounded-full px-8",
              }),
              "backdrop-blur-sm border-primary/20 hover:bg-primary/5"
            )}
          >
            <div className="flex items-center gap-2">Contact Support</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
