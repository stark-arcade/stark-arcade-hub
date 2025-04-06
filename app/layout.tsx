import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Favicon from "@/app/favicon.ico";
import Banner from "@/public/assets/banner.jpeg";
import Layout from "@/layouts";
const nutito_sans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

const paladin = localFont({
  src: [
    {
      style: "normal",
      weight: "400",
      path: "./fonts/paladins.ttf",
    },
    {
      style: "normal",
      weight: "700",
      path: "./fonts/paladinscond.ttf",
    },
  ],
  variable: "--font-paladin",
});

export const metadata: Metadata = {
  title: "StarkArcade Hub",
  metadataBase: new URL("https://starkarcade.com"),

  description:
    "Starknet Arcade Hub is a tribute to our NFT community and one of the largest mini-games hub for the Starknet Degens.",
  icons: {
    icon: Favicon.src,
    shortcut: Favicon.src,
    apple: Favicon.src,
    other: { rel: "apple-touch-icon-precomposed", url: Favicon.src },
  },
  keywords: [
    "StarkArcade",
    "Starknet Arcade",
    "Starknet Arcade Hub",
    "Hub Game in Starknet",
    "Starknet Game",
    "Starknet Gaming",
  ],
  openGraph: {
    title: "StarkArcade Hub",
    description:
      "Starknet Arcade Hub is a tribute to our NFT community and one of the largest mini-games hub for the Starknet Degens.",
    images: [
      {
        url: Banner.src,
        width: 1200,
        height: 600,
        type: "image/png",
      },
    ],
    locale: "en_US",
    url: "https://starkarcade.com",
    type: "website",
    emails: "karasbuilder@gmail.com",
    siteName: "StarkArcade Hub",
  },
  twitter: {
    title: "StarkArcade Hub",
    description:
      "Starknet Arcade Hub is a tribute to our NFT community and one of the largest mini-games hub for the Starknet Degens.",
    images: {
      url: Banner.src,
      alt: "StarkArcade Hub",
    },
    site: "https://starkarcade.com",
    card: "player",
    creator: "@starkarcade",
    players: {
      playerUrl: "https://starkarcade.com",
      streamUrl: "https://starkarcade.com",
      width: 600,
      height: 600,
    },
  },
  category: "technology",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased ${nutito_sans.style} ${paladin.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
