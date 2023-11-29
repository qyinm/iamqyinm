import Link from 'next/link';
import { RxNotionLogo } from 'react-icons/rx';

const Aboutme = () => {
  return (
    <div className="mt-3 px-3 py-4 text-secondary">
      <div className="border-b-2 py-4">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-5xl">
          qyinm
        </h2>
      </div>
      <div className="mt-2">
        {/* Interesting to Backend Developer, I'm learning{' '}
        <strong>Spring Boot</strong>, using <strong>Java</strong>
        <br /> */}
        I'm studying to become a backend developer. I'm very interested in
        startups, and I'm not only doing the backend but also the front.
      </div>

      <div className="font-semibold flex flex-row-reverse text-right mt-2">
        <Link
          href={`https://qyinm.notion.site/qyinm-x-Engineer-709cd096daba49b293ac8bf68583c4af?pvs=4`}
          className="flex items-center"
        >
          <RxNotionLogo />
          resume
        </Link>
      </div>
    </div>
  );
};

export default Aboutme;
