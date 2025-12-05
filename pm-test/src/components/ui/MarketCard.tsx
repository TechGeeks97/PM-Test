'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from './Card';
import { MarketData } from '@/types';

interface MarketCardProps {
  market: MarketData;
}

export const MarketCard: React.FC<MarketCardProps> = ({ market }) => {
  const isPositive = market.trend === 'up';
  const changeColor = isPositive ? 'text-green-600' : 'text-red-600';

  return (
    <Card className="flex flex-col gap-2 p-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
          <Image
            src={market.name === 'USD/EUR' ? '/images/us-euro.png' : '/images/gold.png'}
            alt={market.name}
            width={32}
            height={32}
            className="w-full h-full object-contain"
            unoptimized
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-sm">{market.name}</h3>
          <p className="text-xs text-gray-500">{market.symbol}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="h-6 w-20 mb-1">
            <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
              <polyline
                points={isPositive ? "0,25 20,20 40,15 60,10 80,5 100,0" : "0,5 20,10 40,15 60,20 80,25 100,30"}
                fill="none"
                stroke={isPositive ? "#10B981" : "#EF4444"}
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="space-y-0.5">
            <p className="text-xs text-gray-500">{market.price}</p>
            <p className={`text-xs font-medium ${changeColor}`}>{market.change}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

