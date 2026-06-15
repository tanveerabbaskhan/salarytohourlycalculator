/**
 * Language-Specific Sitemaps
 * Generates individual sitemaps for each language
 */

import { SUPPORTED_LANGUAGES } from '../../config/languages';
import { generateLanguageSitemap } from '../../utils/sitemap';
import { SITE_CONFIG } from '../../config/site';
import type { APIContext } from 'astro';

export async function getStaticPaths() {
  return SUPPORTED_LANGUAGES.map((language) => ({
    params: { lang: language },
    props: { language },
  }));
}

export async function GET(context: APIContext) {
  const { lang } = context.params as { lang: string };

  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    return new Response('Not found', { status: 404 });
  }

  const sitemapXml = generateLanguageSitemap(lang, SITE_CONFIG.baseUrl);

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
