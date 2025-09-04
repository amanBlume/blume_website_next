import "./globals.css";
import type { Metadata } from "next";
import Header from "./Header";
import Footer from "./Footer";
import { ClerkProvider } from '@clerk/nextjs'
import FooterWrapper from "@/components/FooterWrapper";


export const metadata: Metadata = {
  title: "Blume Health",
  description: "Healthcare platform",
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
