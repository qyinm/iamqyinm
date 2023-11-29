import dayjs from 'dayjs';
import { readFileSync } from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

const BASE_PATH = `/post`;
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getAllPosts = () => {
  const postPath = sync(`${POSTS_PATH}/**/*.mdx`);

  return postPath.reduce((ac, postPath) => {
    const post = parsePost(postPath);
    return !post ? ac : [...ac, post];
  }, []);
};

const parsePost = postPath => {
  try {
    const file = readFileSync(postPath, { encoding: 'utf-8' });
    const { content, data } = matter(file);
    const grayMatter = data;

    if (grayMatter.draft) {
      return;
    }

    return {
      ...grayMatter,
      tags: grayMatter.tags && grayMatter.tags.filter(Boolean),
      date: dayjs(grayMatter.date).format('YYYY.MM.DD'),
      content,
      slug: postPath.slice(postPath.indexOf(BASE_PATH)).replace('.mdx', ''),
      readingMinutes: Math.ceil(readingTime(content).minutes),
      wordCount: content.split(/\s+/gu).length,
    };
  } catch (error) {
    console.error(error);
  }
};
