import { getAllPosts } from '../api/post';

const Post = () => {
  const posts = getAllPosts();
  console.log(posts);
  return <h1>post!</h1>;
};

export default Post;
