const fs = require('fs');
const path = require('path');

const siteUrl = process.env.SITE_URL || 'https://accidentman.co.uk';

// List your routes here (static)
const routes = [
  '/',
  '/about',
  '/accident',
  '/replacement-vehicles',
  '/credit-hire',
  '/bodyshop-repairs',
  '/blogs',
  '/contact',
  '/terms',
  '/complaints',
  '/privacy-policy'
];

const today = new Date().toISOString().slice(0, 10);

const toEntry = (loc, priority = '0.8', changefreq = 'monthly') => `
  <url>
    <loc>${siteUrl}${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r, i) => toEntry(r, i === 0 ? '1.0' : '0.8', r === '/blogs' ? 'weekly' : 'monthly')).join('\n')}
</urlset>`;

const outPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, xml.trim() + '\n', 'utf8');
console.log('Sitemap generated to', outPath);



