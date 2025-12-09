'use client';

import React from 'react';
import Image from 'next/image';
import { MarketCard } from '../ui/MarketCard';
import { MarketData } from '@/types';

const marketData: MarketData[] = [
  {
    id: '1',
    name: 'USD/EUR',
    symbol: 'USD/EUR',
    icon: '🇪🇺',
    price: '0.00014',
    change: '-234.45',
    trend: 'up',
  },
  {
    id: '2',
    name: 'XAUUSD',
    symbol: 'Gold',
    icon: '🥇',
    price: '0.00014',
    change: '-234.45',
    trend: 'down',
  },
];

export const MarketCards: React.FC = () => {
  return (
    <section className="absolute bottom-0 left-0 right-0 z-30 pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 lg:pb-8" style={{ marginBottom: '-80px' }}>
      
      <div className="absolute top-0 left-0 w-full z-0" style={{ height: '100px', minHeight: '100px' }}>
        <Image
          src="/images/curve.png"
          alt="Curve Background"
          fill
          className="object-cover"
          style={{ objectPosition: 'bottom' }}
        />
      </div>
      
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 flex items-center justify-center" style={{ minHeight: '100px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl w-full">
          {marketData.map((market) => (
            <MarketCard key={market.id} market={market} />
          ))}
        </div>
      </div>
    </section>
  );
};
