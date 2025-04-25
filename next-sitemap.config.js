/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.woverasolutions.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      'https://www.woverasolutions.com/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/500'],
  generateIndexSitemap: true,
  outDir: 'public',
} 