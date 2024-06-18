import { HStack, Link as ChakraLink, Text } from "@chakra-ui/react";
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
      isDisbaled: true,
    },
    {
      label: "Leaderboard",
      link: "/leaderboard",
      isDisbaled: true,
    },
    {
      label: "Services",
      link: "/service",
      isDisbaled: true,
    },
    {
      label: "Others",
      link: "/others",
      isDisbaled: true,
    },
  ];
  return (
    <HStack gap={10}>
      {ListPage.map((item) => (
        <>
          {item.isDisbaled ? (
            <Text fontWeight="bold" opacity={0.6} cursor="not-allowed">
              {item.label}
            </Text>
          ) : (
            <ChakraLink
              as={Link}
              key={item.label}
              href={item.link}
              fontWeight="bold"
              sx={{
                textDecoration: "none",

                "&:hover": {
                  textDecoration: "none",
                  color: "primary.600",
                },
              }}
            >
              {item.label}
            </ChakraLink>
          )}
        </>
      ))}
    </HStack>
  );
};

export default NavigationPage;
