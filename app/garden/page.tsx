import IncubationProgram from "@/layouts/Incubation";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "STARK Arcade Basecamp 2025 ",
  description:
    "Empowering developers to build AI-powered Applications (GameFi, DeFi) on Starknet.",
};
const ArcadeGarden = () => {
  return <IncubationProgram />;
};

export default ArcadeGarden;
