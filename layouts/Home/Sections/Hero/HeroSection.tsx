import ScrollButton from "@/components/Button/ScrollButton";
import { Box, Divider, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import StarkArcadeTextLogo from "@/public/assets/logo/stark-text.svg";
import StarkArcadeLogo from "@/public/assets/logo/logo.svg";
import DecolgenLogo from "@/public/assets/logo/logo_decolgen.svg";

import { convertHex } from "@/utils/convertHex";
const HeroSection = () => {
  return (
    <VStack flexDirection="column" position="relative" pt={10}>
      <Box
        backgroundImage={`radial-gradient(closest-side, ${convertHex(
          "#E3FF74",
          1
        )} ,${convertHex("#E37C39", 1)})`}
        height={400}
        width={400}
        borderRadius="100%"
        position="absolute"
        top={-100}
        zIndex={-2}
        filter="blur(320px)"
      />
      <Box textAlign="center" fontSize="40px" fontWeight="bold" width={620}>
        Accelerate the world's transition to 
        <Text variant="gradient_text" as="span">
          fully on-chain gaming{" "}
        </Text>
      </Box>
      <Text fontWeight="bold" fontSize="sm" color="shader.200" my={2}>
        Bridging Gamers and Developers for a Thriving Crypto Gaming Ecosystem.
      </Text>
      <HStack
        px={6}
        py={2}
        border="1px solid"
        borderColor="shader.50"
        borderRadius="100px"
      >
        <HStack>
          <Icon as={StarkArcadeLogo} height={8} width={8} />
          <Icon as={StarkArcadeTextLogo} h={"auto"} width="auto" />
        </HStack>
        <Divider orientation="vertical" h={8} width="1px" borderColor="white" />
        <Icon as={DecolgenLogo} height={8} width="auto" />
      </HStack>
      <Box
        backgroundImage="url('/assets/arts/hero_section.png')"
        backgroundPosition="center"
        height={{ md: 600, base: 300 }}
        // width={{ lg: 1024, base: "full" }}
        width="full"
        bgRepeat="no-repeat"
      ></Box>
      {/* <ScrollButton
        sx={{
          position: "absolute",
          bottom: "20%",
        }}
      /> */}
    </VStack>
  );
};

export default HeroSection;
