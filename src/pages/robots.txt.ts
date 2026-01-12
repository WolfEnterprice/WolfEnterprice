/**
 * Generador de robots.txt para SEO
 */
import type { APIRoute } from 'astro';

const GET: APIRoute = ({ site }) => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${site}sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

export { GET };

