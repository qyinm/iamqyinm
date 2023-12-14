/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true, // (optional)
  changefreq: 'always', // 페이지 주소 변경 빈도 (검색엔진에 제공됨) - always, daily, hourly, monthly, never, weekly, yearly 중 택 1
  priority: 1, // 페이지 주소 우선순위 (검색엔진에 제공됨, 우선순위가 높은 순서대로 크롤링함)
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    // 추가 sitemap 설정
    additionalSitemaps: ['http://www.qyinm.com/server-sitemap.xml'],
  },
};
