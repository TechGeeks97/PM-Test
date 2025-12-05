/**
 * Global Color System
 * 
 * This file contains all color definitions for the application.
 * Modify colors here to update the entire application theme.
 */

export const colors = {
  // Primary Brand Colors
  primary: {
    main: '#ED1D25',      // Red - Main brand color
    dark: '#C91A1F',      // Darker red for hover states
    light: '#F03A42',     // Lighter red for accents
    gradient: 'linear-gradient(135deg, #ED1D25 0%, #991B1B 100%)',
  },

  // Secondary Colors
  secondary: {
    main: '#1F2937',      // Dark gray/black
    dark: '#111827',      // Very dark
    light: '#374151',     // Medium gray
  },

  // Background Colors
  background: {
    primary: '#FFFFFF',   // White
    secondary: '#F9FAFB', // Light gray
    dark: '#000000',      // Black
    darkSecondary: '#0F0F0F', // Dark gray
    red: '#ED1D25',       // Red background
    redGradient: 'linear-gradient(135deg, #ED1D25 0%, #991B1B 100%)',
  },

  // Text Colors
  text: {
    primary: '#FFFFFF',   // White text
    secondary: '#9CA3AF', // Gray text
    dark: '#111827',      // Dark text
    light: '#F3F4F6',     // Light gray text
  },

  // Accent Colors
  accent: {
    red: '#ED1D25',
    green: '#10B981',     // For positive values
    redNegative: '#EF4444', // For negative values
    blue: '#3B82F6',      // For links/info
  },

  // Border Colors
  border: {
    light: '#E5E7EB',     // Light border
    dark: '#374151',      // Dark border
    red: '#ED1D25',       // Red border
  },

  // Status Colors
  status: {
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
  },
} as const;

export type ColorTheme = typeof colors;

