import { getServerSideSitemap, getServerSideSitemapIndex } from 'next-sitemap';
import { getAllPosts } from '../api/post';

export async function GET(request) {
  const postLinks = getAllPosts().map(post => post.slug);
  const postsUrl = postLinks.map(link => {
    return {
      ioc: `https://www.qyinm.com${link}`,
      lastmod: new Date().toISOString(),
      changefreq: 'always',
      priority: 1,
    };
  });

  return getServerSideSitemap(postsUrl);
}
