import remarkGfm from 'remark-gfm';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Giscus from '@/app/components/global/Giscus';
import PostTitle from '@/app/components/post/PostTitle';
import { getAllPosts } from '@/app/api/post';

const Page = async ({ params }) => {
  const slug = `/post/${[decodeURI(params.slug)].join('/')}`;
  const post = getAllPosts().find(post => post.slug === slug);

  console.log();
  if (!post) {
    return notFound();
  }

  const { content, frontmatter } = await compileMDX({
    source: post.content,
    options: {
      parseFrontmatter: true,
    },
    remarkPlugins: [remarkGfm],
  });
  return (
    <>
      <PostTitle post={post} />
      <article className="prose dark:prose-dark max-w-none my-12 prose-neutral font-spoqa dark:prose-dark">
        {content}
      </article>
      <Giscus />
    </>
  );
};

export default Page;
