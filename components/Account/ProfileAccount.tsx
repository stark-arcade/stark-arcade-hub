import React, { useState } from "react";
import WalletIcon from "@/public/assets/icons/wallet.svg";
import VerifyIcon from "@/public/assets/icons/verified.svg";
import LogoutIcon from "@/public/assets/icons/logout.svg";
import FAQIcon from "@/public/assets/icons/anoymos.svg";
import { useContractRead } from "@starknet-react/core";
import { ABIS } from "@/abis";
import { useAuth } from "@/hooks/useAuth";
import { CONTRACT_ADDRESS } from "@/utils/constants";
import {
  Box,
  Divider,
  HStack,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { ellipseMiddle } from "@/utils/formatAddress";

const ProfileAccount = () => {
  const { userAddress, disconnectWallet } = useAuth();
  const { data: dataPoint, isLoading: isLoadingPoint } = useContractRead({
    functionName: "getUserPoint",
    abi: ABIS.UserPointABI,
    args: [userAddress ? userAddress : ""],
    address: CONTRACT_ADDRESS.USER_POINT,
  });
  return (
    <Menu variant="profile" matchWidth={true}>
      <MenuButton>
        <HStack>
          <HStack
            px={6}
            py={2}
            background="shader.500"
            borderRadius="100px"
            fontWeight="700"
            fontSize="sm"
            color="shader.300"
            display={{ xl: "flex", md: "none" }}
          >
            <HStack>
              <Icon as={WalletIcon} height={6} width={6} />
              <Text>{ellipseMiddle(userAddress || "", 8, 8)}</Text>
            </HStack>
            <Divider orientation="vertical" h={4} />
            <HStack width="fit-content">
              <Icon as={VerifyIcon} height={6} width={6} />
              <HStack>
                {!isLoadingPoint ? (
                  <Text>{dataPoint ? dataPoint?.toString() : 0}</Text>
                ) : (
                  <Skeleton>00</Skeleton>
                )}
                <Text>SAH</Text>
              </HStack>
            </HStack>
          </HStack>
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem
          display={{
            xl: "none",
            md: "flex",
          }}
        >
          <HStack padding={4} fontWeight="800" borderRadius="8px">
            <HStack width="fit-content">
              <Text>Your Point:</Text>
              <Box>
                {dataPoint && !isLoadingPoint ? (
                  dataPoint.toString()
                ) : (
                  <Skeleton>00</Skeleton>
                )}
              </Box>
            </HStack>
            <HStack width="fit-content">
              <Text>Address:</Text>
            </HStack>
          </HStack>
        </MenuItem>

        <Link href="/setting-profile">
          <MenuItem>Setting Profile</MenuItem>
        </Link>
        <MenuItem isDisabled>Report Bug</MenuItem>
        <MenuItem isDisabled>FAQ Support</MenuItem>

        <MenuItem
          onClick={async () => {
            disconnectWallet();
          }}
        >
          <Icon as={LogoutIcon} h={6} w={6} />
          <Text fontSize="lg">Logout</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileAccount;
