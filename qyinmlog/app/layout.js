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
        <meta
          name="google-site-verification"
          content="uN6r8wtwmM5jus_sDEYdaP06xZ0jF7NGQ4npFnd2Xnk"
        />
        {/* new domain qyinm.com */}
        <meta
          name="google-site-verification"
          content="8QhudNtMbibg206kBXKG8AzhKlZUnxnBFKT-33cD6nw"
        />
        {/* naver search console */}
        <meta
          name="naver-site-verification"
          content="a138ad1aed864a9ed637a3d4577e923463d55d7c"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2698685047331512"
          crossorigin="anonymous"
        ></script>
        <title>qyinm log</title>
        <meta name="description" content="qyinm log" />
        <meta name="author" content="qyinm" />
        <meta name="keyword" content="backend, java, jpa, spring" />
      </head>
      <body className={'mx-auto max-w-3xl px-6 lg:max-w-4xl lg:px-8'}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
