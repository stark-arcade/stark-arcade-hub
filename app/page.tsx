"use client";

import { Box, Button, Grid, HStack, Icon, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import LaunchIcon from "@/public/general/launch.svg";
interface ICardProps {
  image: string;
  title: string;
  content: string;
  link?: string;
}

export default function Home() {
  const ListCard: ICardProps[] = [
    {
      image: "/assets/art/coinflip.png",
      title: "StarkFlip",
      content:
        "The simplest gamble, but the biggest thrill - one flip away to decrypt your fortune on Starknet. 50/50 odds of double to triple gains or brutal losses. Call it in the air as the coin dances, while your destiny is defined!",
      link: "https://coinflip.decolgenlabs.com/",
    },
    {
      image: "/assets/art/gameble.png",
      title: "StarkBet",
      content:
        "Put your sports alpha to the ultimate test for a shot in the most sporty realm on Starknet. This battle-hardened arena separates the plebs & jeeters from the real chads.",
      link: "https://sports.decolgenlabs.com/",
    },
    {
      image: "/assets/art/lottery.png",
      title: "StarkPot 6/45",
      content:
        "Jackpot dreams crystallized on the Starknet. Each spin births a new Stark whale, chasing generational wealth with every decentralized draw. The numbers await - deploy your degen strategies and claim your destined wealth.",
      link: "https://lottery.starkarcade.com/",
    },
    {
      image: "/assets/art/coming.png",
      title: "Coming",
      content:
        'During a coin toss, the coin is thrown into the air such that it rotates edge-over-edge several times. Either beforehand or when the coin is in the air, an interested party declares "heads" or "tails", indicating which side of the coin that party is choosing. The other party is assigned the opposite side. Depending on custom, the coin may be caught; caught and inverted; or allowed to land on the ground. ',
    },
  ];
  return (
    <>
      <Grid
        templateColumns={{ md: "repeat(2, 1fr)", base: "repeat(1,1fr)" }}
        gap={6}
      >
        {ListCard.map((item, index) => (
          <HStack
            className={`animate__animated animate__bounceIn animate__delay-${index}s`}
            padding={6}
            gap={6}
            key={item.title}
            bg="#101B2D"
            borderRadius="24px"
            flexWrap={{ md: "nowrap", base: "wrap" }}
          >
            <Box>
              <Image
                src={item.image}
                width="full"
                height="full"
                objectFit="contain"
              />
            </Box>

            <Box>
              <Text fontSize="32px" fontWeight="900">
                {item.title}
              </Text>
              <Text maxW="350px" noOfLines={8} textOverflow="ellipsis">
                {item.content}
              </Text>
              {item.link && (
                <Link href={item.link} target="_blank">
                  <Button
                    mt={4}
                    leftIcon={<Icon as={LaunchIcon} h={6} w={6} />}
                    variant="primary"
                  >
                    Launch
                  </Button>
                </Link>
              )}
            </Box>
          </HStack>
        ))}
      </Grid>
    </>
  );
}
