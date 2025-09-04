"use client"
import PartnershipHero from "@/components/PartnershipHero";
import PartnerNetwork from "@/components/PartnerNetwork";
import OurPartners from "@/components/OurPartners";
import CTASection from "@/components/CTASection";
import Image from "next/image";

export default function Page() {
  return (
    <>
    <PartnershipHero />
    <PartnerNetwork />
    <OurPartners />
    <CTASection />
    </>
  );
}
