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
      title: "Flip Coin",
      content:
        'During a coin toss, the coin is thrown into the air such that it rotates edge-over-edge several times. Either beforehand or when the coin is in the air, an interested party declares "heads" or "tails", indicating which side of the coin that party is choosing. The other party is assigned the opposite side. Depending on custom, the coin may be caught; caught and inverted; or allowed to land on the ground. ',
      link: "https://coinflip.decolgenlabs.com/",
    },
    {
      image: "/assets/art/gameble.png",
      title: "Sport Betting",
      content:
        'During a coin toss, the coin is thrown into the air such that it rotates edge-over-edge several times. Either beforehand or when the coin is in the air, an interested party declares "heads" or "tails", indicating which side of the coin that party is choosing. The other party is assigned the opposite side. Depending on custom, the coin may be caught; caught and inverted; or allowed to land on the ground. ',
      link: "https://sports.decolgenlabs.com/",
    },
    {
      image: "/assets/art/lottery.png",
      title: "Lottery",
      content:
        'During a coin toss, the coin is thrown into the air such that it rotates edge-over-edge several times. Either beforehand or when the coin is in the air, an interested party declares "heads" or "tails", indicating which side of the coin that party is choosing. The other party is assigned the opposite side. Depending on custom, the coin may be caught; caught and inverted; or allowed to land on the ground. ',
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
        {ListCard.map((item) => (
          <HStack key={item.title} bg="#101B2D" borderRadius="24px">
            <Box height="240px" width="240px">
              <Image
                src={item.image}
                width="full"
                height="full"
                objectFit="contain"
              />
            </Box>

            <Box padding={6}>
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
