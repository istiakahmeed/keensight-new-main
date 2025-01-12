import React from 'react';

import { FaUserTie } from "react-icons/fa";
import AnimatedTyping from './HeroTypeanimtion';
import ConsultationButton from './Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-900">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

      {/* Main content */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left column - Text content */}
          <div className="flex flex-col items-start space-y-8">
            {/* Company identifier */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400">🚀</span>
              </div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Keensight Analytics
              </span>
            </div>
            
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-gray-900 dark:text-white">
                Empowering Businesses Through
                <span className="block mt-2 font-normal text-blue-600 dark:text-blue-500">
                  Advanced Data and AI Solutions
                </span>
              </h1>
            </div>

            {/* Animated typing */}
            <div className="h-20 w-full">
              <AnimatedTyping />
            </div>

            {/* Button with improved design */}
            <div className="pt-4">
              <ConsultationButton 
                buttonText="Get Expert Advice" 
                icon={<FaUserTie />} 
              />
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src="/images/hero/USA.jpg"
                alt="Analytics Dashboard"
                className="w-full h-full object-cover"
              />
              
              {/* Minimal info card */}
              <div className="absolute left-4 right-4 bottom-4 p-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Transforming businesses through cutting-edge AI and data analytics solutions
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-lg -z-10" />
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 dark:border-gray-800 pt-8">
          {[
            { label: 'Data Points Analyzed', value: '1B+' },
            { label: 'Client Success Rate', value: '98%' },
            { label: 'AI Models Deployed', value: '50+' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-light text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;