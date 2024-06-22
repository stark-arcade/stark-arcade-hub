import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./global.css";
const nuto = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});
import Favicon from "@/app/favicon.ico";
import ProviderApp from "@/provider";
import DefaultLayout from "@/layouts/default";
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
  keywords: [
    "StarkArcade",
    "What is StarkArcade",
    "Starknet Hub",
    "Starknet Arcade Hub",
    "Starknet Arcade",
  ],
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
