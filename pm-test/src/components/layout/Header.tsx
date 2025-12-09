'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Dropdown } from '../ui/Dropdown';
import { cn } from '@/utils/cn';
import { useUserType } from '@/contexts/UserTypeContext';
import { NAVIGATION_ITEMS, IMAGES } from '@/constants';

export const Header: React.FC = () => {
  const { userType, setUserType } = useUserType();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const navigationItems = NAVIGATION_ITEMS;

  return (
    <header className="bg-[var(--color-background-primary)] text-[var(--color-text-black)]">
      <div className="border-b border-[var(--color-border-gray)]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="hidden sm:flex items-center gap-4 lg:gap-6">
              <button
                onClick={() => setUserType('personal')}
                className={cn(
                  'relative px-3 lg:px-4 py-2 text-xs sm:text-sm font-medium transition-colors',
                  userType === 'personal'
                    ? 'text-[var(--color-primary)]'
                    : 'text-[var(--color-text-black)] hover:text-[var(--color-text-black)]'
                )}
              >
                Personal
                {userType === 'personal' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary)] transform translate-y-[2px]"></span>
                )}
              </button>
              <button
                onClick={() => setUserType('institutional')}
                className={cn(
                  'relative px-3 lg:px-4 py-2 text-xs sm:text-sm font-medium transition-colors text-center',
                  userType === 'institutional'
                    ? 'text-[var(--color-primary)]'
                    : 'text-[var(--color-text-black)] hover:text-[var(--color-text-black)]'
                )}
              >
                Institutional
                {userType === 'institutional' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary)] transform translate-y-[2px]"></span>
                )}
              </button>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <Link href="#" className="text-[var(--color-text-black)] hover:text-[var(--color-primary)] transition-colors whitespace-nowrap hidden sm:inline">
                WebTrader
              </Link>
              <Link href="#" className="text-[var(--color-text-black)] hover:text-[var(--color-primary)] transition-colors whitespace-nowrap hidden sm:inline">
                Support
              </Link>
              <Link href="#" className="text-gray-900 hover:text-[var(--color-primary)] transition-colors whitespace-nowrap hidden md:inline">
                Open Demo
              </Link>
              <div className="flex items-center justify-center gap-2">
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
                <span className="text-xs sm:text-sm font-medium text-[var(--color-text-black)]">EN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
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

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigationItems.map((item) => (
              item.hasDropdown && item.dropdownItems ? (
                <Dropdown
                  key={item.label}
                  label={item.label}
                  items={item.dropdownItems}
                  isOpen={openDropdown === item.label}
                  onOpen={() => setOpenDropdown(item.label)}
                  onClose={() => setOpenDropdown(null)}
                  variant="desktop"
                />
              ) : (
                <Link
                  key={item.label}
                  href="#"
                  className="text-[var(--color-text-black)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
            <Link href="#" className="text-[var(--color-text-black)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-1">
              Partner with us
              <svg className="w-5 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </nav>

          <div className="flex items-center gap-3 sm:gap-6">
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
           

            <button className="hidden lg:flex w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden items-center justify-center hover:opacity-80 transition-opacity">
              <Image
                src={IMAGES.user}
                alt="User"
                width={25}
                height={25}
                className="w-full h-full object-cover rounded-full"
              />
            </button>

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

        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                item.hasDropdown && item.dropdownItems ? (
                  <Dropdown
                    key={item.label}
                    label={item.label}
                    items={item.dropdownItems}
                    isOpen={openMobileDropdown === item.label}
                    onOpen={() => setOpenMobileDropdown(item.label)}
                    onClose={() => setOpenMobileDropdown(null)}
                    variant="mobile"
                  />
                ) : (
                  <Link
                    key={item.label}
                    href="#"
                    className="text-[var(--color-text-black)] hover:text-[var(--color-primary)] transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <Link href="#" className="flex items-center justify-between text-gray-900 hover:text-[var(--color-primary)] transition-colors py-2">
                Partner with us
                <svg className="w-5 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t border-gray-200">
                <Link href="#" className="text-[var(--color-text-black)] hover:text-[var(--color-primary)] transition-colors py-2">
                  WebTrader
                </Link>
                <Link href="#" className="text-[var(--color-text-black)] hover:text-[var(--color-primary)] transition-colors py-2">
                  Support
                </Link>
                <Link href="#" className="text-[var(--color-text-black)] hover:text-[var(--color-primary)] transition-colors py-2">
                  Open Demo
                </Link>
              </div>
              
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
                <button className="w-full flex items-center justify-center gap-2 py-2 text-[var(--color-text-black)] hover:text-[var(--color-primary)] transition-colors">
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
