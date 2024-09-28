import CardGameTwo from '@/components/Card/CardGameTwo';
import { Box, HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const GameForYou = () => {
  return (
    <Box>
      <HStack mb={4}>
        <Image src="/assets/arts/king.svg" width={40} height={40} alt="" />
        <Text fontSize="32px" fontWeight={700} lineHeight="normal">
          Games for you
        </Text>
      </HStack>

      <Text color="shader.400" fontWeight={700}>
        List of games we pick for you based on your interactions on Starkarcade
      </Text>
      <CardGameTwo
        name="test"
        tags={['Plad', 'dsadsa', 'dsadsa']}
        banner="/assets/games/stark_flip.png"
        link="/dsadsa/"
        description="The simplest Puzzle, but the biggest thrill"
        thumbnail="/assets/games/stark_flip.png"
      />
    </Box>
  );
};

export default GameForYou;
