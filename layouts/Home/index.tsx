"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import HeroSection from "./Sections/HeroSection";
import GameSlider from "./Sections/GameSlider";
import ListGame from "./Sections/ListGame";

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <GameSlider />
      <ListGame />
    </Box>
  );
};

export default HomePage;
