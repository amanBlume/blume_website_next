import React from 'react';
import { Heart, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-coral-500 to-coral-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              {/* <Heart className="h-8 w-8 text-white" fill="currentColor" /> */}
              <span className="text-2xl font-bold">Blume Health</span>
            </div>
            <p className="text-coral-100 mb-6 leading-relaxed max-w-md">
              Empowering clinicians to enhance their online presence and grow their practice 
              with confidence.
            </p>
            <div>
              <p className="font-semibold mb-2">Support:</p>
              <a 
                href="mailto:support@blumehealth.co" 
                className="text-coral-100 hover:text-white transition-colors underline"
              >
                support@blumehealthco.com
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-coral-100 hover:text-white transition-colors">Home</a>
              <a href="#channels" className="text-coral-100 hover:text-white transition-colors">Channels</a>
              <a href="#partnerships" className="text-coral-100 hover:text-white transition-colors">Partnerships</a>
              <a href="#pricing" className="text-coral-100 hover:text-white transition-colors">Pricing</a>
            </nav>
          </div>
          
          {/* Legal & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Legal & Social</h3>
            <div className="flex flex-col space-y-3 mb-6">
              <a href="#terms" className="text-coral-100 hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#privacy" className="text-coral-100 hover:text-white transition-colors">Privacy Policy</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="#linkedin" 
                className="p-3 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-coral-400 mt-12 pt-8 text-center">
          <p className="text-coral-100">
            © {new Date().getFullYear()} Blume Health. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;