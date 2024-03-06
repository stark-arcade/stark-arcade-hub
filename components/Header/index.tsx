import { HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import ListPageItem from "./ListPageItem";

const Header = () => {
  return (
    <HStack justifyContent="space-between">
      <Link href="/">
        <Text>StarkLogo</Text>
      </Link>
      <ListPageItem />
    </HStack>
  );
};

export default Header;
