import IncubationProgram from "@/layouts/Incubation";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Arcade Garden 2025",
  description:
    "Get ready for the inaugural Cohort of Arcade Garden, brought to you by StarkArcade and the Starknet Foundation.",
  openGraph: {
    title: "Arcade Garden 2025",
    description:
      "Get ready for the inaugural Cohort of Arcade Garden, brought to you by StarkArcade and the Starknet Foundation.",
    images: [
      {
        url: "https://starkarcade.com/assets/banner/banner.png",
        width: 1200,
        height: 600,
        type: "image/png",
      },
    ],
    locale: "en_US",
    url: "https://www.starkarcade.com/garden",
    type: "website",
    emails: "karasbuilder@gmail.com",
    siteName: "Arcade Garden 2025",
  },
  twitter: {
    title: "Arcade Garden 2025",
    description:
      "Get ready for the inaugural Cohort of Arcade Garden, brought to you by StarkArcade and the Starknet Foundation.",
    images: {
      url: "https://starkarcade.com/assets/banner/banner.png",
      alt: "Arcade Garden 2025",
    },
    site: "https://www.starkarcade.com/garden",
    card: "player",
    creator: "@starkarcade",
    players: {
      playerUrl: "https://www.starkarcade.com/garden",
      streamUrl: "https://www.starkarcade.com/garden",
      width: 600,
      height: 600,
    },
  },
  category: "technology",
};
const ArcadeGarden = () => {
  return <IncubationProgram />;
};

export default ArcadeGarden;
