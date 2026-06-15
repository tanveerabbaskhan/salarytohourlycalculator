/**
 * Site Configuration
 * Global SEO and metadata configuration
 */

export const SITE_CONFIG = {
  // Base URL for the website
  // Auto-detects Vercel/Cloudflare URLs, or use PUBLIC_SITE_URL env var to override
  // Falls back to production domain
  baseUrl: import.meta.env.PUBLIC_SITE_URL 
    || (import.meta.env.VERCEL_URL ? `https://${import.meta.env.VERCEL_URL}` : null)
    || (import.meta.env.CF_PAGES_URL ? `https://${import.meta.env.CF_PAGES_URL}` : null)
    || 'https://salarytohourly.com',
  
  // Brand information
  siteName: 'Salary to Hourly Calculator',
  siteDescription: 'Free multilingual salary to hourly wage calculator. Convert annual, monthly, weekly, daily salaries instantly.',
  
  // Organization
  organization: {
    name: 'Salary Calculator Hub',
    logo: 'https://salarytohourly.com/logo.svg',
    url: 'https://salarytohourly.com',
    sameAs: [
      'https://twitter.com/salaryhubcalc',
      'https://facebook.com/salaryhubcalc',
    ],
  },
  
  // Contact
  contact: {
    email: 'support@salarytohourly.com',
    phone: '',
  },
  
  // SEO
  socialImage: 'https://salarytohourly.com/og-image.png',
  twitterHandle: '@salaryhubcalc',
  
  // Analytics
  googleAnalyticsId: '',
  googleSearchConsoleId: '',
  
  // AdSense
  adsenseClientId: '',
  
  // Performance
  enableCaching: true,
  cacheMaxAge: 3600, // 1 hour
};

/**
 * Default metadata structure
 */
export interface PageMetadata {
  title: string;
  description: string;
  canonical?: string;
  og?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  robots?: string;
  viewport?: string;
  charset?: string;
}

/**
 * Get full URL
 */
export function getFullUrl(path: string, baseUrl: string = SITE_CONFIG.baseUrl): string {
  return `${baseUrl.replace(/\/$/, '')}${path}`;
}

/**
 * Get robots directive for page
 */
export function getRobotsDirective(
  index: boolean = true,
  follow: boolean = true
): string {
  const directives = [];
  directives.push(index ? 'index' : 'noindex');
  directives.push(follow ? 'follow' : 'nofollow');
  return directives.join(', ');
}
