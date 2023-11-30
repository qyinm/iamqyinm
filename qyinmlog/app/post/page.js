import { getAllPosts, getAllTags } from '../api/post';
import SubTitle from '../components/global/SubTitle';
import Tag from '../components/post/Tag';
import Card from '../components/post/Card';

const Post = () => {
  const posts = getAllPosts().sort((a, b) => b.date.localeCompare(a.date));
  const tags = getAllTags();
  return (
    <div>
      <SubTitle title={`Tags`} />
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <Tag name={tag} key={i} />
        ))}
      </div>
      <hr className="border-1 w-full border-neutral-300 transition-all dark:border-neutral-700 my-8"></hr>
      <SubTitle title={`Article`} />
      <div className={`flex flex-wrap`}>
        {posts.map((post, i) => (
          <Card post={post} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Post;
