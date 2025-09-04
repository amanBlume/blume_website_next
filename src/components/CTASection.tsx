import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-coral-500 to-coral-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22white%22 fill-opacity=%221%22%3E%3Cpath d=%22M20 0v40M0 20h40%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
          Take a step towards growing your practice by getting started with Blume Health
        </h2>
        
        <button className="px-10 py-4 bg-white text-coral-600 rounded-full hover:bg-gray-50 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
          Schedule Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;