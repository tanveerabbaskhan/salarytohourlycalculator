/**
 * SEO Utilities
 * Functions for generating SEO-related data and metadata
 */

import { SITE_CONFIG, getFullUrl } from '../config/site';
import { LANGUAGES, getLanguageConfig } from '../config/languages';
import { getPagePaths } from '../config/paths';
import type { PageMetadata } from '../config/site';

/**
 * Generate hreflang links for all language versions
 */
export function generateHreflangLinks(
  _slug: string,
  _currentLanguage: string,
  baseUrl: string = SITE_CONFIG.baseUrl
) {
  const links = [];

  // Add language versions
  Object.keys(LANGUAGES).forEach(lang => {
    const langConfig = getLanguageConfig(lang);
    const pagePaths = getPagePaths(lang);
    const path = lang === 'en' ? '/' : pagePaths.calculator;
    const url = getFullUrl(path, baseUrl);

    links.push({
      rel: 'alternate',
      hrefLang: langConfig.hreflangCode,
      href: url,
    });
  });

  // Add x-default
  const defaultUrl = getFullUrl('/', baseUrl);
  links.push({
    rel: 'alternate',
    hrefLang: 'x-default',
    href: defaultUrl,
  });

  return links;
}

/**
 * Generate structured data for calculator page
 */
export function generateCalculatorSchema(
  language: string,
  baseUrl: string = SITE_CONFIG.baseUrl
) {
  const pagePaths = getPagePaths(language);
  const langConfig = getLanguageConfig(language);

  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: pagePaths.title,
    description: pagePaths.metaDescription,
    url: getFullUrl(pagePaths.calculator, baseUrl),
    applicationCategory: 'UtilityApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    inLanguage: langConfig.locale,
    browserRequirements: 'Requires JavaScript. Requires HTML5 support.',
    operatingSystem: 'Windows, macOS, Linux, iOS, Android',
  };
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate organization schema
 */
export function generateOrganizationSchema(baseUrl: string = SITE_CONFIG.baseUrl) {
  const org = SITE_CONFIG.organization;

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: org.name,
    url: baseUrl,
    logo: org.logo,
    sameAs: org.sameAs,
    description: SITE_CONFIG.siteDescription,
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE_CONFIG.contact.email,
      contactType: 'Customer Service',
    },
  };
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
  baseUrl: string = SITE_CONFIG.baseUrl
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getFullUrl(item.url, baseUrl),
    })),
  };
}

/**
 * Generate website schema
 */
export function generateWebsiteSchema(baseUrl: string = SITE_CONFIG.baseUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.siteName,
    url: baseUrl,
    description: SITE_CONFIG.siteDescription,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate article schema
 */
export function generateArticleSchema(
  title: string,
  description: string,
  content: string,
  datePublished: Date,
  dateModified: Date,
  author: string = SITE_CONFIG.organization.name,
  baseUrl: string = SITE_CONFIG.baseUrl
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    articleBody: content,
    datePublished: datePublished.toISOString(),
    dateModified: dateModified.toISOString(),
    author: {
      '@type': 'Organization',
      name: author,
      url: baseUrl,
    },
    image: SITE_CONFIG.socialImage,
  };
}

/**
 * Generate complete page metadata
 */
export function generatePageMetadata(
  title: string,
  description: string,
  canonicalPath: string,
  _language: string = 'en',
  baseUrl: string = SITE_CONFIG.baseUrl
): PageMetadata {
  const canonicalUrl = getFullUrl(canonicalPath, baseUrl);

  return {
    title,
    description,
    canonical: canonicalUrl,
    robots: 'index, follow',
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1.0',
    og: {
      title,
      description,
      image: SITE_CONFIG.socialImage,
      url: canonicalUrl,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image: SITE_CONFIG.socialImage,
    },
  };
}

/**
 * Generate robots.txt entries
 */
export function generateRobotsTxContent(baseUrl: string = SITE_CONFIG.baseUrl): string {
  return `User-agent: *
Allow: /

Sitemap: ${getFullUrl('/sitemap.xml', baseUrl)}
`;
}

/**
 * Generate sitemap entry
 */
export function generateSitemapEntry(
  loc: string,
  lastmod: Date,
  changefreq: string = 'weekly',
  priority: number = 0.8
) {
  return {
    loc,
    lastmod: lastmod.toISOString().split('T')[0],
    changefreq,
    priority,
  };
}

/**
 * Generate language alternates for page
 */
export function generateLanguageAlternates(
  _currentPath: string,
  baseUrl: string = SITE_CONFIG.baseUrl
) {
  const alternates: Record<string, string> = {};

  Object.keys(LANGUAGES).forEach(lang => {
    const pagePaths = getPagePaths(lang);
    alternates[lang] = getFullUrl(pagePaths.calculator, baseUrl);
  });

  return alternates;
}

/**
 * Generate canonical URL
 */
export function getCanonicalUrl(
  languageCode: string,
  baseUrl: string = SITE_CONFIG.baseUrl
): string {
  const pagePaths = getPagePaths(languageCode);
  return getFullUrl(pagePaths.calculator, baseUrl);
}
