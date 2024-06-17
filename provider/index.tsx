"use client";
import React, { PropsWithChildren } from "react";
import ProviderChakra from "./ProviderChakra";
import ProviderStarknet from "./ProviderStarknet";

const ProviderApp = ({ children }: PropsWithChildren) => {
  return (
    <ProviderChakra>
      <ProviderStarknet>{children}</ProviderStarknet>
    </ProviderChakra>
  );
};

export default ProviderApp;
