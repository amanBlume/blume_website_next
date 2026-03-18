import type { Metadata } from "next";
import PricingHero from "@/components/PricingHero";
import PricingPlans from "@/components/PricingPlans";
import PricingFAQ from "@/components/PricingFAQ";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pricing Plans for Private Practice Marketing",
  description:
    "Affordable plans for private practice clinicians. Get listed on medical directories, access practice growth tools, and connect with partners — starting with Blume Health.",
  alternates: {
    canonical: "https://blumehealthco.com/pricing",
  },
  openGraph: {
    title: "Pricing Plans for Private Practice Marketing | Blume Health",
    description:
      "Affordable plans for private practice clinicians. Get listed on medical directories, access practice growth tools, and connect with partners — starting with Blume Health.",
    url: "https://blumehealthco.com/pricing",
    images: [
      {
        url: "/Doctor-Telehealth-2-1024x683.png",
        width: 1024,
        height: 683,
        alt: "Pricing plans for private practice marketing – Blume Health",
      },
    ],
  },
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingPlans />
      <PricingFAQ />
      <CTASection />
    </>
  );
}
