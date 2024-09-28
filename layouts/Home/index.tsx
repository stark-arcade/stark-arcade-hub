'use client';
import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';
import HeroSection from './Sections/Hero/HeroSection';
import GameSliders from './Sections/GameSliders';

import FadeInVisible from '@/components/Animations/FadeInVisible';
import GameForYou from './Sections/GameForYou';
import HowToJoin from './Sections/HowToJoin';
import BannerIntro from './Sections/BannerIntro';

const HomePage = () => {
  return (
    <React.Fragment>
      <Flex flexDirection="column" gap={6}>
        <Container maxWidth="container.xl" px={0}>
          <FadeInVisible>
            <GameForYou />
          </FadeInVisible>
        </Container>

        <Box py={10}>
          <Container maxWidth="container.xl" px={0}>
            <FadeInVisible>
              <HowToJoin />
            </FadeInVisible>
          </Container>
        </Box>
        <HeroSection />
      </Flex>
    </React.Fragment>
  );
};

export default HomePage;
