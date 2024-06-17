import { HStack, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

import React from "react";
interface LinkProps {
  label: string;
  link: string;
  target?: boolean;
  isDisbaled?: boolean;
}
const NavigationPage = () => {
  const ListPage: LinkProps[] = [
    {
      label: "Games",
      link: "/games",
    },
    {
      label: "Leaderboard",
      link: "/leaderboard",
    },
    {
      label: "Services",
      link: "/service",
      isDisbaled: true,
    },
  ];
  return (
    <HStack>
      {ListPage.map((item, index) => (
        <ChakraLink
          as={Link}
          key={item.label}
          href={item.link}
          sx={{
            color: item.isDisbaled ? "gray.500" : "black",
            cursor: item.isDisbaled ? "not-allowed" : "pointer",
            textDecoration: "none",
            "&:hover": {
              color: item.isDisbaled ? "gray.500" : "blue.500",
            },
          }}
        ></ChakraLink>
      ))}
    </HStack>
  );
};

export default NavigationPage;
