import React from 'react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Book a Free Demo',
    description: 'Spend 20 minutes with us. We learn about your practice and show you exactly how Blume Health works for your specialty.',
    cta: null,
  },
  {
    number: '02',
    title: 'Pick Your Plan',
    description: 'Choose the plan that fits your goals — start with 6 directories or go wide with 20+. No hidden fees, cancel anytime.',
    cta: null,
  },
  {
    number: '03',
    title: 'Go Live & Get Found',
    description: 'We handle the listings. Your profile goes live across top directories like Psychology Today, WebMD, and Nextdoor. New patients start finding you.',
    cta: null,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            From first conversation to patients finding you — in three simple steps.
          </p>
          <div className="w-24 h-1 bg-coral-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[16.5%] right-[16.5%] h-0.5 bg-coral-100 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-coral-500 text-white flex items-center justify-center text-3xl font-bold shadow-lg mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <Link
            href="/schduleDemo"
            className="inline-block px-10 py-4 bg-coral-500 text-white rounded-full hover:bg-coral-600 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg"
          >
            Book Your Free Demo →
          </Link>
          <p className="text-sm text-gray-400 mt-3">Takes 2 minutes to schedule. No commitment.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
