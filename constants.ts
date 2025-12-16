import { IndustryType, IndustryData, PricingTier } from './types';

export const LUX_GREEN = '#CCFF00';

export const INDUSTRIES_DATA: Record<IndustryType, IndustryData> = {
  [IndustryType.MOTORSPORTS]: {
    id: IndustryType.MOTORSPORTS,
    title: 'MOTORSPORTS',
    subtitle: 'Track-side Intelligence',
    description: 'Optimize lap times, manage fuel strategy, and monitor vehicle health in milliseconds. Used by top-tier racing teams globally.',
    features: ['Tire Degradation Models', 'Fuel Strategy AI', 'Real-time Telemetry', 'Driver Delta Analysis'],
    dashboardUrl: 'https://gr86strategy.netlify.app/'
  },
  [IndustryType.FLEET]: {
    id: IndustryType.FLEET,
    title: 'FLEET OPS',
    subtitle: 'Global Logistics Visibility',
    description: 'Monitor thousands of assets simultaneously with predictive maintenance alerts and route optimization.',
    features: ['Predictive Maintenance', 'Fuel Efficiency Tracking', 'Driver Behavior Analysis', 'Global GPS Tracking'],
    dashboardUrl: 'https://luxopsfleet.netlify.app/'
  },
  [IndustryType.AERIAL]: {
    id: IndustryType.AERIAL,
    title: 'AERIAL SYSTEMS',
    subtitle: 'Drone & UAV Command',
    description: 'Unified command and control for UAV swarms and single-unit drone operations requiring low-latency data links.',
    features: ['3D Flight Path Visualization', 'Battery Health Monitoring', 'Swarm Coordination', 'Payload Data Stream'],
    dashboardUrl: 'https://luxopsaerial.netlify.app/'
  },
  [IndustryType.EVENTS]: {
    id: IndustryType.EVENTS,
    title: 'LIVE EVENTS',
    subtitle: 'Crowd & Venue Analytics',
    description: 'Real-time density mapping and resource allocation for large-scale festivals, concerts, and sporting events.',
    features: ['Crowd Density Heatmaps', 'Security Response Times', 'Queue Management', 'Access Control Logs'],
    dashboardUrl: 'https://luxopsevents.netlify.app/'
  }
};

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'STUDIO',
    price: '£99',
    period: '/month',
    features: [
      'Single User',
      'Offline Data Only',
      '1 Fixed Template',
      'Community Support'
    ],
    ctaText: 'START STUDIO'
  },
  {
    name: 'PROFESSIONAL',
    price: '£1,500',
    period: '/month',
    features: [
      'Up to 10 Users',
      'Real-time Live Data',
      '500,000 API Calls/Mo',
      'Custom Branding',
      'Priority Support'
    ],
    recommended: true,
    ctaText: 'START PROFESSIONAL'
  },
  {
    name: 'ENTERPRISE',
    price: '£5,000+',
    period: '/month',
    features: [
      'Unlimited Users',
      'Unlimited API Calls',
      'White-label',
      'Dedicated Account Manager',
      '4hr SLA Support'
    ],
    ctaText: 'CONTACT SALES'
  }
];