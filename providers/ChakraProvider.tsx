/* eslint-disable react/display-name */
"use client";

import GoogleAnalytics from "@/components/SEO/GoogleAnalytics";

import theme from "@/themes";
import { ChakraProvider } from "@chakra-ui/react";

/// Provider Settings
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider theme={theme}>
      {children}
      <GoogleAnalytics />
    </ChakraProvider>
  );
};
