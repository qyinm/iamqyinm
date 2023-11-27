import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'qyinm log',
  description: 'my dev log',
}

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
