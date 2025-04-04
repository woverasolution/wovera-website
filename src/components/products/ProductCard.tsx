import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  imageSrc: string
  imageAlt: string
  className?: string
}

const ProductCard = ({
  title,
  description,
  icon,
  features,
  imageSrc,
  imageAlt,
  className,
}: ProductCardProps) => {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-xl bg-background p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
            {icon}
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <p className="text-muted-foreground">{description}</p>

        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4">
          <Link href={`/products#${title.toLowerCase()}`}>
            <Button className="w-full gap-2 transition-colors">
              Learn more <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard 