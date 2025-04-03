import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dumbbell, CheckCircle, ArrowRight } from "lucide-react"

const AbalProduct = () => {
  return (
    <section id="abal" className="w-full py-20 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 reveal fade-right">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
              <Dumbbell className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Abal</h2>
            <p className="text-xl text-muted-foreground">Gym Management & Access Control System</p>
            <p className="text-muted-foreground">
              A comprehensive solution for gym owners to manage memberships, control access, and streamline
              operations. Abal helps fitness centers run more efficiently with less overhead.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                <span>Automated membership management</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                <span>Secure biometric access control</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                <span>Integrated payment processing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                <span>Attendance tracking and reporting</span>
              </div>
            </div>
            <div>
              <Button className="gap-1">
                Request a demo <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center reveal fade-left">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <Image
                src="/abal-home.png"
                alt="Abal Dashboard"
                width={600}
                height={400}
                className="rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AbalProduct 