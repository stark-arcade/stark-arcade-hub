import DefaultLayout from "@/components/DefaultLayout";

import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./global.css";
const nunitoSans = Nunito_Sans({ subsets: ["latin"] });
import Favicon from "@/app/favicon.ico";
import ProviderApp from "@/providers/ProviderApp";
export const metadata: Metadata = {
  title: "StarkArcade Hub",
  description:
    "Starknet Arcade Hub is a tribute to our NFT community and one of the largest mini-games hub for the Starknet Degens. The first product with upcominng Beta will be a CoinFlip game, allowing folks to place bets and multiply their $ETH holdings on Starknet",
  icons: {
    icon: Favicon.src,
    shortcut: Favicon.src,
    apple: Favicon.src,
    other: { rel: "apple-touch-icon-precomposed", url: Favicon.src },
  },
  keywords: ["StarkArcade", "What is StarkArcade"],
  openGraph: {
    title: "StarkArcade Hub",
    description:
      "Starknet Arcade Hub is a tribute to our NFT community and one of the largest mini-games hub for the Starknet Degens. The first product with upcominng Beta will be a CoinFlip game, allowing folks to place bets and multiply their $ETH holdings on Starknet",
    images: [
      {
        url: "./public/assets/banner/banner.png",
        width: 1200,
        height: 600,
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body className={nunitoSans.className}>
        <ProviderApp>
          <DefaultLayout>{children}</DefaultLayout>
        </ProviderApp>
      </body>
    </html>
  );
}
