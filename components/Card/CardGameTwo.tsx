import { GameProps } from '@/data/game';
import { Box, Button, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import SocketIcon from '@/public/assets/icons/launch.svg';
const CardGameTwo = ({ name, tags, banner, link, description }: GameProps) => {
  return (
    <HStack
      role="group"
      minH={300}
      borderRadius="24px"
      bg="shader.800"
      transition="all 0.8s"
      _hover={{
        width: 420,
      }}
    >
      <Box
        background={`url(${banner})`}
        bgPosition="center"
        backgroundSize="cover"
        transition="all 0.8s"
        minH={400}
        width={300}
        _groupHover={{
          width: 220,
        }}
      ></Box>
      <Flex
        flexDirection="column"
        height="full"
        transition={'all 0.8s'}
        // display="none"
        gap={8}
        _groupHover={{
          display: 'block',
        }}
      >
        <HStack gap={3} flexWrap="wrap">
          {tags.map((tag, index) => (
            <Text
              border="1px solid"
              borderColor="shader.500"
              bg="#FAFAFA33"
              px={4}
              fontSize="xs"
              fontWeight={800}
              textTransform="capitalize"
              color="white"
              py={1}
              borderRadius="24px"
              key={`${tag}-${index}`}
            >
              {tag}
            </Text>
          ))}
        </HStack>
        <Text mb={2} fontSize="24px">
          {name}
        </Text>
        <Text>{description}</Text>
        {link && (
          <Link href={link} target="_blank">
            <Button
              variant="primary"
              background="primary.500"
              color="white"
              leftIcon={<Icon as={SocketIcon} height={6} width={6} />}
            >
              Play
            </Button>
          </Link>
        )}
      </Flex>
      <Box height="full">dsa</Box>
    </HStack>
  );
};

export default CardGameTwo;
