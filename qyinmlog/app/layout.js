import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'qyinm log',
  description: 'my dev log',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={'mx-auto max-w-3xl px-6 lg:max-w-4xl lg:px-8'}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
