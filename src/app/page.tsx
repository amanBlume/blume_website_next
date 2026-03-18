import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhySection from "@/components/WhySection";

export const metadata: Metadata = {
  title: "Blume Health | Private Practice Marketing & Online Growth Platform",
  description:
    "Blume Health helps private practice clinicians grow their online presence. Get listed on 40+ medical directories, access trusted partners, and win consistent patient referrals.",
  alternates: {
    canonical: "https://blumehealthco.com",
  },
  openGraph: {
    title: "Blume Health | Private Practice Marketing & Online Growth Platform",
    description:
      "Blume Health helps private practice clinicians grow their online presence. Get listed on 40+ medical directories, access trusted partners, and win consistent patient referrals.",
    url: "https://blumehealthco.com",
    images: [
      {
        url: "/Doctor-Telehealth-2-1024x683.png",
        width: 1024,
        height: 683,
        alt: "Blume Health – Private Practice Marketing Platform",
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Blume Health",
  url: "https://blumehealthco.com",
  logo: "https://blumehealthco.com/next.svg",
  description:
    "Blume Health helps private practice clinicians grow their online presence through medical directory listings and trusted partner connections.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@blumehealthco.com",
    contactType: "customer support",
  },
  sameAs: ["https://www.linkedin.com/company/blume-health"],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Blume Health",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  description:
    "Marketing and online presence platform for private practice clinicians. Get listed on 40+ medical directories and connect with trusted healthcare partners.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "0",
  },
  url: "https://blumehealthco.com",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Hero />
      <WhySection />
      <TestimonialsSection />
    </>
  );
}
