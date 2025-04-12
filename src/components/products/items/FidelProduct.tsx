"use client";

import { GraduationCap } from "lucide-react";
import ProductSection from "../ProductSection";

const features = [
  {
    title: "Student information management",
    description:
      "Centralize and manage student records, academic history, and personal information securely.",
  },
  {
    title: "Attendance and grade tracking",
    description:
      "Monitor student attendance and academic performance with automated tracking systems.",
  },
  {
    title: "Curriculum and timetable planning",
    description:
      "Create and manage course schedules, curriculum plans, and academic calendars efficiently.",
  },
  {
    title: "Parent-teacher communication portal",
    description:
      "Foster collaboration between parents and teachers with our integrated communication platform.",
  },
];

const FidelProduct = () => {
  return (
    <ProductSection
      id="fidel"
      title="Fidel"
      subtitle="School Management System"
      description="An all-in-one platform for educational institutions to manage students, staff, curriculum, and communications. Fidel simplifies administrative tasks so schools can focus on education."
      features={features}
      icon={GraduationCap}
      imageSrc="/images/fidel-mockup.png"
      imageAlt="Fidel Dashboard"
      hasBackground={false}
      exploreLink="https://abal.et"
    />
  );
};

export default FidelProduct;
