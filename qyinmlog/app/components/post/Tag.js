import Link from 'next/link';

const Tag = ({ name }) => {
  return (
    <Link href={`/tag/${name}`}>
      <div className="rounded-lg px-2 py-0.5 transition-colors bg-stone-300 hover:text-primary hover:bg-tertiary text-secondary font-normal">
        {name}
      </div>
    </Link>
  );
};

export default Tag;
