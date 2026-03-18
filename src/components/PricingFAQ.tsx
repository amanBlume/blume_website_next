"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PricingFAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What's included in the standard channels?",
      answer: "Standard channels include major directories like Google My Business, Psychology Today, WebMD, Nextdoor, Apple Maps, and many others. These are the most important platforms where patients search for healthcare providers."
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades will take effect at your next billing cycle. We'll prorate any differences in pricing."
    },
    {
      question: "What are premium channels?",
      answer: "Premium channels are specialized or high-value directories that may have additional costs. With our plans, you get deep discounts on these premium listings to maximize your practice's visibility."
    },
    {
      question: "How do the 1:1 sessions work?",
      answer: "Our practice success managers are healthcare marketing experts who provide personalized guidance on optimizing your online presence, managing reviews, and growing your patient base through strategic digital marketing."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees! We believe in transparent pricing. The only cost is your monthly subscription, and we'll help you get started with a free consultation to ensure you choose the right plan."
    },
    {
      question: "What kind of support do you provide?",
      answer: "All plans include email support, comprehensive onboarding, and access to our knowledge base. Plus plan members get additional 1:1 sessions with our practice success managers for personalized guidance."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-coral-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-navy-900 pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="h-6 w-6 text-coral-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-coral-500 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="px-8 py-3 bg-coral-500 text-white rounded-full hover:bg-coral-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;