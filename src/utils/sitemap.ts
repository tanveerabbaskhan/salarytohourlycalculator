/**
 * Sitemap Generation Utility
 * Generates XML sitemaps for all languages
 */

import { SUPPORTED_LANGUAGES } from '../config/languages';
import { getPagePaths } from '../config/paths';
import { SITE_CONFIG, getFullUrl } from '../config/site';

const IMPORTANT_PAGES = [
  '/about/',
  '/faq/',
  '/privacy/',
  '/terms/',
  '/contact/',
];

export interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

/**
 * Generate sitemap entries for all language versions
 */
export function generateSitemapEntries(baseUrl: string = SITE_CONFIG.baseUrl): SitemapEntry[] {
  const entries: SitemapEntry[] = [];
  const lastmod = new Date().toISOString().split('T')[0];

  // Add homepage
  entries.push({
    loc: baseUrl,
    lastmod,
    changefreq: 'daily',
    priority: '1.0',
  });

  // Add localized homepages for each language.
  SUPPORTED_LANGUAGES.filter(language => language !== 'en').forEach(language => {
    const pagePaths = getPagePaths(language);
    const url = getFullUrl(pagePaths.home, baseUrl);

    entries.push({
      loc: url,
      lastmod,
      changefreq: 'daily',
      priority: '0.9',
    });

    entries.push({
      loc: getFullUrl(`/${language}/about/`, baseUrl),
      lastmod,
      changefreq: 'monthly',
      priority: '0.6',
    });
  });

  IMPORTANT_PAGES.forEach(path => {
    entries.push({
      loc: getFullUrl(path, baseUrl),
      lastmod,
      changefreq: 'monthly',
      priority: '0.6',
    });
  });

  return entries;
}

/**
 * Generate XML sitemap content
 */
export function generateSitemapXml(entries: SitemapEntry[]): string {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">';
  const urlsetClose = '</urlset>';

  const urls = entries
    .map(entry => {
      return `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`;
    })
    .join('\n');

  return `${xmlHeader}\n${urlsetOpen}\n${urls}\n${urlsetClose}`;
}

/**
 * Generate sitemap index for language-specific sitemaps
 */
export function generateSitemapIndex(baseUrl: string = SITE_CONFIG.baseUrl): string {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const sitemapindexOpen = '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const sitemapindexClose = '</sitemapindex>';

  const sitemaps = SUPPORTED_LANGUAGES.map(language => {
    const url = `${baseUrl.replace(/\/$/, '')}/sitemaps/${language}.xml`;
    return `  <sitemap>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>`;
  }).join('\n');

  return `${xmlHeader}\n${sitemapindexOpen}\n${sitemaps}\n${sitemapindexClose}`;
}

/**
 * Generate language-specific sitemap
 */
export function generateLanguageSitemap(
  language: string,
  baseUrl: string = SITE_CONFIG.baseUrl
): string {
  const lastmod = new Date().toISOString().split('T')[0];
  const pagePaths = getPagePaths(language);
  const url = getFullUrl(pagePaths.home, baseUrl);

  const entries: SitemapEntry[] = [
    {
      loc: url,
      lastmod,
      changefreq: 'daily',
      priority: '0.9',
    },
  ];

  if (language !== 'en') {
    entries.push({
      loc: getFullUrl(`/${language}/about/`, baseUrl),
      lastmod,
      changefreq: 'monthly',
      priority: '0.6',
    });
  }

  return generateSitemapXml(entries);
}

/**
 * Escape XML special characters
 */
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
