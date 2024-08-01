'use client';
import { VStack, Text, Icon, Box, Button } from '@chakra-ui/react';
import React from 'react';
import NotFoundIcon from '@/public/assets/arts/art_not_found.svg';
import { useRouter } from 'next/navigation';
const PageNotFound = () => {
  const { push } = useRouter();
  return (
    <VStack flexGrow={1} minH="80vh" px={8} textAlign="center">
      <Icon
        as={NotFoundIcon}
        height={{ lg: '500px', md: '450xp', base: '300px' }}
        width="auto"
      />
      <Box
        fontSize={{ md: '40px', base: '24px' }}
        display="inline-flex"
        fontWeight="bold"
      >
        404 - 
        <Text variant="gradient_text">PAGE NOT FOUND</Text>
      </Box>
      <Text>
        {` Sorry Page title contains Page not found and Entry page title doesn't
        contain Page not found.`}
      </Text>
      <Button
        variant="secondary"
        cursor="pointer"
        onClick={() => {
          push('/');
        }}
      >
        Go To Home Page
      </Button>
    </VStack>
  );
};

export default PageNotFound;
