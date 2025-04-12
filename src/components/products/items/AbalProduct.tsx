"use client";

import { Dumbbell } from "lucide-react";
import ProductSection from "../ProductSection";

const features = [
  {
    title: "Automated membership management",
    description:
      "Streamline member registration, renewals, and billing with our automated system.",
  },
  {
    title: "Secure biometric access control",
    description:
      "Control gym access with state-of-the-art biometric authentication.",
  },
  {
    title: "Integrated payment processing",
    description:
      "Handle payments seamlessly with our secure payment gateway integration.",
  },
  {
    title: "Attendance tracking and reporting",
    description:
      "Generate detailed reports on member attendance and facility usage patterns.",
  },
];

const AbalProduct = () => {
  return (
    <ProductSection
      id="abal"
      title="Abal"
      subtitle="Gym Management & Access Control System"
      description="A comprehensive solution for gym owners to manage memberships, control access, and streamline operations. Abal helps fitness centers run more efficiently with less overhead."
      features={features}
      icon={Dumbbell}
      imageSrc="/abal-home.png"
      imageAlt="Abal Dashboard"
      hasBackground={true}
      exploreLink="https://abal.et"
    />
  );
};

export default AbalProduct;
