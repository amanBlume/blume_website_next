"use client"
import Hero from "@/components/Hero";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhySection from "@/components/WhySection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <WhySection />
      <TestimonialsSection />
    </>
  );
}
