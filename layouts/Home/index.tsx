'use client';
import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';
import HeroSection from './Sections/Hero/HeroSection';
import GameSliders from './Sections/GameSliders';

import ListGameSection from './Sections/ListGames';
import FadeInVisible from '@/components/Animations/FadeInVisible';

const HomePage = () => {
  return (
    <Flex flexDirection="column" gap={6}>
      <HeroSection />
      <Box
        backgroundImage={"url('/assets/arts/slider_section.png')"}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
      >
        <Container maxWidth="container.xl" px={4}>
          <FadeInVisible>
            <GameSliders />
          </FadeInVisible>
        </Container>
      </Box>
      <Box
        backgroundImage={"url('/assets/arts/listing_section.png')"}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        py={10}
      >
        <Container maxWidth="container.xl" px={0}>
          <FadeInVisible>
            <ListGameSection />
          </FadeInVisible>
        </Container>
      </Box>
    </Flex>
  );
};

export default HomePage;
