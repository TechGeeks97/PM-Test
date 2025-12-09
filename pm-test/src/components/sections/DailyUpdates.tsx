'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface DailyUpdatesProps {
  videoUrl?: string;
}

export const DailyUpdates: React.FC<DailyUpdatesProps> = ({ 
  videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Default video URL, can be passed as prop
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const articleId = 'gulf-markets-mixed-ukraine-ceasefire'; // Article ID for URL
  const articleUrl = `/articles/${articleId}`;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const getThumbnailUrl = () => {
    if (!videoUrl) {
      return '/images/media bg-cover.png';
    }
    
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
      const videoId = videoUrl.includes('youtube.com/watch?v=')
        ? videoUrl.split('v=')[1]?.split('&')[0]
        : videoUrl.includes('youtu.be/')
        ? videoUrl.split('youtu.be/')[1]?.split('?')[0]
        : null;
      
      if (videoId) {
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      }
    }
    
    return '/images/media bg-cover.png';
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        
        <div className="mb-8 sm:mb-12">
          <div className="mb-6 sm:mb-8">
            <p className="text-[var(--color-primary)] mb-3 sm:mb-4 text-sm sm:text-base font-semibold" style={{ lineHeight: '24px' }}>
              Daily Updates
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <h2 className="text-gray-900 font-gilroy-bold" style={{ fontWeight: 400, fontSize: 'clamp(28px, 5vw, 48px)', lineHeight: '1.1', letterSpacing: '-0.01em' }}>
                Everything you need to trade the markets
              </h2>
              <Link href="#" className="text-[var(--color-primary)] hover:underline whitespace-nowrap text-sm sm:text-base font-semibold" style={{ lineHeight: '24px' }}>
                View all →
              </Link>
            </div>
          </div>
        </div>

        
        <div className="grid lg:grid-cols-[1fr_2fr] gap-4 sm:gap-6 mb-8 sm:mb-12">
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-xs mx-auto lg:mx-0 flex flex-col" style={{ minHeight: '300px', height: 'auto' }}>
            
            <div className="relative flex-shrink-0" style={{ height: '100px', minHeight: '100px' }}>
              <Image
                src="/images/dailyupdatescover.png"
                alt="Daily Updates Cover"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            
            <div className="p-3 sm:p-4 flex flex-col flex-1" style={{ minHeight: 0 }}>
              <p className="text-xs sm:text-sm mb-1" style={{ color: '#BDBDBD' }}>03 October 2025</p>
              <h3 className="text-sm sm:text-base font-bold mb-2" style={{ color: '#737373' }}>
                Gulf markets end mixed on Ukraine ceasefire hopes, tariff fears
              </h3>
              <p className="text-gray-600 leading-relaxed text-xs mb-2 flex-1 overflow-hidden">
                Stock markets in the Gulf ended mixed on Wednesday, buoyed by Ukraine's readiness to support a proposal for...
              </p>
              <Link 
                href={articleUrl}
                className="text-[var(--color-primary)] hover:underline font-medium text-xs cursor-pointer flex-shrink-0"
              >
                Read more
              </Link>
            </div>
          </div>

          
          <div className="relative w-full">
            {!isPlaying ? (
              <div className="relative cursor-pointer group w-full" onClick={handlePlay}>
                
                <div className="relative w-full" style={{ height: '250px', minHeight: '250px' }}>
                  <Image
                    src={getThumbnailUrl()}
                    alt="Premier Markets Trading Platform"
                    fill
                    className="object-cover rounded-xl sm:rounded-[20px]"
                    unoptimized
                  />
                  
                  
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all rounded-xl sm:rounded-[20px]">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[var(--color-primary)] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative w-full rounded-xl sm:rounded-[20px] overflow-hidden bg-black" style={{ height: '250px', minHeight: '250px' }}>
                {videoUrl && (
                  <ReactPlayer
                    url={videoUrl}
                    playing={true}
                    controls={true}
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: 0, left: 0 }}
                    config={{
                      youtube: {
                        playerVars: {
                          autoplay: 1,
                          controls: 1,
                          modestbranding: 1,
                        },
                      },
                    }}
                  />
                )}
              </div>
            )}
          </div>
        </div>

        
        <div className="relative rounded-xl overflow-hidden shadow-2xl w-full" style={{ minHeight: '200px', aspectRatio: 'auto' }}>
          
          <div className="absolute inset-0">
            <Image
              src="/images/media bg-cover.png"
              alt="Media Background"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          
          
          <div className="absolute inset-0 z-10 p-4 sm:p-6 lg:p-8 flex items-center">
            <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-6 items-center w-full">
              
              <div className="relative flex-1 text-center lg:text-left">
                <h3 className="text-base sm:text-lg md:text-xl font-gilroy-bold text-white mb-2">
                  Premier Market - Market Cap Weighted PR (BKP)
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-white mb-2 sm:mb-3 leading-relaxed">
                  <span className="block">Stay ahead of the latest tech trends with our algorithmically selected</span>
                  <span className="block">portfolio of the 15 top tech stocks each month.</span>
                </p>
                <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
                  <span className="text-gray-300 text-xs">Google</span>
                  <span className="text-gray-300 text-xs">Trending</span>
                  <span className="text-gray-300 text-xs">investing.com</span>
                </div>
              </div>

              
              <div className="flex justify-center lg:justify-end flex-shrink-0">
                <div className="relative w-20 h-[140px] sm:w-24 sm:h-[180px] lg:w-40 lg:h-[220px]">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
