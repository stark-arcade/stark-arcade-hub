import { HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import LogoIcon from "@/public/assets/logo/logo.svg";
const Footer = () => {
  return (
    <HStack
      justifyContent="space-between"
      px={10}
      py={5}
      fontSize="sm"
      fontWeight={600}
    >
      <Text>COPYRIGHT 2024 © STARKARCADE</Text>
      <Icon as={LogoIcon} h={8} w={8} />
      <Text>SECURE BY : STARKNET NETWORK</Text>
    </HStack>
  );
};

export default Footer;
