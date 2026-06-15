import { generateSitemapEntries, generateSitemapXml } from '../utils/sitemap';
import { SITE_CONFIG } from '../config/site';

export async function GET() {
  const sitemapXml = generateSitemapXml(generateSitemapEntries(SITE_CONFIG.baseUrl));

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
