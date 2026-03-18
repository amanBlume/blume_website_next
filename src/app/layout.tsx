import "./globals.css";
import type { Metadata } from "next";
import Header from "./Header";
import Footer from "./Footer";
import { ClerkProvider } from '@clerk/nextjs'
import FooterWrapper from "@/components/FooterWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://blumehealthco.com"),
  title: {
    default: "Blume Health | Private Practice Marketing & Online Growth Platform",
    template: "%s | Blume Health",
  },
  description:
    "Blume Health helps private practice clinicians grow their online presence. Get listed on 40+ medical directories, access trusted partners, and win consistent patient referrals.",
  keywords: [
    "private practice marketing",
    "healthcare marketing",
    "medical directory listing",
    "online presence for clinicians",
    "patient referrals",
    "practice growth",
  ],
  authors: [{ name: "Blume Health", url: "https://blumehealthco.com" }],
  creator: "Blume Health",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blumehealthco.com",
    siteName: "Blume Health",
    title: "Blume Health | Private Practice Marketing & Online Growth Platform",
    description:
      "Blume Health helps private practice clinicians grow their online presence. Get listed on 40+ medical directories, access trusted partners, and win consistent patient referrals.",
    images: [
      {
        url: "/Doctor-Telehealth-2-1024x683.png",
        width: 1024,
        height: 683,
        alt: "Blume Health – Private Practice Marketing Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blume Health | Private Practice Marketing & Online Growth Platform",
    description:
      "Blume Health helps private practice clinicians grow their online presence. Get listed on 40+ medical directories, access trusted partners, and win consistent patient referrals.",
    images: ["/Doctor-Telehealth-2-1024x683.png"],
    creator: "@blumehealth",
  },
  alternates: {
    canonical: "https://blumehealthco.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!clerkPubKey) {
    throw new Error("Missing Publishable Key");
  }

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />
          {children}
          <FooterWrapper />
        </body>
      </html>
    </ClerkProvider>
  );
}
