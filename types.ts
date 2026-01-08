export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export enum IndustryType {
  MOTORSPORTS = 'motorsports',
  FLEET = 'fleet',
  AERIAL = 'aerial',
  CUSTOM = 'custom'
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
  ctaText: string;
}

export interface IndustryData {
  id: IndustryType;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  dashboardUrl?: string; // Optional URL for the iframe
}