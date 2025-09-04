import { docChannels1 } from '../../public/index';
import React from 'react';
import Image from 'next/image'

const ChannelsVisibility: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src={docChannels1}
                alt="Healthcare professional working on laptop"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
            {/* Background decorative elements */}
            <div className="absolute top-8 -right-8 w-24 h-24 bg-teal-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-coral-200 rounded-full opacity-40 animate-pulse delay-300"></div>
          </div>
          
          {/* Right Column - Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-6">
              Make your practice{' '}
              <span className="text-coral-500 relative">
                visible everywhere
                <div className="absolute bottom-2 left-0 right-0 h-3 bg-coral-200 opacity-30 rounded-full transform -skew-x-12"></div>
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              These medical directories, such as Psychology Today, WebMD, Therapist.com, RateMDs, 
              Nextdoor and others, will advertise your practice to the world and expand your online 
              presence, improve your practice's SEO and bring in new customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChannelsVisibility;