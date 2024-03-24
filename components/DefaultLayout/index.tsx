import React, { PropsWithChildren } from "react";
import Header from "../Header";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../Footer";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Box
        bg="#0C1113"
        borderRadius="24px"
        marginX={{ md: 8, base: 0 }}
        my={{ md: 4, base: 2 }}
      >
        <Container maxWidth="container.xl">
          <Header />
        </Container>
      </Box>

      <Container maxWidth="container.xl">
        <Box as="main" py={4}>
          {children}
        </Box>
        <Footer />
      </Container>
    </>
  );
};

export default DefaultLayout;
