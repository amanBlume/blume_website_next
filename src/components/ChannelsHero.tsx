import { docChannels1, docChannels2 } from '../../public/index';
import React from 'react';
import Image from 'next/image'

// import { docChannels1 , docChannels2 } from '../assets';
const ChannelsHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-coral-50 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23FF6B6B%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%222%22/%3E%3Ccircle cx=%2227%22 cy=%227%22 r=%222%22/%3E%3Ccircle cx=%2247%22 cy=%227%22 r=%222%22/%3E%3Ccircle cx=%227%22 cy=%2227%22 r=%222%22/%3E%3Ccircle cx=%2227%22 cy=%2227%22 r=%222%22/%3E%3Ccircle cx=%2247%22 cy=%2227%22 r=%222%22/%3E%3Ccircle cx=%227%22 cy=%2247%22 r=%222%22/%3E%3Ccircle cx=%2227%22 cy=%2247%22 r=%222%22/%3E%3Ccircle cx=%2247%22 cy=%2247%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-6">
              One stop{' '}
              <span className="text-coral-500 relative">
                channel listing platform
                <div className="absolute bottom-2 left-0 right-0 h-3 bg-coral-200 opacity-30 rounded-full transform -skew-x-12"></div>
              </span>{' '}
              for medical providers
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Get your practice listed on various medical directories to help you reach more patients. 
              Blume Health offers a one stop solution to list your practice on 40+ online directories.
            </p>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image 
                src={docChannels2}
                alt="Healthcare professional using mobile device"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
            {/* Background decorative elements */}
            <div className="absolute top-8 -left-8 w-24 h-24 bg-teal-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-coral-200 rounded-full opacity-40 animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChannelsHero;