'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { TESTIMONIALS_DATA, TESTIMONIALS_CONFIG, TESTIMONIALS_CONTENT, IMAGES } from '@/constants';
import type { Testimonial } from '@/types';

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const Testimonials: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedTestimonials, setExpandedTestimonials] = useState<Record<string, boolean>>({});
  const { itemsPerPage, maxLength } = TESTIMONIALS_CONFIG;
  const { heading, description } = TESTIMONIALS_CONTENT;
  
  const allTestimonials: Testimonial[] = TESTIMONIALS_DATA;

  const testimonials = useMemo(() => shuffleArray(allTestimonials), []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, endIndex);
  
  const canGoNext = currentPage < totalPages - 1;
  const canGoPrev = currentPage > 0;

  const handleNext = () => {
    if (canGoNext) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedTestimonials((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'headphone':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5c-.55 0-1-.45-1-1v-2c0-4.42 3.58-8 8-8s8 3.58 8 8v2c0 .55-.45 1-1 1h-4v8h4c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" />
          </svg>
        );
      case 'email':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        );
      case 'earth':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.52-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24 pb-24 sm:pb-32 lg:pb-40 overflow-visible relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.gradientTestimonials}
          alt="Testimonials Gradient Background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-8 sm:mb-12 text-center">
          <div className="flex flex-col items-center gap-3 sm:gap-4 mb-4">
            <div className="w-full">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gilroy-bold text-gray-900 mb-3 sm:mb-4">
                <span className="block">{heading.line1} <span className="text-[var(--color-primary)]">{heading.highlight}</span> {heading.line2}</span>
                <span className="block">{heading.line3}</span>
              </h2>
              <p className="text-sm sm:text-base font-normal max-w-3xl mx-auto px-4" style={{ color: '#A8A6B1' }}>
                <span className="block">{description.line1}</span>
                <span className="block">{description.line2}</span>
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                disabled={!canGoPrev}
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                  canGoPrev
                    ? 'bg-gray-200 hover:bg-gray-300 cursor-pointer text-gray-700'
                    : 'bg-gray-100 cursor-not-allowed text-gray-400'
                }`}
                aria-label="Previous testimonials"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <span className="text-sm font-medium text-gray-700 min-w-[60px] text-center">
                {currentPage + 1} / {totalPages}
              </span>
              
              <button
                onClick={handleNext}
                disabled={!canGoNext}
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
                  canGoNext
                    ? 'bg-gray-200 hover:bg-gray-300 cursor-pointer text-gray-700'
                    : 'bg-gray-100 cursor-not-allowed text-gray-400'
                }`}
                aria-label="Next testimonials"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="relative pb-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            
            {currentTestimonials.map((testimonial, index) => {
              return (
              <div
                key={testimonial.id}
                className="rounded-xl p-[1px] transition-all duration-300 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(180deg, #FFC4C6 0%, #FFC8CA 100%)',
                }}
              >
                <div className="bg-white rounded-[11px] p-6 flex flex-col">
                  <div className="mb-6">
                    <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                      {expandedTestimonials[testimonial.id] || testimonial.review.length <= maxLength
                        ? testimonial.review
                        : `${testimonial.review.substring(0, maxLength)}...`}
                    </p>
                    {testimonial.review.length > maxLength && (
                      <button
                        onClick={() => toggleExpand(testimonial.id)}
                        className="text-[var(--color-primary)] text-sm font-medium mt-2 hover:underline"
                      >
                        {expandedTestimonials[testimonial.id] ? 'Read less' : 'Read more'}
                      </button>
                    )}
                  </div>

                  <div 
                    className="mb-4 h-[1px]"
                    style={{
                      background: 'linear-gradient(180deg, #FFC4C6 0%, #FFC8CA 100%)',
                    }}
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                        {testimonial.initials}
                      </div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">
                        {testimonial.name}
                      </div>
                    </div>
                    <div className="text-[var(--color-primary)] flex-shrink-0">
                      {getIcon(testimonial.icon)}
                    </div>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
