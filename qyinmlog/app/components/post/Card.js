import Link from 'next/link';
import PostInfo from './PostInfo';
import Tag from './Tag';
import Image from 'next/image';

const Card = ({ post }) => {
  const postLink = post.slug.replace('/posts/', `/article/`);
  console.log(post);
  return (
    <div className="text-ye group w-full p-4 py-4 hover:drop-shadow-base">
      <div className="flex justify-between">
        <div className="w-full flex-col justify-around">
          <Link className="hover:drop-shadow-base" href={postLink}>
            <p className="text-xl font-bold">{post.title}</p>
            <p className="text-tertiary mt-1"></p>
          </Link>
          <div className="mt-2 inline-flex w-full items-start gap-2 text-sm">
            <div className="flex flex-wrap items-center gap-2">
              {post.tags.map(tag => (
                <Tag name={tag} />
              ))}
            </div>
            <PostInfo date={post.date} readingTime={post.readingMinutes} />
          </div>
        </div>
        <div className="ml-4 w-3/5">
          <img src={'/image' + post.thumbnail} className="w-[32vw] h-[24vh]" />
        </div>
      </div>
    </div>
  );
};

export default Card;
