/**
 * Global Type Definitions
 * All TypeScript interfaces and types used across the application
 */

export interface MarketData {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  price: string;
  change: string;
  trend: 'up' | 'down';
}

export interface MarketAsset {
  id: string;
  name: string;
  symbol: string;
  logo: string;
  price: string;
  buyPrice: string;
  sellPrice: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
  category: string;
  buyers: number;
  sellers: number;
  low: string;
  high: string;
}

export interface MarketCategory {
  id: string;
  label: string;
}

export interface ChartDataPoint {
  month: string;
  value: number;
  date?: string;
  price?: string;
}

export interface NavigationItem {
  label: string;
  hasDropdown: boolean;
  dropdownItems?: string[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

export interface MarketCard {
  icon: string;
  title: string;
  description: string;
}

export interface EmpowerTradingFeature {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  backgroundImage?: string;
}

export interface WithdrawalFeature {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
}

export type TestimonialIcon = 'headphone' | 'email' | 'earth';

export interface Testimonial {
  id: string;
  review: string;
  name: string;
  initials: string;
  icon: TestimonialIcon;
}

export interface ButtonVariant {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'sm' | 'md' | 'lg';
}

export interface SocialIcon {
  name: string;
  image: string;
  href: string;
}

export interface PaymentMethod {
  name: string;
  image: string;
}

export interface PromotionalStep {
  image: string;
  label: string;
}

export type UserType = 'personal' | 'institutional';

