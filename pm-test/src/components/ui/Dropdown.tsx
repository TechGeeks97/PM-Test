'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';

interface DropdownProps {
  label: string;
  items:readonly string[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  variant?: 'desktop' | 'mobile';
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  items,
  isOpen,
  onOpen,
  onClose,
  variant = 'desktop',
  className,
}) => {
  if (variant === 'desktop') {
    return (
      <div
        className="relative"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        <button
          className={cn(
            "flex items-center gap-1 text-[var(--color-text-black)] hover:text-[var(--color-primary)] transition-colors",
            className
          )}
        >
          {label}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-[var(--color-background-primary)] rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            {items.map((item, index) => (
              <Link
                key={index}
                href="#"
                className="block px-4 py-2 text-sm text-[var(--color-text-black)] hover:bg-gray-50 hover:text-[var(--color-primary)] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => isOpen ? onClose() : onOpen()}
        className={cn(
          "flex items-center justify-between text-[var(--color-text-black)] hover:text-[var(--color-primary)] transition-colors py-2 w-full",
          className
        )}
      >
        {label}
        <svg 
          className={cn("w-4 h-4 transition-transform", isOpen ? 'rotate-180' : '')}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
          {items.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="block py-2 text-sm text-gray-600 hover:text-[var(--color-primary)] transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

