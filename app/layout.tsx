import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nuto = Nunito_Sans({ subsets: ["latin"] });
import Favicon from "@/app/favicon.ico";
import ProviderApp from "@/provider";
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
      <body className={nuto.className}>
        <ProviderApp>{children}</ProviderApp>
      </body>
    </html>
  );
}
