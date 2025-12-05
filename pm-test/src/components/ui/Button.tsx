'use client';

import React from 'react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const baseStyles = 'font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-[#ED1D25] text-white hover:bg-[#C91A1F] focus:ring-[#ED1D25]',
    secondary: 'bg-white text-[#ED1D25] hover:bg-gray-50 focus:ring-[#ED1D25]',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-[#ED1D25] focus:ring-white',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm rounded-full',
    md: 'px-6 py-3 text-base rounded-full',
    lg: 'px-8 py-4 text-lg rounded-full',
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

