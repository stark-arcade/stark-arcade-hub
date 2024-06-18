import LogoStark from "@/public/assets/logo/logo.svg";
import StarkText from "@/public/assets/logo/stark-text.svg";
import { Box, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import NavigationPage from "./NavigationPage";
import ConnectWallet from "../ConnectWallet";
import Link from "next/link";

const Header = () => {
  return (
    <HStack
      as="header"
      px={10}
      py={5}
      background="shader.800"
      justifyContent="space-between"
    >
      <HStack as={Link} href="/">
        <Icon as={LogoStark} height={8} width={8} />
        <Icon
          as={StarkText}
          height={"auto"}
          width={"auto"}
          display={{ md: "block", base: "none" }}
        />
      </HStack>
      <NavigationPage />
      <ConnectWallet />
    </HStack>
  );
};

export default Header;
