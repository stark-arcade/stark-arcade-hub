import { GameProps } from "@/data/game";
import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import SocketIcon from "@/public/assets/icons/launch.svg";
import Link from "next/link";
const CardGame = ({ name, tags, banner, link }: GameProps) => {
  return (
    <Box
      borderRadius="24px"
      background="shader.700"
      overflow="hidden"
      role="group"
    >
      <Box position="relative" overflow="hidden">
        <Image src={banner} alt={`banner-${name}`} height={500} width={500} />
        <Center
          position="absolute"
          width="full"
          transition="all 0.3s"
          zIndex={1}
          _groupHover={{
            bottom: "10",
            translateY: "10%",
          }}
        >
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
        </Center>
      </Box>

      <Box padding={6} textAlign="center" fontWeight={800} zIndex={2}>
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
