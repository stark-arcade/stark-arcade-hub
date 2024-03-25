"use client";
import {
  Button,
  Center,
  HStack,
  Icon,
  Text,
  Link,
  Box,
} from "@chakra-ui/react";

import React from "react";
import LogoIcon from "@/public/assets/logo/logo-lab.svg";
import DiscordIcon from "@/public/general/discord.svg";
import TwitterIcon from "@/public/general/twitter.svg";

const ListPageItem = () => {
  return (
    <>
      <HStack gap={{ lg: 6, base: 4 }}>
        {/* <HStack
          gap={{ lg: 12, md: 8 }}
          py={6}
          display={{ md: "flex", base: "none" }}
          fontSize="xl"
        >
          {ListLink.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              target={`${item.link == "/" ? "" : "_blank"}`}
              textDecoration="none!important"
            >
              <Text
                fontWeight="800"
                fontSize="xl"
                transition="all .4s"
                _hover={{
                  color: "#33C7F1",
                }}
              >
                {item.content}
              </Text>
            </Link>
          ))}
        </HStack> */}

        <Link
          href="https://twitter.com/starkarcade"
          target="_blank"
          alignSelf="center"
          display="flex"
          transition="all .4s"
          _hover={{
            color: "#33C7F1",
          }}
        >
          <Icon as={TwitterIcon} height={12} w={12} />
        </Link>
        <Link
          target="_blank"
          height="full"
          href="https://discord.gg/n93qp8AW"
          alignSelf="center"
          display="flex"
          transition="all .4s"
          _hover={{
            color: "#33C7F1",
          }}
        >
          <Icon as={DiscordIcon} height={12} w={12} />
        </Link>

        <Link href="https://www.decolgenlabs.com/" target="_blank">
          <Button
            role="group"
            leftIcon={
              <Center height={8} width={8} bg="#1E1E1E" borderRadius="full">
                <Icon
                  as={LogoIcon}
                  h={5}
                  width={5}
                  _groupHover={{
                    path: {
                      fill: "#A0CBD9",
                    },
                  }}
                />
              </Center>
            }
            variant="primary"
            h={12}
            fontWeight={700}
          >
            Lab
          </Button>
        </Link>
      </HStack>
    </>
  );
};

export default ListPageItem;
