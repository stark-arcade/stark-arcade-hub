import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
const BannerIntro = () => {
  return (
    <Box background="gradient.200" py={2} w="100%">
      <Marquee
        speed={100}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '48px',
        }}
      >
        <HStack gap={24}>
          {Array(20)
            .fill(0)
            .map((_, index) => (
              <Image
                key={`brewmaster-${index}`}
                src={`/assets/banner/brewmaster.svg`}
                height={40}
                width={80}
                alt=""
              />
            ))}
        </HStack>
      </Marquee>
    </Box>
  );
};

export default BannerIntro;
