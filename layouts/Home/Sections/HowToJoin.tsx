import { Box, Button, HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LaunchIcon from '@/public/assets/icons/launch.svg';
const HowToJoin = () => {
  return (
    <Box>
      <HStack mb={4} gap={6}>
        <Image src="/assets/arts/star.svg" width={40} height={40} alt="" />
        <Text fontSize="32px" fontWeight={700} lineHeight="normal">
          Have not found your ideal game?
        </Text>
      </HStack>

      <Text color="shader.400" fontWeight={700} mb={14}>
        Let us help you with that!
      </Text>
      <Box
        borderRadius="24px"
        backgroundImage={"url('/assets/arts/how_to_join_art.png')"}
        overflow="hidden"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="300px"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bg: 'linear-gradient(360deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
        }}
      >
        <Link href="/submit-game">
          <Button
            variant="gradient_100"
            zIndex={1}
            leftIcon={<Icon as={LaunchIcon} h={6} w={6} />}
          >
            Join Us Now
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HowToJoin;
