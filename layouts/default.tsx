'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Box, Flex } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <Flex width="full" flexDirection="column" position="relative">
      <Header />
      <Box width="full" as="main" overflowX="hidden">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default DefaultLayout;
