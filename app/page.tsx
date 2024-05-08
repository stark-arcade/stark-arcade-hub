"use client";

import { Flex, Grid, HStack, Image, Text } from "@chakra-ui/react";

interface ICardProps {
  image: string;
  title: string;
  content: string;
  link?: string;
  theme: string;
  hoverColor: string;
}

export default function Home() {
  const ListCard: ICardProps[] = [
    {
      image: "/assets/art/tetris.png",
      title: "Tetris",
      content:
        "Get ready to twist, turn, and drop your way to high scores in this timeless classic, now reimagined on the blockchain. ",
      link: "https://tetris-game.starkarcade.com/",
      theme: "#6322CB",
      hoverColor: "#8E57E2",
    },
    {
      image: "/assets/art/2048.png",
      title: "2048",
      content:
        "Dive into the numbers and challenge your strategic skills with StarkArcade's on-chain 2048 game.",
      link: "https://2048-game.starkarcade.com/",
      theme: "#098284",
      hoverColor: "#17AB93",
    },
    {
      image: "/assets/art/stark-flip.svg",
      title: "StarkFlip",
      content:
        "The simplest Game, but the biggest thrill - one flip away to decrypt your fortune on Starknet. 50/50 odds of double to triple gains or brutal losses. Call it in the air as the coin dances, while your destiny is defined!",
      link: "https://starkflip.starkarcade.com/",
      theme: "#0F8662",
      hoverColor: "#15B484",
    },
    {
      image: "/assets/art/stark-pot.svg",
      title: "StarkPot 6/45",
      content:
        "Jackpot dreams crystallized on the Starknet. Each spin births a new Stark whale, chasing generational wealth with every decentralized draw. The numbers await - deploy your degen strategies and claim your destined wealth.",
      link: "https://starkpot.starkarcade.com/",
      theme: "#062451",
      hoverColor: "#174282",
    },
    {
      image: "/assets/art/coming.svg",
      title: "Coming Moon",
      content: "We are Coming!",
      theme: "#8F7729",
      hoverColor: "#E4CB4A",
    },
  ];

  return (
    <>
      <Grid
        templateColumns={{ lg: "repeat(2, 1fr)", base: "repeat(1,1fr)" }}
        gap={6}
      >
        {ListCard.map((item, index) => (
          <HStack
            cursor={`${item.link && "pointer"}`}
            transition="all .3s"
            _hover={{
              bg: item.hoverColor,
              boxShadow: `0px 0px 8px ${item.hoverColor}`,
            }}
            className={`animate__animated animate__bounceIn animate__delay-${index}s`}
            gap={6}
            onClick={() => {
              if (item.link) {
                window.open(item.link, "_blank");
              }
            }}
            key={item.title}
            bg={item.theme}
            overflow="hidden"
            borderRadius="24px"
            flexWrap={{ md: "nowrap", base: "wrap" }}
          >
            <Image
              aria-label="Starknet Arcade Hub"
              src={item.image}
              width={{ md: "320px", base: "full" }}
              height={{ md: "320px", base: "300px" }}
              objectFit={{ md: "contain", base: "cover" }}
            />

            <Flex
              flexDirection="column"
              height={{ md: "full", base: "auto" }}
              padding={4}
              gap={2}
            >
              <Text fontSize="32px" fontWeight="900">
                {item.title}
              </Text>
              <Text maxW="350px" noOfLines={8} textOverflow="ellipsis">
                {item.content}
              </Text>
            </Flex>
          </HStack>
        ))}
      </Grid>
    </>
  );
}
