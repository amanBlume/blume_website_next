"use client"
import ChannelsHero from "@/components/ChannelsHero";
import ChannelsVisibility from "@/components/ChannelsVisibility";
import ChannelsGrid from "@/components/ChannelsGrid";
import CTASection from "@/components/CTASection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <ChannelsHero />
    <ChannelsVisibility />
    <ChannelsGrid />
    <CTASection />
    </>
  );
}
