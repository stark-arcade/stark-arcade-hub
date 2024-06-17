import LogoStark from "@/public/assets/logo/logo.svg";
import StarkText from "@/public/assets/logo/stark-text.svg";
import { Box, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import NavigationPage from "./NavigationPage";

const Header = () => {
  return (
    <Box>
      <HStack>
        <Icon as={LogoStark} height={10} width={10} />
        <Icon
          as={StarkText}
          height={"auto"}
          width={"auto"}
          display={{ md: "block", base: "none" }}
        />
      </HStack>
      <NavigationPage />
    </Box>
  );
};

export default Header;
