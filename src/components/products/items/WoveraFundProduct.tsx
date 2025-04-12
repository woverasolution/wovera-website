"use client";

import { Coins } from "lucide-react";
import ProductSection from "../ProductSection";

const features = [
  {
    title: "Customizable campaign pages",
    description:
      "Create stunning campaign pages with our intuitive page builder and customizable templates.",
  },
  {
    title: "Secure payment processing",
    description:
      "Accept donations and payments securely with multiple payment gateway integrations.",
  },
  {
    title: "Backer management tools",
    description:
      "Manage and communicate with your backers effectively through our comprehensive tools.",
  },
  {
    title: "Analytics and marketing integrations",
    description:
      "Track campaign performance and integrate with popular marketing tools for better reach.",
  },
];

const WoveraFundProduct = () => {
  return (
    <ProductSection
      id="woverafund"
      title="WoveraFund"
      subtitle="Crowdfunding Platform"
      description="A powerful crowdfunding solution that connects innovators with backers. WoveraFund provides the tools needed to launch, manage, and grow successful fundraising campaigns."
      features={features}
      icon={Coins}
      imageSrc="/images/wovera-mockup.png"
      imageAlt="WoveraFund Dashboard"
      hasBackground={true}
    />
  );
};

export default WoveraFundProduct;
