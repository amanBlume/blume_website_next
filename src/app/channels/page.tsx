import type { Metadata } from "next";
import ChannelsHero from "@/components/ChannelsHero";
import ChannelsVisibility from "@/components/ChannelsVisibility";
import ChannelsGrid from "@/components/ChannelsGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Medical Directory Listings for Private Practices",
  description:
    "Get your practice listed on 40+ medical directories including Psychology Today, WebMD, RateMDs, and Nextdoor. Blume Health makes multi-channel listing simple for clinicians.",
  alternates: {
    canonical: "https://blumehealthco.com/channels",
  },
  openGraph: {
    title: "Medical Directory Listings for Private Practices | Blume Health",
    description:
      "Get your practice listed on 40+ medical directories including Psychology Today, WebMD, RateMDs, and Nextdoor. Blume Health makes multi-channel listing simple for clinicians.",
    url: "https://blumehealthco.com/channels",
    images: [
      {
        url: "/Doctor-Telehealth-2-1024x683.png",
        width: 1024,
        height: 683,
        alt: "Medical directory listings for private practices – Blume Health",
      },
    ],
  },
};

export default function ChannelsPage() {
  return (
    <>
      <ChannelsHero />
      <ChannelsVisibility />
      <ChannelsGrid />
      <CTASection />
    </>
  );
}
