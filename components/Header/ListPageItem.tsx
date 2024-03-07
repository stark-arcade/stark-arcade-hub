"use client";
import {
  Button,
  Center,
  HStack,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import LogoIcon from "@/public/assets/logo/logo.svg";
import LogoIconPrimary from "@/public/assets/logo/logo_primary.svg";
const ListPageItem = () => {
  return (
    <>
      <HStack gap={5} py={6} display={{ md: "flex", base: "none" }}>
        <Link href="/">
          <Text fontWeight="700">Home</Text>
        </Link>
        <Link href="/contact-us">
          <Text fontWeight="700">Contact Us</Text>
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
