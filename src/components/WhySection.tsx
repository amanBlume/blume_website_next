import React from 'react';
import { Users, Shield, Briefcase, Target } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Reach Client in Need',
    description: 'Our targeted strategies place your practice where people search for help — Google, social media, and directories — so you support more individuals at the right moment.',
    color: 'coral'
  },
  {
    icon: Shield,
    title: 'Build Trust Online',
    description: 'We enhance your web presence, manage reviews, and grow engagement—positioning your practice as a trusted mental health provider.',
    color: 'teal'
  },
  {
    icon: Briefcase,
    title: 'Stay Compliant, Stay Connected',
    description: 'HIPAA-compliant marketing ensures you engage clients safely, protecting privacy while maximizing outreach.',
    color: 'blue'
  },
  {
    icon: Target,
    title: 'Fits Every Practice',
    description: 'Whether you\'re solo or scaling, our flexible, tailored plans match your goals and resources at every stage.',
    color: 'purple'
  }
];

const WhySection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Why Blume Health
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

export default WhySection;