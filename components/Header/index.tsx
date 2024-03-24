import { HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import ListPageItem from "./ListPageItem";
import LogoStarkHub from "../Logo";

const Header = () => {
  return (
    <HStack justifyContent="space-between">
      <Link href="/">
        <LogoStarkHub />
      </Link>
      <ListPageItem />
    </HStack>
  );
};

export default Header;
