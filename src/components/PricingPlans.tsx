"use client";

import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';

const PricingPlans: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'semi-annually' | 'annually'>('monthly');

  const plans = {
    basic: {
      name: 'Basic Plan',
      monthly: 29,
      quarterly: 27,
      'semi-annually': 25,
      annually: 24,
      features: [
        'Access to any 6 standard channels',
        'One update per month across channels',
        'Deep discounts on premium channels',
        'One 1:1 sessions with Blume Health practice success manager',
        'Referral benefits to our partners to help build your practice'
      ],
      popular: false
    },
    plus: {
      name: 'Plus Plan',
      monthly: 75,
      quarterly: 67,
      'semi-annually': 51,
      annually: 45,
      features: [
        'Access to any 20 standard channels',
        'Three updates per month across channels',
        'Deep discounts on premium channels',
        'Two 1:1 sessions with Blume Health practice success manager',
        'Referral benefits to our partners to help build your practice'
      ],
      popular: true
    }
  };

  const billingOptions = [
    { key: 'monthly' as const, label: 'Monthly', discount: null },
    { key: 'quarterly' as const, label: 'Quarterly', discount: null },
    { key: 'semi-annually' as const, label: 'Semi-Annually', discount:null },
    { key: 'annually' as const, label: 'Annually', discount: null }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-8">
            Pricing
          </h2>
          
          {/* Billing Toggle */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {billingOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => setBillingCycle(option.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  billingCycle === option.key
                    ? 'bg-coral-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option.label}
                {option.discount && (
                  <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs px-2 py-1 rounded-full">
                    {option.discount}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{plans.basic.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-coral-500">
                  ${plans.basic[billingCycle]}
                </span>
                <span className="text-gray-600 ml-2">/Month</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">*No hidden or extra charges</p>
              <button className="w-full px-8 py-4 bg-coral-500 text-white rounded-full hover:bg-coral-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                SCHEDULE NOW
              </button>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-xl font-bold text-navy-900 mb-6">What will you get?</h4>
              <ul className="space-y-4">
                {plans.basic.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Plus Plan */}
          <div className="bg-white border-2 border-coral-300 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative">
            {plans.plus.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-coral-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-current" />
                  <span>Most Popular</span>
                </div>
              </div>
            )}
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{plans.plus.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-coral-500">
                  ${plans.plus[billingCycle]}
                </span>
                <span className="text-gray-600 ml-2">/Month</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">*No hidden or extra charges</p>
              <button className="w-full px-8 py-4 bg-coral-500 text-white rounded-full hover:bg-coral-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                SCHEDULE NOW
              </button>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-xl font-bold text-navy-900 mb-6">What will you get?</h4>
              <ul className="space-y-4">
                {plans.plus.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className={`${
                      feature.includes('20 standard') || feature.includes('Three updates') || feature.includes('Two 1:1')
                        ? 'text-coral-600 font-medium'
                        : 'text-gray-700'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            All plans include our comprehensive onboarding process, dedicated support, 
            and access to our network of healthcare marketing partners. Start with a 
            free consultation to determine the best plan for your practice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 text-coral-600 border-2 border-coral-600 rounded-full hover:bg-coral-50 transition-all duration-300 font-semibold">
              Schedule Free Consultation
            </button>
            {/* <button className="px-8 py-3 text-gray-600 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-300 font-semibold">
              Compare All Features
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;