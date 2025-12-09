'use client';

import React from 'react';
import Image from 'next/image';
import { EMPOWER_TRADING_FEATURES, EMPOWER_TRADING_CONTENT, IMAGES } from '@/constants';

export const EmpowerTrading: React.FC = () => {
  const features = EMPOWER_TRADING_FEATURES;
  const { heading, description } = EMPOWER_TRADING_CONTENT;

  return (
    <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden" style={{ backgroundColor: '#111111' }}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gilroy-bold text-white mb-3 sm:mb-4">
            {heading}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            <span className="block">{description.line1}</span>
            <span className="block">{description.line2}</span>
          </p>
        </div>

        
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="relative p-6 sm:p-8 transition-all"
                style={{
                  borderRadius: 
                    index === 0 ? '0.75rem 0.75rem 0 0' :
                    index === 1 ? '0 0 0.75rem 0.75rem' :
                    index === 2 ? '0.75rem 0 0 0' :
                    '0 0.75rem 0 0',
                }}
              >
                
                {feature.backgroundImage && (
                  <div className="absolute inset-0">
                    <Image
                      src={feature.backgroundImage}
                      alt=""
                      fill
                      className="object-cover"
                      style={{
                        borderRadius: index === 0 ? '0.75rem 0 0 0' : '0',
                      }}
                      unoptimized
                    />
                  </div>
                )}

                
                <div className="mb-4 sm:mb-6 flex items-center justify-center relative z-10">
                  {feature.imageSrc ? (
                    <Image
                      src={feature.imageSrc}
                      alt={feature.title}
                      width={64}
                      height={64}
                      className="object-contain w-12 h-12 sm:w-16 sm:h-16"
                      unoptimized
                    />
                  ) : null}
                </div>

                
                <h3 className="text-lg sm:text-xl md:text-2xl text-white mb-2 sm:mb-3 relative z-10 text-center font-gilroy-bold" style={{ fontWeight: 500 }}>
                  {feature.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed relative z-10 text-center" style={{ color: '#A8A6B1' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block z-20">
            <div className="relative w-16 h-16 md:w-20 md:h-20">
              <Image
                src={IMAGES.empoweringTrading}
                alt="Empower Trading"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
