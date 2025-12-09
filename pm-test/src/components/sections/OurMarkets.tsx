'use client';

import React, { useState, useMemo, useEffect, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AreaChart, Area, Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { MARKET_ASSETS, MARKET_CATEGORIES, TIMEFRAMES, getChartData, IMAGES } from '@/constants';
import type { MarketAsset, MarketCategory } from '@/types';

const allMarketAssets: readonly MarketAsset[] = MARKET_ASSETS;

const OurMarketsComponent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('most-traded');
  const [selectedAsset, setSelectedAsset] = useState<string>('gold');
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>('1d');

  const categories:readonly MarketCategory[] = MARKET_CATEGORIES;
  const timeframes = TIMEFRAMES;

  const filteredAssets = useMemo(() => {
    if (selectedCategory === 'most-traded') {
      return allMarketAssets.slice(0, 3); // Show top 3 for most traded
    }
    return allMarketAssets.filter(asset => asset.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    const isCurrentAssetInFiltered = filteredAssets.some(asset => asset.id === selectedAsset);
    if (!isCurrentAssetInFiltered && filteredAssets.length > 0) {
      setSelectedAsset(filteredAssets[0].id);
    }
  }, [selectedCategory, filteredAssets, selectedAsset]);

  const selectedAssetData = useMemo(() => {
    return allMarketAssets.find(asset => asset.id === selectedAsset) || allMarketAssets[0];
  }, [selectedAsset]);

  const chartData = useMemo(() => {
    const data = getChartData(selectedAsset, selectedTimeframe);
    if (data.length < 2) {
    return [
        { month: 'Start', value: 50, secondaryValue: 37.5 },
        { month: 'End', value: 50, secondaryValue: 37.5 },
      ];
    }
    return data.map(point => ({
      ...point,
      secondaryValue: Math.min(point.value * 0.75, Math.max(...data.map(p => p.value)) * 0.9),
    }));
  }, [selectedAsset, selectedTimeframe]);

  const maxValue = useMemo(() => {
    if (chartData.length === 0) return 100;
    const dataMax = Math.max(...chartData.map(point => point.value));
    return Math.ceil(dataMax * 1.1);
  }, [chartData]);

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gilroy-bold text-gray-900 mb-3 sm:mb-4">
            Our Markets
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Stay informed with the data that matters, on 17,000+ markets. Get the latest news, trader sentiment, spreads, price action and much more.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 relative px-2">
          {categories.map((category, index) => (
            <React.Fragment key={category.id}>
              <button
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-medium transition-all text-xs sm:text-sm md:text-base ${
                  selectedCategory === category.id
                    ? 'bg-[var(--color-primary)] text-[var(--color-text-primary)] shadow-lg'
                    : 'bg-[var(--color-background-primary)] border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-red-50'
                }`}
              >
                {category.label}
              </button>
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-1 space-y-2 sm:space-y-3 order-2 lg:order-1">
            {filteredAssets.map((asset) => (
              <div
                key={asset.id}
                onClick={() => setSelectedAsset(asset.id)}
                className={`rounded-xl p-4 cursor-pointer transition-all ${
                  selectedAsset === asset.id
                    ? 'bg-[var(--color-primary)] text-[var(--color-text-primary)] shadow-lg'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 flex-shrink-0">
                      <Image
                        src={IMAGES.cryptocurrency}
                        alt={asset.name}
                        fill
                        className="object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className={`font-semibold ${selectedAsset === asset.id ? 'text-white' : 'text-gray-900'}`}>
                        {asset.name}
                      </div>
                      <div className={`text-sm ${selectedAsset === asset.id ? 'text-gray-200' : 'text-gray-500'}`}>
                        {asset.symbol}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold ${selectedAsset === asset.id ? 'text-white' : 'text-gray-900'}`}>
                      P {asset.price}
                    </div>
                    <div className={`text-sm font-medium ${
                      asset.isPositive || asset.changePercent.startsWith('+') 
                        ? 'text-green-600' 
                        : 'text-red-600'
                    }`}>
                      {asset.changePercent}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 order-1 lg:order-2">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 items-start">
              
              <div className="col-span-1 sm:col-span-1 rounded-xl p-3 sm:p-4 lg:p-6 relative overflow-hidden" style={{ background: 'var(--color-primary-gradient)' }}>
              
                <div className="absolute top-0 left-0 w-24 h-24 opacity-10">
                <div className="w-full h-full bg-yellow-400 rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-gilroy-bold text-white" style={{ lineHeight: '1' }}>
                      {selectedAssetData.name}
                    </h3>
                    <button className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-white hover:bg-white/20 rounded transition-colors flex-shrink-0" style={{ marginTop: 0 }}>
                      <Image
                        src={IMAGES.arrowSquareIn}
                        alt="Arrow square"
                        width={16}
                        height={16}
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        loading="lazy"
                      />
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <button className="flex-1 border-2 border-white/30 rounded-full px-3 sm:px-4 py-2 sm:py-3 text-[var(--color-text-primary)] font-bold text-xs sm:text-sm transition-all flex items-center justify-between gap-2" style={{ borderRadius: '50px', backgroundColor: 'var(--color-primary)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}>
                      <span className="truncate">Buy {selectedAssetData.buyPrice}</span>
                      <Image
                        src={IMAGES.arrow1}
                        alt="Arrow"
                        width={16}
                        height={16}
                        className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                        loading="lazy"
                      />
                    </button>
                    <button className="flex-1 bg-[var(--color-background-primary)] border-2 border-white/30 rounded-full px-3 sm:px-4 py-2 sm:py-3 text-[var(--color-primary)] font-bold text-xs sm:text-sm hover:bg-gray-50 transition-all flex items-center justify-between gap-2" style={{ borderRadius: '50px' }}>
                      <span className="truncate">Sell {selectedAssetData.sellPrice}</span>
                      <Image
                        src={IMAGES.arrowUpRed}
                        alt="Arrow"
                        width={16}
                        height={16}
                        className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                        loading="lazy"
                      />
                    </button>
                  </div>
              </div>
            </div>

              
              <div className="col-span-1 flex flex-col items-start">
                <div className="rounded-xl p-2.5 border border-gray-200 inline-block" style={{ backgroundColor: '#F9F9F9' }}>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs text-gray-600">Buyers</span>
                      <span 
                        className="px-1.5 py-0.5 rounded text-xs font-gilroy-bold text-black"
                        style={{ backgroundColor: '#EDEEF2', fontWeight: 500 }}
                      >
                        {selectedAssetData.buyers.toFixed(2)}%
                      </span>
                      <span className="text-xs" style={{ color: '#54C764' }}>
                        Low: {selectedAssetData.low}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs text-gray-600">Sellers</span>
                      <span 
                        className="px-1.5 py-0.5 rounded text-xs font-gilroy-bold text-black"
                        style={{ backgroundColor: '#EDEEF2', fontWeight: 500 }}
                      >
                        {selectedAssetData.sellers.toFixed(2)}%
                      </span>
                      <span className="text-xs text-[var(--color-primary)]">
                        High: {selectedAssetData.high}
                      </span>
                    </div>
                </div>
                </div>
                <div className="mt-2">
                  <Link href="#" className="text-[var(--color-primary)] hover:underline text-xs font-medium flex items-center gap-1">
                    Browse all markets
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start w-full">
              
              <div style={{ marginLeft: 0, width: '100%', maxWidth: '800px' }} className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                <div className="w-full h-64 sm:h-72 md:h-80" style={{ minWidth: '280px' }}>
                  <div className="text-center mb-2">
                    <h4 className="text-sm font-bold text-[var(--color-primary)]">
                      {selectedAssetData.symbol || selectedAssetData.name || 'XAU/USD'}
                    </h4>
                  </div>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={chartData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 30 }}
                    >
                  <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgb(255, 228, 228)" stopOpacity={0.2} />
                          <stop offset="100%" stopColor="rgb(255, 129, 134)" stopOpacity={0.2} />
                        </linearGradient>
                        <linearGradient id="secondaryGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.2} />
                          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                      <CartesianGrid 
                        strokeDasharray="2 2"
                        stroke="var(--color-primary)" 
                        opacity={0.3}
                        horizontal={true}
                        vertical={false}
                      />
                      <XAxis 
                        dataKey="month" 
                        tick={{ fill: 'var(--color-primary)', fontSize: 12 }}
                        axisLine={{ stroke: 'var(--color-primary)' }}
                        tickLine={{ stroke: 'var(--color-primary)' }}
                      />
                      <YAxis 
                        domain={[0, maxValue]}
                        tick={{ fill: 'var(--color-primary)', fontSize: 12 }}
                        axisLine={{ stroke: 'var(--color-primary)' }}
                        tickLine={{ stroke: 'var(--color-primary)' }}
                        ticks={[0, 20, 40, 60, 80, 100].filter(t => t <= maxValue)}
                      />
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload;
                    return (
                              <div
                                style={{
                                  backgroundColor: 'var(--color-primary)',
                                  padding: '8px 12px',
                                  borderRadius: '4px',
                                  border: 'none',
                                  color: 'white',
                                  fontSize: '12px',
                                }}
                              >
                                {data.price && (
                                  <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                                    {data.price}
                                  </div>
                                )}
                                {data.date && (
                                  <div style={{ fontSize: '11px', opacity: 0.9 }}>
                                    {data.date}
                                  </div>
                                )}
                                {!data.price && !data.date && (
                                  <div style={{ fontWeight: 'bold' }}>
                                    ${data.value?.toFixed(2) || '0.00'}
                                  </div>
                                )}
                              </div>
                            );
                          }
                          return null;
                        }}
                        cursor={{ stroke: 'var(--color-primary)', strokeWidth: 2, strokeOpacity: 0.4 }}
                      />
                      <Area
                        type="monotone"
                        dataKey="secondaryValue"
                        stroke="none"
                        fill="url(#secondaryGradient)"
                        fillOpacity={1}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="none"
                        fill="url(#chartGradient)"
                        fillOpacity={1}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="var(--color-primary)"
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        dot={false}
                        activeDot={{ 
                          r: 5, 
                          fill: '#9333EA',
                          stroke: 'none',
                        }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>


              <div className="flex flex-row sm:flex-col gap-2 flex-shrink-0 w-full sm:w-auto overflow-x-auto sm:overflow-x-visible">
                {timeframes.map((timeframe) => (
                    <button
                    key={timeframe}
                    onClick={() => setSelectedTimeframe(timeframe)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all whitespace-nowrap ${
                      selectedTimeframe === timeframe
                        ? 'bg-[var(--color-primary)] text-[var(--color-text-primary)] shadow-lg'
                        : 'bg-[var(--color-background-primary)] border border-gray-200 text-gray-900 hover:bg-gray-50'
                    }`}
                    style={{ borderRadius: '50px' }}
                  >
                    {timeframe}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const OurMarkets = memo(OurMarketsComponent);
OurMarkets.displayName = 'OurMarkets';
