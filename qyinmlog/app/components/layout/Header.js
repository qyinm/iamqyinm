import { navdata } from '@/app/data/metadata';
import Logo from './Logo';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between my-6">
      <Logo />
      <div className={`ml-auto flex items-center gap-2 py-3`}>
        {navdata.map(nav => (
          <Link
            href={nav.url}
            key={nav.title}
            className={`
                          px-3 hoveflex items-center rounded-lg transition-all hover:bg-secondary text-primary font-semibold px-3 py-1.5r:bg-secondary
                  `}
          >
            {nav.title}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
