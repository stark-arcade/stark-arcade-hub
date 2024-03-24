"use client";
import React from "react";
import LogoStark from "@/public/assets/logo/logo.svg";
import StarkText from "@/public/assets/logo/stark-text.svg";
import { HStack, Icon } from "@chakra-ui/react";

const LogoStarkHub = () => {
  return (
    <HStack>
      <Icon as={LogoStark} height={10} width={10} />
      <Icon
        as={StarkText}
        height={"auto"}
        width={"auto"}
        display={{ md: "block", base: "none" }}
      />
    </HStack>
  );
};

export default LogoStarkHub;
