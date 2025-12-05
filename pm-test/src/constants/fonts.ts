/**
 * Font Configuration
 * 
 * This file contains the font configuration for the application.
 * Update the font family here to change fonts globally.
 * 
 * Available Google Fonts: https://fonts.google.com/
 * 
 * To change the font:
 * 1. Update the 'name' field below
 * 2. Update the import in app/layout.tsx to match the font name
 * 3. The font will be applied globally across the application
 */

export const fontConfig = {
  // Primary font family - used for body text and most content
  name: 'Urbanist',
  
  // Font weights to load (100-900)
  weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  
  // Font styles to load
  styles: ['normal', 'italic'] as const,
  
  // Font subsets to load
  subsets: ['latin'] as const,
  
  // Display strategy for better performance
  display: 'swap' as const,
  
  // CSS variable name
  cssVariable: '--font-primary',
  
  // Fallback fonts (used if font fails to load)
  fallback: {
    sans: ['Arial', 'Helvetica', 'sans-serif'],
    mono: ['Courier New', 'monospace'],
  },
} as const;

export type FontConfig = typeof fontConfig;

