import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

const HeroSection = () => {
  return (
    <VStack flexDirection="column">
      <Box>
        Accelerate the world's transition to 
        <Text as="span">fully on-chain gaming </Text>
      </Box>
      <Text>
        Bridging Gamers and Developers for a Thriving Crypto Gaming Ecosystem.
      </Text>
    </VStack>
  );
};

export default HeroSection;
