'use client';

import React from 'react';
import Image from 'next/image';
import { WITHDRAWAL_FEATURES, WITHDRAWAL_CONTENT, IMAGES } from '@/constants';

export const SeamlessWithdrawals: React.FC = () => {
  const features = WITHDRAWAL_FEATURES;
  const { subtitle, heading } = WITHDRAWAL_CONTENT;

  return (
    <div className="bg-white mb-12 sm:mb-16 lg:mb-24">
      {/* Header - Outside pink background */}
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-4">
            <p className="text-[#ED1D25] text-base sm:text-lg md:text-xl font-medium mb-2">
              {subtitle}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gilroy-bold text-gray-900 mb-2" style={{ fontFamily: 'Gilroy-Bold, sans-serif' }}>
              {heading}
            </h2>
          </div>
        </div>
      </section>

      {/* Main Content - Pink background for rounded items */}
      <section className="bg-pink-50 rounded-2xl sm:rounded-3xl mx-4 sm:mx-6 lg:mx-auto max-w-[95%] lg:max-w-[1400px]">
        <div className="container mx-auto px-0 sm:px-0">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left Section - Features */}
          <div className="space-y-4 sm:space-y-6 px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
            {features.map((feature, index) => (
              <div key={feature.id} className="relative">
                {/* Feature Card */}
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  {/* Icon Image */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={feature.imageSrc}
                      alt={feature.title}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section - Mobile Hand with Overlaid Images */}
          <div className="relative flex justify-center lg:justify-end items-end order-1 lg:order-2" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Base Image - Mobile Hand */}
              <Image
                src={IMAGES.mobileHand1}
                alt="Mobile hand"
                width={700}
                height={900}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
              
              {/* Overlay - User Card Image (Left Side) */}
            <div
  className="absolute left-[15%] sm:left-[20%] lg:left-[120px] top-1/2 -translate-y-1/2"
  style={{ width: 'clamp(120px, 30%, 200px)', height: 'clamp(160px, 40%, 280px)', zIndex: 10 }}
>
  <Image
    src={IMAGES.userCard}
    alt="User card reading notification"
    fill
    className="object-contain"
    loading="lazy"
  />
</div>

              
              {/* Overlay - Mastercard Full Image (Right Side - Top) */}
              <div className="absolute" style={{ right: 'clamp(15%, 20%, 120px)', top: 'clamp(80px, 15%, 120px)', width: 'clamp(80px, 20%, 140px)', maxWidth: '90%', zIndex: 10 }}>
                <Image
                  src={IMAGES.mastercardFull}
                  alt="Mastercard notification"
                  width={140}
                  height={85}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

