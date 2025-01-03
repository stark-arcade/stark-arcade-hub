import IncubationProgram from "@/layouts/Incubation";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Arcade Garden 2025 ",
  description:
    "Get ready for the inaugural Cohort of Arcade Garden, brought to you by StarkArcade and the Starknet Foundation.",
};
const ArcadeGarden = () => {
  return <IncubationProgram />;
};

export default ArcadeGarden;
