'use client';

import React, { useState, useMemo, useEffect, memo } from 'react';
import Image from 'next/image';
import { MARKET_ASSETS, MARKET_CATEGORIES, TIMEFRAMES, getChartData, IMAGES } from '@/constants';
import type { MarketAsset, MarketCategory } from '@/types';

// Use market assets from constants
const allMarketAssets: MarketAsset[] = MARKET_ASSETS;

const OurMarketsComponent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('most-traded');
  const [selectedAsset, setSelectedAsset] = useState<string>('gold');
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>('1d');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories: MarketCategory[] = MARKET_CATEGORIES;
  const timeframes = TIMEFRAMES;

  // Filter assets based on selected category
  const filteredAssets = useMemo(() => {
    if (selectedCategory === 'most-traded') {
      return allMarketAssets.slice(0, 3); // Show top 3 for most traded
    }
    return allMarketAssets.filter(asset => asset.category === selectedCategory);
  }, [selectedCategory]);

  // Auto-select first asset if current selection is not in filtered list
  useEffect(() => {
    const isCurrentAssetInFiltered = filteredAssets.some(asset => asset.id === selectedAsset);
    if (!isCurrentAssetInFiltered && filteredAssets.length > 0) {
      setSelectedAsset(filteredAssets[0].id);
    }
  }, [selectedCategory, filteredAssets, selectedAsset]);

  // Get selected asset data
  const selectedAssetData = useMemo(() => {
    return allMarketAssets.find(asset => asset.id === selectedAsset) || allMarketAssets[0];
  }, [selectedAsset]);

  // Chart data - dynamically generated based on selected asset and timeframe
  const chartData = useMemo(() => {
    const data = getChartData(selectedAsset, selectedTimeframe);
    // Ensure we have at least 2 data points to prevent division by zero
    if (data.length < 2) {
      return [
        { month: 'Start', value: 50 },
        { month: 'End', value: 50 },
      ];
    }
    return data;
  }, [selectedAsset, selectedTimeframe]);

  // Calculate max value dynamically from chart data with padding
  const maxValue = useMemo(() => {
    if (chartData.length === 0) return 100;
    const dataMax = Math.max(...chartData.map(point => point.value));
    // Add 10% padding to the top for better visualization
    return Math.ceil(dataMax * 1.1);
  }, [chartData]);

  const chartHeight = 150;
  const chartWidth = 500;

  // Calculate path for the line chart
  const points = useMemo(() => {
    // Prevent division by zero - if only one point, duplicate it
    const dataLength = chartData.length;
    if (dataLength === 0) return '';
    if (dataLength === 1) {
      const point = chartData[0];
      const x = 20;
      const y = chartHeight - (point.value / maxValue) * chartHeight;
      return `${x},${y} ${x + chartWidth},${y}`;
    }
    
    return chartData.map((point, index) => {
      const x = 20 + (index / (dataLength - 1)) * chartWidth;
      const y = chartHeight - (point.value / maxValue) * chartHeight;
      return `${x},${y}`;
    }).join(' ');
  }, [chartData, maxValue, chartHeight, chartWidth]);

  // Calculate path for the area fill (main line)
  const areaPath = useMemo(() => {
    return `M 20,${chartHeight} L ${points} L ${chartWidth + 20},${chartHeight} Z`;
  }, [points]);

  // Secondary shaded area path (lighter, following similar trend but slightly offset)
  const secondaryAreaPath = useMemo(() => {
    const dataLength = chartData.length;
    if (dataLength === 0) return '';
    if (dataLength === 1) {
      const point = chartData[0];
      const secondaryValue = point.value * 0.75;
      const x = 20;
      const y = chartHeight - (secondaryValue / maxValue) * chartHeight;
      return `M 20,${chartHeight} L ${x},${y} L ${x + chartWidth},${y} L ${chartWidth + 20},${chartHeight} Z`;
    }
    
    const secondaryPointsStr = chartData.map((point, index) => {
      const x = 20 + (index / (dataLength - 1)) * chartWidth;
      // Secondary area is 75% of main value, but ensure it doesn't exceed maxValue
      const secondaryValue = Math.min(point.value * 0.75, maxValue * 0.9);
      const y = chartHeight - (secondaryValue / maxValue) * chartHeight;
      return `${x},${y}`;
    }).join(' ');
    return `M 20,${chartHeight} L ${secondaryPointsStr} L ${chartWidth + 20},${chartHeight} Z`;
  }, [chartData, maxValue, chartHeight, chartWidth]);

  const chartColor = '#ED1D25';

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gilroy-bold text-gray-900 mb-3 sm:mb-4">
            Our Markets
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Stay informed with the data that matters, on 17,000+ markets. Get the latest news, trader sentiment, spreads, price action and much more.
          </p>
        </div>

        {/* Market Category Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 relative px-2">
          {categories.map((category, index) => (
            <React.Fragment key={category.id}>
              <button
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-medium transition-all text-xs sm:text-sm md:text-base ${
                  selectedCategory === category.id
                    ? 'bg-[#ED1D25] text-white shadow-lg'
                    : 'bg-white border-2 border-[#ED1D25] text-[#ED1D25] hover:bg-red-50'
                }`}
              >
                {category.label}
              </button>
            </React.Fragment>
          ))}
        </div>

        {/* Main Content Grid - 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column - Asset List */}
          <div className="lg:col-span-1 space-y-2 sm:space-y-3 order-2 lg:order-1">
            {filteredAssets.map((asset) => (
              <div
                key={asset.id}
                onClick={() => setSelectedAsset(asset.id)}
                className={`rounded-xl p-4 cursor-pointer transition-all ${
                  selectedAsset === asset.id
                    ? 'bg-[#ED1D25] text-white shadow-lg'
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

          {/* Middle Column - Gold Box, Sentiment Box, and Chart */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 order-1 lg:order-2">
            {/* Top Row - Gold Box and Sentiment Box Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 items-start">
              {/* Trading Controls Section (Gold Box) - Larger */}
              <div className="col-span-1 sm:col-span-1 bg-gradient-to-br from-[#ED1D25] to-[#991B1B] rounded-xl p-3 sm:p-4 lg:p-6 relative overflow-hidden">
              {/* Background pattern */}
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
                    <button className="flex-1 bg-[#ED1D25] border-2 border-white/30 rounded-full px-3 sm:px-4 py-2 sm:py-3 text-white font-bold text-xs sm:text-sm hover:bg-[#C91A1F] transition-all flex items-center justify-between gap-2" style={{ borderRadius: '50px' }}>
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
                    <button className="flex-1 bg-white border-2 border-white/30 rounded-full px-3 sm:px-4 py-2 sm:py-3 text-[#ED1D25] font-bold text-xs sm:text-sm hover:bg-gray-50 transition-all flex items-center justify-between gap-2" style={{ borderRadius: '50px' }}>
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

              {/* Market Sentiment Box (smaller, to the right) */}
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
                      <span className="text-xs" style={{ color: '#ED1D25' }}>
                        High: {selectedAssetData.high}
                      </span>
                    </div>
                </div>
                </div>
                <div className="mt-2">
                  <a href="#" className="text-[#ED1D25] hover:underline text-xs font-medium flex items-center gap-1">
                    Browse all markets
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Chart with Timeframe Buttons - Below Gold Card */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start w-full">
              {/* Chart - Aligned to start from under gold card */}
              <div style={{ marginLeft: 0, width: '100%', maxWidth: '800px' }} className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            <svg
              viewBox={`-100 -80 ${chartWidth + 150} ${chartHeight + 160}`}
              className="w-full h-64 sm:h-72 md:h-80"
              preserveAspectRatio="xMidYMid meet"
              style={{ overflow: 'visible', minWidth: '280px' }}
            >
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgb(255, 228, 228)" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="rgb(255, 129, 134)" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  
                  {/* Background gradient */}
                  <rect
                    x="20"
                    y="0"
                    width={chartWidth}
                    height={chartHeight}
                    fill="url(#chartGradient)"
                    rx="8"
                  />
                  
                  {/* Title - XAU/USD - moved above chart */}
                  <text
                    x={chartWidth / 2 + 20}
                    y="-20"
                    textAnchor="middle"
                    className="text-sm font-bold"
                    fill="#ED1D25"
                  >
                    XAU/USD
                  </text>

                  {/* Grid lines - Horizontal (Y-axis) */}
                  {[0, 20, 40, 60, 80, 100].map((value) => {
                    const y = chartHeight - (value / maxValue) * chartHeight;
                    return (
                      <line
                        key={value}
                        x1="20"
                        y1={y}
                        x2={chartWidth + 20}
                        y2={y}
                        stroke="#ED1D25"
                        strokeWidth="1"
                        strokeDasharray="2 2"
                        opacity="0.3"
                      />
                    );
                  })}

                  {/* Secondary shaded area (lighter red) */}
                  <path
                    d={secondaryAreaPath}
                    fill="#ED1D25"
                    opacity="0.2"
                  />

                  {/* Main area fill */}
                  <path
                    d={areaPath}
                    fill="#ED1D25"
                    opacity="0.3"
                  />
                  
                  {/* Main line */}
                  <polyline
                    points={points}
                    fill="none"
                    stroke={chartColor}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* X-axis labels - Months in red */}
                  {chartData.map((point, index) => {
                    const dataLength = chartData.length;
                    const x = dataLength > 1 
                      ? 20 + (index / (dataLength - 1)) * chartWidth 
                      : 20 + (index * chartWidth);
                    return (
                      <text
                        key={index}
                        x={x}
                        y={chartHeight + 20}
                        textAnchor="middle"
                        className="text-xs"
                        fill="#ED1D25"
                      >
                        {point.month}
                      </text>
                    );
                  })}

                  {/* Y-axis labels - Values in red */}
                  {[0, 20, 40, 60, 80, 100].map((value) => {
                    const y = chartHeight - (value / maxValue) * chartHeight;
                    return (
                      <text
                        key={value}
                        x="20"
                        y={y + 4}
                        textAnchor="start"
                        className="text-xs"
                        fill="#ED1D25"
                        style={{ fontSize: '12px' }}
                      >
                        {value}
                      </text>
                    );
                  })}

                  {/* Interactive points with hover tooltips */}
                  {chartData.map((point, index) => {
                    const dataLength = chartData.length;
                    // Prevent division by zero
                    const x = dataLength > 1 
                      ? 20 + (index / (dataLength - 1)) * chartWidth 
                      : 20 + (index * chartWidth);
                    const y = chartHeight - (point.value / maxValue) * chartHeight;
                    const isHovered = hoveredIndex === index;
                    // Show tooltip on hover or if point has date/price (last item with data)
                    const showTooltip = isHovered || (point.date && point.price && index === dataLength - 1);
                    
                    // Calculate tooltip position to prevent cropping
                    const tooltipWidth = 100;
                    const tooltipHeight = point.date ? 35 : 20;
                    const tooltipX = Math.max(20, Math.min(x - tooltipWidth / 2, chartWidth + 20 - tooltipWidth));
                    const tooltipY = y - tooltipHeight - 10;
                    
                    return (
                      <g key={index}>
                        {/* Hover area - smaller to prevent catching adjacent points */}
                        <circle
                          cx={x}
                          cy={y}
                          r="25"
                          fill="transparent"
                          style={{ cursor: 'pointer', pointerEvents: 'all' }}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        />
                        {/* Visible dot for better UX - no mouse events to prevent flickering */}
                        {!isHovered && (
                          <circle
                            cx={x}
                            cy={y}
                            r="3"
                            fill="#ED1D25"
                            opacity="0.6"
                            style={{ pointerEvents: 'none' }}
                          />
                        )}
                        
                        {/* Show tooltip on hover or for the default highlighted point */}
                        {showTooltip && (
                          <g style={{ pointerEvents: 'none' }}>
                            {/* Vertical line */}
                        <line
                          x1={x}
                          y1="0"
                          x2={x}
                          y2={chartHeight}
                              stroke="#ED1D25"
                          strokeWidth="2"
                              opacity="0.4"
                        />
                            {/* Purple dot */}
                        <circle
                          cx={x}
                          cy={y}
                              r="5"
                              fill="#9333EA"
                            />
                            {/* Tooltip background - positioned to prevent cropping */}
                            <rect
                              x={tooltipX}
                              y={tooltipY}
                              width={tooltipWidth}
                              height={tooltipHeight}
                              fill="#ED1D25"
                              rx="4"
                            />
                            {/* Tooltip text */}
                            {point.price && (
                              <text
                                x={x}
                                y={tooltipY + 15}
                                textAnchor="middle"
                                className="text-xs font-semibold"
                                fill="white"
                              >
                                {point.price}
                              </text>
                            )}
                            {point.date && (
                          <text
                            x={x}
                                y={tooltipY + 28}
                            textAnchor="middle"
                                className="text-xs"
                                fill="white"
                          >
                                {point.date}
                          </text>
                        )}
                            {!point.price && !point.date && (
                          <text
                            x={x}
                                y={tooltipY + 15}
                            textAnchor="middle"
                                className="text-xs font-semibold"
                                fill="white"
                          >
                                ${point.value.toFixed(2)}
                          </text>
                            )}
                          </g>
                        )}
                      </g>
                    );
                  })}
                  </svg>
                </div>

              {/* Timeframe Buttons - On the right side */}
              <div className="flex flex-row sm:flex-col gap-2 flex-shrink-0 w-full sm:w-auto overflow-x-auto sm:overflow-x-visible">
                {timeframes.map((timeframe) => (
                    <button
                    key={timeframe}
                    onClick={() => setSelectedTimeframe(timeframe)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all whitespace-nowrap ${
                      selectedTimeframe === timeframe
                        ? 'bg-[#ED1D25] text-white shadow-lg'
                        : 'bg-white border border-gray-200 text-gray-900 hover:bg-gray-50'
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

