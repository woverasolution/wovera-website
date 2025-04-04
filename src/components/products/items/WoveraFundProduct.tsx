"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Coins, CheckCircle, ArrowRight, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const features = [
  {
    title: "Customizable campaign pages",
    description: "Create stunning campaign pages with our intuitive page builder and customizable templates.",
  },
  {
    title: "Secure payment processing",
    description: "Accept donations and payments securely with multiple payment gateway integrations.",
  },
  {
    title: "Backer management tools",
    description: "Manage and communicate with your backers effectively through our comprehensive tools.",
  },
  {
    title: "Analytics and marketing integrations",
    description: "Track campaign performance and integrate with popular marketing tools for better reach.",
  },
]

const WoveraFundProduct = () => {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null)

  const toggleFeature = (index: number) => {
    setExpandedFeature(expandedFeature === index ? null : index)
  }

  return (
    <section id="woverafund" className="w-full py-32 bg-primary/5">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="flex flex-col justify-center space-y-8 text-center lg:text-left reveal fade-right">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <motion.div 
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Coins className="h-7 w-7 text-primary" />
                </motion.div>
                <h2 className="text-4xl font-bold">WoveraFund</h2>
              </div>
              <p className="text-xl text-muted-foreground font-medium">Crowdfunding Platform</p>
              <p className="text-muted-foreground max-w-2xl mx-auto lg:mx-0 text-lg">
                A powerful crowdfunding solution that connects innovators with backers. WoveraFund provides the tools
                needed to launch, manage, and grow successful fundraising campaigns.
              </p>
              <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`group flex flex-col gap-2 p-4 rounded-xl cursor-pointer transition-colors ${
                      expandedFeature === index ? "bg-primary/10" : "hover:bg-primary/5"
                    }`}
                    onClick={() => toggleFeature(index)}
                    whileHover={{ x: 5 }}
                    animate={{ 
                      backgroundColor: expandedFeature === index ? "rgba(38, 176, 109, 0.1)" : "rgba(38, 176, 109, 0)" 
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <motion.div
                          animate={{ 
                            rotate: expandedFeature === index ? 90 : 0,
                            color: expandedFeature === index ? "rgb(38, 176, 109)" : "rgb(156, 163, 175)" 
                          }}
                        >
                          <ChevronRight className="h-5 w-5" />
                        </motion.div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold ${
                          expandedFeature === index ? "text-primary" : "text-foreground"
                        }`}>
                          {feature.title}
                        </h3>
                        <AnimatePresence>
                          {expandedFeature === index && (
                            <motion.p
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="text-sm text-muted-foreground leading-relaxed mt-2"
                            >
                              {feature.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button size="lg" className="gap-2 px-8 h-12 text-base">
                    Request a demo <ArrowRight className="h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </div>
            <motion.div 
              className="flex items-center justify-center reveal fade-left"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full max-w-2xl aspect-video overflow-hidden rounded-xl border shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="WoveraFund Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WoveraFundProduct 