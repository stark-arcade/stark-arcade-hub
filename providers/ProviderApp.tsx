"use client";
import React, { PropsWithChildren } from "react";
import ChakraProvider from "./ChakraProvider";
import ProviderStarknet from "./ProviderStarknet";
import ProviderWalletContext from "./ProviderContext";
import GoogleAnalytics from "@/components/SEO/GoogleAnalytics";

const ProviderApp = ({ children }: PropsWithChildren) => {
  return (
    <ChakraProvider>
      <ProviderStarknet>
        <ProviderWalletContext>{children}</ProviderWalletContext>
      </ProviderStarknet>
      <GoogleAnalytics />
    </ChakraProvider>
  );
};

export default ProviderApp;
