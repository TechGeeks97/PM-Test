'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { cn } from '@/utils/cn';
import { useUserType } from '@/contexts/UserTypeContext';
import { NAVIGATION_ITEMS, IMAGES, colors } from '@/constants';

export const Header: React.FC = () => {
  const { userType, setUserType } = useUserType();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  // Import navigation items from constants
  const navigationItems = NAVIGATION_ITEMS;

  return (
    <header className="bg-white text-[#010205]">
      {/* Top Tabs Bar */}
      <div className="border-b border-[#C9C9C9]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Left Side - Tabs */}
            <div className="hidden sm:flex items-center gap-4 lg:gap-6">
              <button
                onClick={() => setUserType('personal')}
                className={cn(
                  'relative px-3 lg:px-4 py-2 text-xs sm:text-sm font-medium transition-colors',
                  userType === 'personal'
                    ? 'text-[#ED1D25]'
                    : 'text-[#010205] hover:text-[#010205]'
                )}
              >
                Personal
                {/* Bottom indicator on divider */}
                {userType === 'personal' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ED1D25] transform translate-y-[2px]"></span>
                )}
              </button>
              <button
                onClick={() => setUserType('institutional')}
                className={cn(
                  'relative px-3 lg:px-4 py-2 text-xs sm:text-sm font-medium transition-colors text-center',
                  userType === 'institutional'
                    ? 'text-[#ED1D25]'
                    : 'text-[#010205] hover:text-[#010205]'
                )}
              >
                Institutional
                {/* Bottom indicator on divider */}
                {userType === 'institutional' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ED1D25] transform translate-y-[2px]"></span>
                )}
              </button>
            </div>

            {/* Right Side - WebTrader, Support, Open Demo, Language */}
            <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <a href="#" className="text-[#010205] hover:text-[#ED1D25] transition-colors whitespace-nowrap hidden sm:inline">
                WebTrader
              </a>
              <a href="#" className="text-[#010205] hover:text-[#ED1D25] transition-colors whitespace-nowrap hidden sm:inline">
                Support
              </a>
              <a href="#" className="text-gray-900 hover:text-[#ED1D25] transition-colors whitespace-nowrap hidden md:inline">
                Open Demo
              </a>
              <div className="flex items-center justify-center gap-2">
                {/* UK Flag */}
                <div 
                  className="relative flex-shrink-0 overflow-hidden rounded-full"
                  style={{ 
                    width: '20px', 
                    height: '20px',
                    minWidth: '20px',
                    minHeight: '20px'
                  }}
                >
              <Image
                src={IMAGES.flag}
                alt="UK Flag"
                fill
                className="object-cover"
                style={{ borderRadius: '50%' }}
              />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#010205]">EN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src={IMAGES.logo}
              alt="Premier Markets"
              width={160}
              height={40}
              className="w-32 sm:w-40 h-auto object-contain"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 text-[#010205] hover:text-[#ED1D25] transition-colors"
                >
                  {item.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {openDropdown === item.label && item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {item.dropdownItems?.map((dropdownItem, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-sm text-[#010205] hover:bg-gray-50 hover:text-[#ED1D25] transition-colors"
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="#" className="text-[#010205] hover:text-[#ED1D25] transition-colors flex items-center gap-1">
              Partner with us
              <svg className="w-5 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Desktop Register Button - Only visible on lg and above */}
            <Button 
              variant="primary" 
              className="hidden lg:inline-flex rounded-full"
              style={{ 
                width: '101px', 
                height: '39px',
                minWidth: '101px',
                minHeight: '39px',
                padding: '0',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '100px'
              }}
            >
              Register
            </Button>
           

            {/* Desktop User Icon - Only visible on lg and above */}
            <button className="hidden lg:flex w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden items-center justify-center hover:opacity-80 transition-opacity">
              <Image
                src={IMAGES.user}
                alt="User"
                width={25}
                height={25}
                className="w-full h-full object-cover rounded-full"
              />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)}
                    className="flex items-center justify-between text-[#010205] hover:text-[#ED1D25] transition-colors py-2 w-full"
                  >
                    {item.label}
                    <svg 
                      className={`w-4 h-4 transition-transform ${openMobileDropdown === item.label ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Mobile Dropdown */}
                  {openMobileDropdown === item.label && item.hasDropdown && item.dropdownItems && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block py-2 text-sm text-gray-600 hover:text-[#ED1D25] transition-colors"
                        >
                          {dropdownItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href="#" className="flex items-center justify-between text-gray-900 hover:text-[#ED1D25] transition-colors py-2">
                Partner with us
                <svg className="w-5 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
                <a href="#" className="text-[#010205] hover:text-[#ED1D25] transition-colors py-2">
                  WebTrader
                </a>
                <a href="#" className="text-[#010205] hover:text-[#ED1D25] transition-colors py-2">
                  Support
                </a>
                <a href="#" className="text-[#010205] hover:text-[#ED1D25] transition-colors py-2">
                  Open Demo
                </a>
              </div>
              
              {/* Mobile Register Button and User Icon */}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <Button 
                  variant="primary" 
                  className="w-full rounded-full"
                  style={{ 
                    height: '39px',
                    padding: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '100px'
                  }}
                >
                  Register
                </Button>
                <button className="w-full flex items-center justify-center gap-2 py-2 text-[#010205] hover:text-[#ED1D25] transition-colors">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                    <Image
                      src={IMAGES.user}
                      alt="User"
                      width={25}
                      height={25}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="text-sm font-medium">Account</span>
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

