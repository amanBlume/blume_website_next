"use client";

import React, { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isSignedIn, isLoaded } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Don't show header on dashboard routes when user is authenticated
  const isDashboardRoute = pathname.startsWith('/dashboard');
  const shouldHideHeader = isDashboardRoute && isSignedIn;

  // Don't render anything while loading or if should be hidden
  if (!isLoaded || shouldHideHeader) {
    return null;
  }

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <Heart className="h-8 w-8 text-coral-500" fill="currentColor" /> */}
            <span className="text-2xl font-bold text-coral-500">Blume Health</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-coral-500 font-medium transition-colors">
              Home
            </Link>
            <Link href="/channels" className="text-gray-700 hover:text-coral-500 font-medium transition-colors">
              Channels
            </Link>
            <Link href="/partnership" className="text-gray-700 hover:text-coral-500 font-medium transition-colors">
              Partnerships
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-coral-500 font-medium transition-colors">
              Pricing
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isSignedIn ? (
              <button
                className="px-6 py-2 bg-coral-500 text-white rounded-full hover:bg-coral-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                onClick={() => router.push("/dashboard")}
              >
                Go to Dashboard
              </button>
            ) : (
              <>
                <button
                  className="px-6 py-2 text-coral-600 border border-coral-600 rounded-full hover:bg-coral-50 transition-all duration-300 font-medium"
                  onClick={() => router.push("/auth")}
                >
                  Get Started
                </button>
                <button className="px-6 py-2 bg-coral-500 text-white rounded-full hover:bg-coral-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                 onClick={() => router.push("/schduleDemo")}
                 >
                  Schedule Demo
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-coral-500 font-medium transition-colors">
                Home
              </Link>
              <Link href="/channels" className="text-gray-700 hover:text-coral-500 font-medium transition-colors">
                Channels
              </Link>
              <Link href="/partnership" className="text-gray-700 hover:text-coral-500 font-medium transition-colors">
                Partnerships
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-coral-500 font-medium transition-colors">
                Pricing
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                {isSignedIn ? (
                  <button
                    className="px-6 py-3 bg-coral-500 text-white rounded-full hover:bg-coral-600 transition-all duration-300 font-medium shadow-lg"
                    onClick={() => router.push("/dashboard")}
                  >
                    Go to Dashboard
                  </button>
                ) : (
                  <>
                    <button
                      className="px-6 py-3 text-coral-600 border border-coral-600 rounded-full hover:bg-coral-50 transition-all duration-300 font-medium"
                      onClick={() => router.push("/auth")}
                    >
                      Get Started
                    </button>
                    <button className="px-6 py-3 bg-coral-500 text-white rounded-full hover:bg-coral-600 transition-all duration-300 font-medium shadow-lg">
                      Schedule Demo
                    </button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;