import IncubationProgram from "@/layouts/Incubation";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "ArcadeGarden ",
  description: "ArcadeGarden - Incubation Program",
};
const ArcadeGarden = () => {
  return <IncubationProgram />;
};

export default ArcadeGarden;
