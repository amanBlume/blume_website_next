import React from 'react';

const PricingHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-coral-50 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23FF6B6B%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%222%22/%3E%3Ccircle cx=%2227%22 cy=%227%22 r=%222%22/%3E%3Ccircle cx=%2247%22 cy=%227%22 r=%222%22/%3E%3Ccircle cx=%227%22 cy=%2227%22 r=%222%22/%3E%3Ccircle cx=%2227%22 cy=%2227%22 r=%222%22/%3E%3Ccircle cx=%2247%22 cy=%2227%22 r=%222%22/%3E%3Ccircle cx=%227%22 cy=%2247%22 r=%222%22/%3E%3Ccircle cx=%2227%22 cy=%2247%22 r=%222%22/%3E%3Ccircle cx=%2247%22 cy=%2247%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-6">
          Simple{' '}
          <span className="text-coral-500 relative">
            Pricing
            <div className="absolute bottom-2 left-0 right-0 h-3 bg-coral-200 opacity-30 rounded-full transform -skew-x-12"></div>
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
          Choose the perfect plan to grow your healthcare practice. No hidden fees, 
          cancel anytime, and get started with a free consultation.
        </p>
      </div>
    </section>
  );
};

export default PricingHero;