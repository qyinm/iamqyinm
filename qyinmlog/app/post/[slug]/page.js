import remarkGfm from 'remark-gfm';
import { MDXRemote, compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Giscus from '@/app/components/global/Giscus';
import PostTitle from '@/app/components/post/PostTitle';
import { getAllPosts } from '@/app/api/post';
// code highlighting
import rehypeHighlight from 'rehype-highlight';
import '@/app/styles/highlight-js/github-dark.css';

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

const Page = async ({ params }) => {
  const slug = `/post/${[decodeURI(params.slug)].join('/')}`;
  const post = getAllPosts().find(post => post.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <PostTitle post={post} />
      <article className="prose dark:prose-dark max-w-none my-12 prose-neutral font-spoqa dark:prose-dark">
        <MDXRemote source={post.content} options={options} />
      </article>
      <Giscus />
    </>
  );
};

export default Page;
