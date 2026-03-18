import type { Metadata } from "next";
import PartnershipHero from "@/components/PartnershipHero";
import PartnerNetwork from "@/components/PartnerNetwork";
import OurPartners from "@/components/OurPartners";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Healthcare Practice Partnerships — EHR, Billing & More",
  description:
    "Connect with Blume Health's trusted partners for EHR, telehealth, insurance credentialing, and practice management. Build your practice with the right infrastructure.",
  alternates: {
    canonical: "https://blumehealthco.com/partnerships",
  },
  openGraph: {
    title: "Healthcare Practice Partnerships — EHR, Billing & More | Blume Health",
    description:
      "Connect with Blume Health's trusted partners for EHR, telehealth, insurance credentialing, and practice management. Build your practice with the right infrastructure.",
    url: "https://blumehealthco.com/partnerships",
    images: [
      {
        url: "/Partnerships-2.png",
        width: 1200,
        height: 630,
        alt: "Healthcare practice partnerships – Blume Health",
      },
    ],
  },
};

export default function PartnershipPage() {
  return (
    <>
      <PartnershipHero />
      <PartnerNetwork />
      <OurPartners />
      <CTASection />
    </>
  );
}
