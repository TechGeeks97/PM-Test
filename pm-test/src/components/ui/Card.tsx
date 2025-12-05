'use client';

import React from 'react';
import { cn } from '@/utils/cn';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-lg p-6 transition-all duration-200',
        onClick && 'cursor-pointer hover:shadow-xl hover:-translate-y-1',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

