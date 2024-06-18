import { GameProps } from "@/data/game";
import { Box, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const CardGame = ({ name, tags, banner, link }: GameProps) => {
  return (
    <Box borderRadius="24px" background="shader.700" overflow="hidden">
      <Image src={banner} alt={`banner-${name}`} height={500} width={500} />
      <Box padding={6} textAlign="center" fontWeight={800}>
        <Text mb={4} fontSize="24px">
          {name}
        </Text>
        <HStack gap={3} flexWrap="wrap" justifyContent="center">
          {tags.map((tag, index) => (
            <Text
              border="1px solid"
              borderColor="shader.300"
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
      </Box>
    </Box>
  );
};

export default CardGame;
