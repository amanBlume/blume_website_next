import React from 'react';
import { Handshake, Plug, LineChart, Rocket } from 'lucide-react';

const features = [
  {
    icon: Handshake,
    title: 'Curated by Practice Type',
    description: 'We don’t just connect you with vendors—we recommend solutions tailored to your license, size, and patient population. Whether you’re a solo therapist or a growing clinic, we align you with tools that actually fit.',
    color: 'coral'
  },
  {
    icon: Plug,
    title: 'Integration-First Partnerships',
    description: 'We prioritize tools that play well with each other. Our partners are selected not only for their features, but for how easily they integrate with the systems you already use—so your workflow stays smooth and scalable.',
    color: 'teal'
  },
  {
    icon: LineChart,
    title: 'Outcomes Over Offers',
    description: 'Unlike other platforms, we continuously monitor how providers benefit from each partner—based on usage, ROI, and satisfaction—so you’re not choosing blindly. Our insights help you invest only in services that deliver results.',
    color: 'blue'
  },
  {
    icon: Rocket,
    title: 'No-Friction Onboarding',
    description: 'Getting started is often the hardest part. That’s why we provide hands-on onboarding coordination between you and our partners—minimizing paperwork, guesswork, and setup delays.',
    color: 'purple'
  }
];

const PartnerNetwork: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            What our Partner Network offers
          </h2>
          <div className="w-24 h-1 bg-coral-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colorClasses = {
              coral: 'bg-coral-100 text-coral-600',
              teal: 'bg-teal-100 text-teal-600',
              blue: 'bg-blue-100 text-blue-600',
              purple: 'bg-purple-100 text-purple-600'
            };
            
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
              >
                <div className={`inline-flex p-4 rounded-full ${colorClasses[feature.color as keyof typeof colorClasses]} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-bold text-navy-900 mb-4 group-hover:text-coral-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnerNetwork;