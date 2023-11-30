import { getAllPosts, getAllTags } from '@/app/api/post';
import SubTitle from '@/app/components/global/SubTitle';
import Card from '@/app/components/post/Card';
import Tag from '@/app/components/post/Tag';

const TagDetailPage = ({ params }) => {
  const tag = decodeURI(params.slug);
  const tags = getAllTags();
  const tagPosts = getAllPosts()
    .sort((a, b) => b.date.localeCompare(a.date))
    .filter(post => post.tags.includes(tag));
  return (
    <div>
      <SubTitle title={`Tags - ${tag}`} />
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <Tag name={tag} key={i} />
        ))}
      </div>
      <hr className="border-1 w-full border-neutral-300 transition-all dark:border-neutral-700 my-8"></hr>
      <SubTitle title={`Article`} />
      <div className={`flex flex-wrap`}>
        {tagPosts.map((post, i) => (
          <Card post={post} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TagDetailPage;
