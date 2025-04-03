import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Coins, CheckCircle, ArrowRight } from "lucide-react"

const WoveraFundProduct = () => {
  return (
    <section id="woverafund" className="w-full py-20 scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 reveal fade-right">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
              <Coins className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">WoveraFund</h2>
            <p className="text-xl text-muted-foreground">Crowdfunding Platform</p>
            <p className="text-muted-foreground">
              A powerful crowdfunding solution that connects innovators with backers. WoveraFund provides the tools
              needed to launch, manage, and grow successful fundraising campaigns.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                <span>Customizable campaign pages</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                <span>Secure payment processing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                <span>Backer management tools</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                <span>Analytics and marketing integrations</span>
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
                src="/placeholder.svg?height=600&width=800"
                alt="WoveraFund Dashboard"
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

export default WoveraFundProduct 