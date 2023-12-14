import Link from 'next/link';
import PostInfo from './PostInfo';
import Tag from './Tag';
// import Image from 'next/image';
// import TagBox from './tag/TagBox';

const Card = ({ post }) => {
  const postLink = post.slug;

  return (
    <div className="text-ye group w-full mt-3 p-4 py-4 hover:drop-shadow-base">
      <div className="sm:flex justify-between bg-secondary rounded-lg">
        <div className="sm:mr-4 sm:w-3/5 w-full">
          <img
            src={post.thumbnail}
            className="sm:w-[32vw] sm:h-[24vh] sm:rounded-l-lg sm:rounded-r-none w-full rounded-t-lg object-fill"
          />
        </div>
        <div className="mt-3 ml-3 w-full flex flex-col justify-around justify-items-center content-center">
          <Link
            className="hover:drop-shadow-base"
            href={'/series/' + post.series}
          >
            <p className="text-md font-bold">{post.series}</p>
          </Link>
          <Link className="hover:drop-shadow-base" href={postLink}>
            <p className="text-xl font-bold">{post.title}</p>
            <p className="text-tertiary mt-1"></p>
          </Link>
          <div className="my-2 sm:inline-flex w-full justify-between items-start gap-2 text-sm pr-5">
            <div className="flex flex-wrap items-center gap-2">
              {post.tags.map(tag => (
                <Tag name={tag} />
              ))}
            </div>
            <div className="mt-2">
              <PostInfo date={post.date} readingTime={post.readingMinutes} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
