import { metadata } from '@/app/data/metadata';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className={`items-center sm:flex`}>
      <Link href={metadata.homeUrl}>
        <Image src={'/favicon.svg'} height={40} width={40} />
      </Link>
      <span
        className={`hidden mx-2 font-extralight text-lg py-3 sm:flex font-semibold`}
      >
        {metadata.title}
      </span>
    </div>
  );
};

export default Logo;
