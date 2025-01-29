import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Analytics } from './components/analytics';
import './styles/globals.scss';
import Layout from './components/layout';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: {
    default: 'Muhamad Zaky',
    template: '%s | muhamadzaky.my.id'
  },
  description: "Muhamad Zaky's Portfolio",
  openGraph: {
    title: 'muhamadzaky.my.id',
    description: 'Muhamad Zaky - Portfolio',
    url: 'https://muhamadzaky.my.id/',
    siteName: 'muhamadzaky.my.id',
    images: [
      {
        url: 'https://muhamadzaky.my.id/og.png',
        width: 1920,
        height: 1080
      }
    ],
    locale: 'en-US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'Muhamad Zaky',
    card: 'summary_large_image'
  },
  icons: {
    shortcut: '/favicon.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
        }`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
