'use client';

import React from 'react';
import { Button } from '../ui/Button';
import Image from 'next/image';
import { HERO_CONTENT, IMAGES, colors } from '@/constants';

export const Hero: React.FC = () => {
  const { title, description, buttons } = HERO_CONTENT;

  return (
    <section 
      className="text-white relative"
      style={{
        backgroundColor: colors.primary.main
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-0">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-gilroy-bold">
              <span className="block">{title.line1}</span>
              <span className="block">{title.line2}</span>
              <span className="block">{title.line3}</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button 
                variant="secondary" 
                size="lg"
                className="rounded-full w-full sm:w-auto"
                style={{ borderRadius: '100px' }}
              >
                {buttons.primary}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full w-full sm:w-auto"
                style={{ borderRadius: '100px' }}
              >
                {buttons.secondary}
              </Button>
            </div>
          </div>

          {/* Right Content - Phone Mockup - Mobile/Tablet only */}
          <div className="flex flex-col justify-center lg:hidden items-center relative z-10 mt-8">
            <div className="relative w-full max-w-xs sm:max-w-md h-[300px] sm:h-[400px] md:h-[500px]" style={{ marginTop: '20px', zIndex: 10 }}>
              <Image
                src={IMAGES.mobileDuoHero}
                alt="Premier Markets Mobile App"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop Phone Mockup - Absolutely positioned to touch curve */}
      <div className="hidden lg:block absolute right-4 xl:right-8 2xl:right-[calc((100vw-1280px)/2+1.5rem)] bottom-0 z-10">
        <div className="relative w-[400px] xl:w-[500px] h-[600px] xl:h-[700px]">
          <Image
            src={IMAGES.mobileDuoHero}
            alt="Premier Markets Mobile App"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>
      
      {/* Curve Image - Full width, positioned at bottom of section */}
      <div className="relative w-full z-20" style={{ marginTop: '-1px' }}>
        <Image
          src={IMAGES.curve}
          alt="Curve"
          width={1920}
          height={10}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

