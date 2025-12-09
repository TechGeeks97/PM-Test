'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { JOIN_TRADERS_CONTENT, IMAGES } from '@/constants';

export const JoinTraders: React.FC = () => {
  const { heading, description, bannerHeading, buttons } = JOIN_TRADERS_CONTENT;
  
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center mb-12 sm:mb-16 lg:mb-24">
          
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gilroy-bold leading-tight">
              <span className="block text-gray-900">
                {heading.line1} <span className="text-[var(--color-primary)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{heading.highlight}</span>
              </span>
              <span className="block text-gray-900">{heading.line2}</span>
              <span className="block text-gray-900">{heading.line3}</span>
            </h2>
          </div>

          
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              <span className="block">{description.line1}</span>
              <span className="block">{description.line2}</span>
              <span className="block">{description.line3}</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                variant="primary"
                size="lg"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg border-2 border-[var(--color-primary)]"
                style={{ borderRadius: '100px' }}
              >
                {buttons.primary}
              </Button>
              <Button 
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg border-2 border-[var(--color-primary)] text-gray-900"
                style={{ borderRadius: '100px' }}
              >
                {buttons.secondary}
              </Button>
            </div>
          </div>
        </div>

        
        <div className="rounded-2xl overflow-visible relative" style={{ background: 'var(--color-primary-gradient)' }}>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center px-4 sm:px-6 lg:px-8 xl:px-12 relative py-8 sm:py-12 overflow-visible">
            
            <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 flex items-end justify-center mt-4 sm:mt-8 lg:mt-0 order-2 lg:order-1" style={{ overflow: 'visible' }}>
              <div className="relative w-full h-full" style={{ overflow: 'visible' }}>
                
                <div className="absolute inset-0 z-10 translate-x-4 sm:translate-x-8 lg:translate-x-16 xl:translate-x-20 -translate-y-4 sm:-translate-y-6 lg:-translate-y-8">
                  <Image
                    src={IMAGES.dollarsBackground}
                    alt="Dollars Background"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-8 sm:-translate-y-12 lg:-translate-y-16 z-30" style={{ overflow: 'visible' }}>
                  <div className="relative w-40 sm:w-56 md:w-72 lg:w-88 xl:w-[24rem]" style={{ height: '170%', overflow: 'visible' }}>
                    <Image
                      src={IMAGES.handyman}
                      alt="Handyman"
                      width={384}
                      height={576}
                      className="object-contain object-bottom w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            
            <div className="text-white space-y-4 sm:space-y-6 text-center lg:text-left order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-gilroy-bold leading-tight">
                <span className="block">{bannerHeading.line1}</span>
                <span className="block">{bannerHeading.line2}</span>
              </h3>
              
              <div className="flex justify-center lg:justify-start">
                <div
                  className="rounded-[55px] p-[2px] inline-block"
                  style={{
                    background: 'linear-gradient(90.64deg, #6D0002 -2.57%, var(--color-primary) 50%, #FFFFFF 108.74%)',
                    boxShadow: '0px 4px 24px 0px rgba(255, 74, 74, 0.25), 0px 4px 34px 0px rgba(255, 0, 0, 0.25), 0px 4px 34px 0px rgba(255, 255, 255, 0.25)',
                  }}
                >
                  <button
                    className="rounded-[55px] text-[var(--color-text-primary)] font-semibold text-sm sm:text-base transition-all whitespace-nowrap w-full h-full"
                    style={{
                      backgroundColor: '#991B1B',
                      padding: '12px 24px',
                      boxShadow: '0px 2px 5px 0px rgba(255, 7, 7, 0.75) inset, 0px 4px 24px 0px rgba(152, 14, 14, 0.25) inset, 0px 3px 10px 0px rgba(255, 255, 255, 0.25) inset',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7F1D1D'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#991B1B'}
                  >
                    {buttons.banner}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
