"use client";

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Denise Smith, PMHNP',
    location: 'Texas',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Blume Health transformed my practice\'s online presence, attracting more clients than I ever imagined possible.',
    rating: 5
  },
  {
    name: 'Sarah Johnson, LCSW',
    location: 'New York',
    image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'The platform is intuitive and actually saves me time. I can focus on patient care while Blume handles my online presence.',
    rating: 5
  },
  {
    name: 'Mark Williams, LPC',
    location: 'California',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Blume Health revolutionized how I market my practice. Within 3 months, I saw a 60% increase in new patient inquiries.',
    rating: 5
  },
  {
    name: 'Lisa Chen, LMHC',
    location: 'Arizona',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'As a new practitioner, I was struggling to get noticed. Blume Health provided exactly what I needed to establish my practice.',
    rating: 5
  },
  {
    name: 'David Thompson, FNP - BC',
    location: 'Florida',
    image: 'https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Before Blume Health, managing my online listings was a nightmare. Now, I\'m listed everywhere that matters—and the patient inquiries haven\'t stopped.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez, LMFT',
    location: 'Oregon',
    image: 'https://images.pexels.com/photos/5452244/pexels-photo-5452244.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Blume Health gave my solo practice the digital edge it needed. I\'m now ranking on the first page of Google for my area—something I thought only big clinics could achieve.',
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };
  
  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Hear From Our Providers
          </h2>
          <div className="w-24 h-1 bg-coral-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
          
          {/* Mobile View */}
          <div className="md:hidden">
            <TestimonialCard testimonial={testimonials[currentIndex * 3]} />
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-coral-50"
            >
              <ChevronLeft className="h-6 w-6 text-coral-600" />
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-coral-500 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-coral-50"
            >
              <ChevronRight className="h-6 w-6 text-coral-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: any }> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="flex items-center mb-6">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-coral-100"
        />
        <div>
          <h4 className="font-bold text-navy-900 text-lg">{testimonial.name}</h4>
          <p className="text-gray-500">{testimonial.location}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <p className="text-gray-600 leading-relaxed italic">
        "{testimonial.text}"
      </p>
    </div>
  );
};

export default TestimonialsSection;