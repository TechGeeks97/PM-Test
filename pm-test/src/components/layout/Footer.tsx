'use client';

import React from 'react';
import Image from 'next/image';
import { FOOTER_LINKS, SOCIAL_ICONS, PAYMENT_METHODS, IMAGES, FOOTER_CONTENT } from '@/constants';

export const Footer: React.FC = () => {
  const { quickLinks, supportLinks, companyLinks } = FOOTER_LINKS;
  const socialIcons = SOCIAL_ICONS;
  const paymentMethods = PAYMENT_METHODS;

  return (
    <footer className="bg-black text-white">
      {/* Payment Methods Section */}
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              className="relative cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center w-[70px] h-[20px] sm:w-[90px] sm:h-[24px] md:w-[105px] md:h-[28px] lg:w-[119px] lg:h-[32px]"
              style={{
                minWidth: '70px',
                minHeight: '20px',
              }}
            >
              <Image
                src={method.image}
                alt={method.name}
                width={80}
                height={22}
                className="w-[90%] h-full object-contain"
                style={{
                  objectFit: 'contain',
                }}
                unoptimized={method.name === 'Apple Pay'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t border-gray-400"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Logo, Disclaimer, Social */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4 sm:space-y-6 text-center sm:text-left">
            {/* Logo */}
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Image
                src={IMAGES.logoWhite}
                alt="Premier Markets"
                width={160}
                height={40}
                className="h-8 sm:h-10 w-32 sm:w-40 object-contain"
                priority
              />
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-400 leading-relaxed max-w-md mx-auto sm:mx-0">
              {FOOTER_CONTENT.disclaimer}
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="social-icon-link w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black border border-white flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 relative social-icon-wrapper">
                    <Image
                      src={social.image}
                      alt={social.name}
                      fill
                      className="object-contain social-icon-img"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-[#ED1D25] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h3>
            <ul className="space-y-2 sm:space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-[#ED1D25] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-[#ED1D25] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t border-gray-400"></div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="space-y-4 sm:space-y-6">
          {/* Disclaimer */}
          <p className="text-xs text-gray-400 leading-relaxed max-w-4xl mx-auto text-center px-2">
            {FOOTER_CONTENT.disclaimer}
          </p>

          {/* Company Registration Info */}
          <p className="text-xs text-gray-400 leading-relaxed max-w-4xl mx-auto text-center px-2">
            {FOOTER_CONTENT.companyInfo}
          </p>

          {/* Separator Line above Copyright */}
          <div className="border-t border-gray-400 pt-4 sm:pt-6"></div>

          {/* Copyright */}
          <p className="text-xs text-gray-400 text-center">
            {FOOTER_CONTENT.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

