import React, { PropsWithChildren } from "react";
import Header from "../Header";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../Footer";

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Container maxWidth="container.xl">
        <Header />
        <Box as="main" py={4}>
          {children}
        </Box>
        <Footer />
      </Container>
    </>
  );
};

export default DefaultLayout;
