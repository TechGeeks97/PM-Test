'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { PROMOTIONAL_STEPS, PROMOTIONAL_BANNER_CONTENT, IMAGES } from '@/constants';

export const PromotionalBanner: React.FC = () => {
  const steps = PROMOTIONAL_STEPS;
  const { description, button } = PROMOTIONAL_BANNER_CONTENT;

  return (
    <section className="bg-white py-2 sm:py-4 lg:py-6 pb-0 mb-8 sm:mb-12 lg:mb-16">
      <div className="container mx-auto px-2 sm:px-3 lg:px-4">
        <div 
          className="rounded-lg sm:rounded-xl overflow-visible lg:overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #BE050D 0%, #580000 100%)',
          }}
        >
          <div className="flex flex-col lg:flex-row gap-1 sm:gap-1.5 lg:gap-2 items-center px-2 sm:px-3 lg:px-4 py-3 sm:py-4 lg:py-5 relative overflow-visible">
            
            <div className="space-y-1.5 sm:space-y-2 text-white flex-1 text-left w-full lg:max-w-lg z-10">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 md:gap-4">
                {steps.map((step) => (
                  <div key={step.label} className="flex items-center gap-2 sm:gap-2.5">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center">
                      <Image
                        src={step.image}
                        alt={step.label}
                        width={40}
                        height={40}
                        className="object-contain w-full h-full"
                        unoptimized
                      />
                    </div>
                    <span className="text-white font-gilroy-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl whitespace-nowrap">{step.label}</span>
                  </div>
                ))}
              </div>

              
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 font-normal">
                <span className="block">{description.line1}</span>
                <span className="block">{description.line2}</span>
              </p>

              
              <div className="flex justify-center lg:justify-start">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4">
                  {button}
                </Button>
              </div>
            </div>

            
            <div className="relative flex justify-center lg:justify-end shrink-0 order-first lg:order-last lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:items-end">
              <div className="relative w-[140px] h-[180px] sm:w-[180px] sm:h-[240px] md:w-72 md:h-[280px] lg:w-[180px] lg:h-[240px] xl:w-[450px] xl:h-[400px] flex items-center lg:translate-y-8 xl:translate-y-12">
                <Image
                  src={IMAGES.mobileHand}
                  alt="Phone in Hand"
                  width={450}
                  height={600}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
