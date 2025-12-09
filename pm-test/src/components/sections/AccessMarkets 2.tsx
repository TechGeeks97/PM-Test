'use client';

import React from 'react';

interface MarketCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const AccessMarkets: React.FC = () => {
  const marketCards: MarketCard[] = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Forex',
      description: 'Trade the world\'s largest financial market. Access deep liquidity, tight spreads, and constant opportunity across major and minor currency pairs.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Stocks',
      description: 'From Wall Street to global tech leaders, follow the world\'s leading companies and react to market moves in real time.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Indices',
      description: 'Trade major global indices with deep liquidity, precise execution, and competitive spreads across key markets.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M15 15v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V15z" />
        </svg>
      ),
      title: 'Commodities',
      description: 'Tap into global demand and supply trends by trading essential resources such as oil, gas, and agricultural products.',
    },
  ];

  return (
    <section className="relative">
      {/* Top Section - Red Background */}
      <div className="bg-gradient-to-br from-[#DC2626] to-[#991B1B] text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Access <span className="text-[#FF6B6B]">17,000+</span> markets all in one
            </h2>

            {/* Sub-text */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 underline decoration-gray-300 underline-offset-4 cursor-pointer hover:text-white transition-colors">
              Trade forex, shares, indices, and commodities with competitive spreads, deep liquidity, and seamless execution.
            </p>

            {/* Feature Buttons */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-4">
              {/* $0 Deposit Fees */}
              <div className="bg-[#DC2626] border-2 border-white/30 rounded-xl px-6 py-4 flex items-center gap-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white font-semibold text-sm sm:text-base">$0 Deposit Fees</span>
              </div>

              {/* Spreads from 0.0 pips */}
              <div className="bg-[#DC2626] border-2 border-white/30 rounded-xl px-6 py-4 flex items-center gap-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="text-white font-semibold text-sm sm:text-base">Spreads from 0.0 pips</span>
              </div>

              {/* Secure Funds */}
              <div className="bg-[#DC2626] border-2 border-white/30 rounded-xl px-6 py-4 flex items-center gap-3 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-white font-semibold text-sm sm:text-base">Secure Funds</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved Transition */}
      <div className="relative -mt-1 h-16 sm:h-20 lg:h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C200,80 400,80 600,60 C800,40 1000,40 1200,50 C1300,55 1400,60 1440,65 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Bottom Section - Market Cards */}
      <div className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {marketCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer group relative"
              >
                {/* Icon */}
                <div className="text-[#DC2626] mb-4">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Arrow Icon */}
                <div className="absolute bottom-6 right-6 text-gray-400 group-hover:text-[#DC2626] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

