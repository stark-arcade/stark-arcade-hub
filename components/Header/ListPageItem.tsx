"use client";
import { Button, HStack, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import LogoIcon from "@/public/assets/logo/logo.svg";
const ListPageItem = () => {
  return (
    <>
      <HStack gap={5} py={6}>
        <Link href="/">
          <Text fontWeight="700">Home</Text>
        </Link>
        <Link href="/contact-us">
          <Text fontWeight="700">Contact Us</Text>
        </Link>
        <Link href="https://www.decolgenlabs.com/" target="_blank">
          <Button
            leftIcon={<Icon as={LogoIcon} h={6} width={6} />}
            variant="primary"
          >
            Lab
          </Button>
        </Link>
      </HStack>
    </>
  );
};

export default ListPageItem;
