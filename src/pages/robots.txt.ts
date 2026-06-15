/**
 * robots.txt
 * Search engine crawler directives
 */

import { SITE_CONFIG } from '../config/site';

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Disallow admin pages (if any)
Disallow: /admin/
Disallow: /api/

# Crawl delay (optional)
Crawl-delay: 1

# Sitemap
Sitemap: ${SITE_CONFIG.baseUrl}/sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
