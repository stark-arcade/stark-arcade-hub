import { useWalletContext } from "@/providers/ProviderContext";
import { CONTRACT_ADDRESS } from "@/utils/constants";
import { useBalance, useContractRead } from "@starknet-react/core";
import React from "react";
import ABIPoint from "@/abis/point.json";
import LogoutIcon from "@/public/general/logout.svg";
import {
  Avatar,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  useDisclosure,
  Text,
  Box,
  Skeleton,
  Link,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { ellipseMiddle } from "@/utils/formatAddress";
import CopyClipBoard from "../CopyClipBoard/CopyClipBoard";
const ProfileDrawer = () => {
  const { address, disconnectWallet } = useWalletContext();
  const { isLoading: isLoadingBalance, data: dataBalance } = useBalance({
    token: CONTRACT_ADDRESS.STRK,
    address: address ? address : "",
  });
  const { data: dataPoint, isLoading: isLoadingPoint } = useContractRead({
    functionName: "getUserPoint",
    abi: ABIPoint,
    args: [address ? address : ""],
    address: CONTRACT_ADDRESS.USER_POINT,
    watch: true,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Avatar
        onClick={onOpen}
        cursor="pointer"
        name={address}
        src="https://bit.ly/broken-link"
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#070C12">
          <DrawerCloseButton />

          <DrawerBody py={10} display="flex" flexDirection="column" gap={6}>
            <HStack
              bg="#1b266b"
              padding={4}
              fontWeight="800"
              borderRadius="8px"
            >
              <HStack width="fit-content" borderRight="2px solid" pr={2}>
                <Text>Your Point:</Text>
                <Box>
                  {!isLoadingPoint ? (
                    dataPoint?.toString()
                  ) : (
                    <Skeleton>00</Skeleton>
                  )}
                </Box>
              </HStack>
              <HStack width="fit-content">
                <Text>STRK:</Text>
                <Box>
                  {dataBalance && !isLoadingBalance ? (
                    parseFloat(dataBalance.formatted).toFixed(2)
                  ) : (
                    <Skeleton>0.00</Skeleton>
                  )}
                </Box>
              </HStack>
            </HStack>
            <HStack>
              <Text>{ellipseMiddle(address || "", 12, 12)}</Text>
              <CopyClipBoard
                aria-label="copy icon"
                context={address || "underfine"}
              />
            </HStack>

            <Text opacity={0.5} userSelect="none">
              History
            </Text>
            <Text opacity={0.5} userSelect="none">
              LeaderBoard
            </Text>
            <Divider />

            <HStack
              cursor="pointer"
              _hover={{
                opacity: 0.7,
              }}
              gap={4}
              onClick={async () => {
                disconnectWallet();
              }}
            >
              <Text fontSize="lg">Logout</Text>
              <Icon as={LogoutIcon} h={6} w={6} />
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProfileDrawer;
