"use client"
import PricingHero from "@/components/PricingHero";
import PricingPlans from "@/components/PricingPlans";
import PricingFAQ from "@/components/PricingFAQ";
import CTASection from "@/components/CTASection";
import Image from "next/image";

export default function Page() {
  return (
    <>
    <PricingHero />
    <PricingPlans />
    <PricingFAQ />
    <CTASection />
    </>
  );
}
