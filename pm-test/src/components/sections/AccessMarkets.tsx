'use client';

import React from 'react';
import Image from 'next/image';
import { ACCESS_MARKETS_CONTENT, ACCESS_MARKETS_FEATURES, MARKET_CARDS, IMAGES, colors } from '@/constants';

export const AccessMarkets: React.FC = () => {
  const { heading, description } = ACCESS_MARKETS_CONTENT;
  const featureButtons = ACCESS_MARKETS_FEATURES;
  const marketCards = MARKET_CARDS;

  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.backgroundGroup890}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Section - Content */}
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 mb-12 sm:mb-16 lg:mb-24">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gilroy-bold leading-tight px-2">
            <span className="block text-white">{heading.line1}</span>
            <span className="block text-white">{heading.line2}</span>
            <span className="block text-white">
              {heading.line3} <span className="text-[#ED1D25]">{heading.highlight}</span>
            </span>
            <span className="block text-white">{heading.line4}</span>
          </h2>

          {/* Sub-text */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 px-4">
            {description}
          </p>

          {/* Feature Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 pt-4 px-4">
            {featureButtons.map((feature, index) => (
              <div
                key={index}
                className="rounded-full p-[1px] transition-all cursor-pointer group w-full sm:w-auto"
                style={{
                  background: 'linear-gradient(90deg, #FF787D 0%, #ED1D25 100%)',
                  boxShadow: '0px 4px 30px 0px rgba(255, 0, 0, 0.45)',
                  borderRadius: '50px',
                }}
              >
                <div
                  className="rounded-full px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-2 sm:gap-3 h-full justify-center sm:justify-start"
                  style={{
                    background: 'linear-gradient(90deg, #800800 0%, #9B0C11 100%)',
                    boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.25) inset',
                    borderRadius: '50px',
                  }}
                >
                  <div className="relative w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Image
                      src={feature.icon}
                      alt={feature.text}
                      fill
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-white font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">
                    {feature.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Market Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-3 lg:gap-4">
          {marketCards.map((card, index) => (
              <div
                key={index}
                className="rounded-[40px] p-[2px] hover:-translate-y-2 sm:hover:-translate-y-4 transition-all duration-300 cursor-pointer group w-full max-w-[240px] mx-auto"
                style={{
                  background: 'linear-gradient(180deg, #FFE6E7 0%, #ED1D25 62.02%)',
                }}
              >
                <div
                  className="bg-white rounded-[40px] p-4 sm:p-6 h-full hover:shadow-xl transition-all duration-300 relative w-full"
                  style={{
                    minHeight: '280px',
                  }}
                >
                {/* Icon */}
                <div className="relative w-8 h-8 mb-4">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    fill
                    className="object-contain"
                    loading="lazy"
                  />
                </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 pb-2 sm:pb-3" style={{ borderBottom: '0.5px solid #D2D2D2' }}>
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6">
                {card.description}
              </p>

              {/* Arrow Icon */}
              <div className="absolute bottom-6 right-6 w-8 h-7 pointer-events-none">
                <Image
                  src={IMAGES.send}
                  alt="Arrow"
                  fill
                  className="object-contain group-hover:opacity-0 transition-opacity duration-500 ease-in-out pointer-events-none"
                  loading="lazy"
                />
                <Image
                  src={IMAGES.sendRed}
                  alt="Arrow"
                  fill
                  className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none"
                  loading="lazy"
                />
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

