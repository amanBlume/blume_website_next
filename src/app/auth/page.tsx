"use client"
import React, { useState } from 'react';
import { Eye, EyeOff, Heart, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const AuthPage: React.FC = () => {
  const router = useRouter();
  const signInLoaded = true;
  const signUpLoaded = true;

  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('Auth coming soon. Book a demo to get started.');
    setIsLoading(false);
  };

  const handleGoogleAuth = async () => {
    setError('Auth coming soon. Book a demo to get started.');
  };

  if (!signInLoaded || !signUpLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-coral-100 via-white to-teal-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coral-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-100 via-white to-teal-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23FF6B6B%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%222%22/%3E%3Ccircle cx=%2227%22 cy=%227%22 r=%222%22/%3E%3Ccircle cx=%2247%22 cy=%227%22 r=%222%22/%3E%3Ccircle cx=%227%22 cy=%2227%22 r=%222%22/%3E%3Ccircle cx=%2227%22 cy=%2227%22 r=%222%22/%3E%3Ccircle cx=%2247%22 cy=%2227%22 r=%222%22/%3E%3Ccircle cx=%227%22 cy=%2247%22 r=%222%22/%3E%3Ccircle cx=%2227%22 cy=%2247%22 r=%222%22/%3E%3Ccircle cx=%2247%22 cy=%2247%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-coral-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-teal-200 rounded-full opacity-30 animate-pulse delay-300"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-coral-300 rounded-full opacity-15 animate-pulse delay-700"></div>
      
      {/* Main Container */}
      <div className="relative w-full max-w-md">
        {/* Glass Card */}
        <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-6">
              {/* <Heart className="h-10 w-10 text-coral-500" fill="currentColor" /> */}
              <span className="text-3xl font-bold text-navy-900">Blume Health</span>
            </div>
            
            <h1 className="text-2xl font-bold text-navy-900 mb-2">
              {isSignUp ? 'Create Your Account' : 'Welcome Back'}
            </h1>
            <p className="text-gray-600">
              {isSignUp 
                ? 'Join thousands of healthcare providers growing their practice' 
                : 'Sign in to continue growing your practice'
              }
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-2xl">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* Toggle Buttons */}
          <div className="flex bg-white/30 backdrop-blur-sm rounded-2xl p-1 mb-8">
            <button
              onClick={() => setIsSignUp(false)}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                !isSignUp
                  ? 'bg-white text-coral-600 shadow-lg'
                  : 'text-gray-600 hover:text-coral-600'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                isSignUp
                  ? 'bg-white text-coral-600 shadow-lg'
                  : 'text-gray-600 hover:text-coral-600'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields (Sign Up Only) */}
            {isSignUp && (
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent placeholder-gray-500 text-navy-900 transition-all duration-300"
                    required={isSignUp}
                  />
                </div>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent placeholder-gray-500 text-navy-900 transition-all duration-300"
                    required={isSignUp}
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-4 bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent placeholder-gray-500 text-navy-900 transition-all duration-300"
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-12 pr-12 py-4 bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent placeholder-gray-500 text-navy-900 transition-all duration-300"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-coral-500 transition-colors duration-300"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            {/* Confirm Password Field (Sign Up Only) */}
            {isSignUp && (
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-12 py-4 bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent placeholder-gray-500 text-navy-900 transition-all duration-300"
                  required={isSignUp}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-coral-500 transition-colors duration-300"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            )}

            {/* Terms Checkbox (Sign Up Only) */}
            {isSignUp && (
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1 h-5 w-5 text-coral-500 bg-white/40 border-white/50 rounded focus:ring-coral-500 focus:ring-2"
                  required={isSignUp}
                />
                <label htmlFor="agreeToTerms" className="text-sm text-gray-600 leading-relaxed">
                  I agree to the{' '}
                  <a href="#" className="text-coral-600 hover:text-coral-700 font-medium">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-coral-600 hover:text-coral-700 font-medium">
                    Privacy Policy
                  </a>
                </label>
              </div>
            )}

            {/* Forgot Password (Sign In Only) */}
            {!isSignUp && (
              <div className="text-right">
                <a href="#" className="text-coral-600 hover:text-coral-700 font-medium text-sm">
                  Forgot Password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-coral-500 to-coral-600 text-white py-4 px-6 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/20 backdrop-blur-sm text-gray-600 rounded-full">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center mt-6 gap-4">
              <button 
                onClick={handleGoogleAuth}
                disabled={isLoading}
                className="flex items-center justify-center px-4 py-3 bg-white/40 backdrop-blur-sm border border-white/50 rounded-2xl hover:bg-white/60 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="h-5 w-5 text-gray-600 group-hover:text-coral-600 transition-colors duration-300" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="ml-2 text-gray-600 group-hover:text-coral-600 transition-colors duration-300 font-medium">Google</span>
              </button>
            </div>
          </div>

          {/* Footer Text */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-coral-600 hover:text-coral-700 font-medium"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;