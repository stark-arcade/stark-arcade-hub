import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './global.css';
const nuto = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});
import Favicon from '@/app/icon.ico';

import ProviderApp from '@/provider';
import DefaultLayout from '@/layouts/default';
export const metadata: Metadata = {
  title: 'StarkArcade Hub',
  metadataBase: new URL('https://starkarcade.com'),
  description:
    'Starknet Arcade Hub is a tribute to our NFT community and one of the largest mini-games hub for the Starknet Degens.',
  icons: {
    icon: Favicon.src,
    shortcut: Favicon.src,
    apple: Favicon.src,
    other: { rel: 'apple-touch-icon-precomposed', url: Favicon.src },
  },
  keywords: [
    'StarkArcade',
    'Starknet Arcade',
    'Starknet Arcade Hub',
    'Hub Game in Starknet',
  ],
  openGraph: {
    title: 'StarkArcade Hub',
    description:
      'Starknet Arcade Hub is a tribute to our NFT community and one of the largest mini-games hub for the Starknet Degens.',
    images: [
      {
        url: 'https://starkarcade.com/assets/banner/banner.png',
        width: 1200,
        height: 600,
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    url: 'https://starkarcade.com',
    type: 'website',
    emails: 'karasbuilder@gmail.com',
    siteName: 'StarkArcade Hub',
  },
  twitter: {
    title: 'StarkArcade Hub',
    description:
      'Starknet Arcade Hub is a tribute to our NFT community and one of the largest mini-games hub for the Starknet Degens.',
    images: {
      url: 'https://starkarcade.com/assets/banner/banner.png',
      alt: 'StarkArcade Hub',
    },
    site: 'https://starkarcade.com',
    card: 'player',
    creator: '@starkarcade',
    players: {
      playerUrl: 'https://starkarcade.com',
      streamUrl: 'https://starkarcade.com',
      width: 600,
      height: 600,
    },
  },
  category: 'technology',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nuto.className} ${nuto.style}`}>
        <ProviderApp>
          <DefaultLayout>{children}</DefaultLayout>
        </ProviderApp>
      </body>
    </html>
  );
}
