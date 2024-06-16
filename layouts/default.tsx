import Header from "@/components/Header";
import { Box, Flex } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <Flex width="full" flexDirection="column">
      <Header />

      <Box padding={4} flex={1} width="full" as="main">
        {children}
      </Box>
    </Flex>
  );
};

export default DefaultLayout;
