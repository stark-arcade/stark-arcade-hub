"use client";
import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import HeroSection from "./Sections/Hero/HeroSection";
import GameSliders from "./Sections/GameSliders";

const HomePage = () => {
  return (
    <Flex flexDirection="column" gap={6}>
      <HeroSection />
      <Container maxWidth="container.xl">
        <GameSliders />
      </Container>
    </Flex>
  );
};

export default HomePage;
