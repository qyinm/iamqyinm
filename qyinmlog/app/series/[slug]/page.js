import { getAllPosts } from '@/app/api/post';
import Card from '@/app/components/post/Card';

const SeriesDetail = ({ params }) => {
  const series = decodeURI(params.slug);
  const seriesPost = getAllPosts().filter(post => post.series === series);
  return (
    <>
      <h1>
        Series <strong>{series}</strong>
      </h1>
      <div className={`flex flex-wrap`}>
        {seriesPost.map((post, i) => (
          <Card post={post} key={i} />
        ))}
      </div>
    </>
  );
};

export default SeriesDetail;
