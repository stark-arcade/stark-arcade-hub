import React from 'react';
import WalletIcon from '@/public/assets/icons/wallet.svg';
import VerifyIcon from '@/public/assets/icons/verified.svg';
import ProfileIcon from '@/public/assets/icons/profile.svg';
import LogoutIcon from '@/public/assets/icons/logout.svg';
import FAQIcon from '@/public/assets/icons/anoymos.svg';
import BugIcon from '@/public/assets/icons/bug.svg';
import { useContractRead } from '@starknet-react/core';
import { ABIS } from '@/abis';
import { useAuth } from '@/hooks/useAuth';
import { CONTRACT_ADDRESS } from '@/utils/constants';
import {
  Box,
  Divider,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { ellipseMiddle } from '@/utils/formatAddress';
import ProfileDrawer from './ProfileDrawer';

const ProfileAccount = () => {
  const { userAddress, disconnectWallet } = useAuth();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { data: dataPoint, isLoading: isLoadingPoint } = useContractRead({
    functionName: 'getUserPoint',
    abi: ABIS.UserPointABI,
    args: [userAddress ? userAddress : ''],
    address: CONTRACT_ADDRESS.USER_POINT,
    watch: false,
  });
  return (
    <>
      <Menu
        variant="profile"
        matchWidth={true}
        direction="rtl"
        size={{ md: 'inherit', base: 'full' }}
      >
        <MenuButton
          display={{
            md: 'block',
            base: 'none',
          }}
        >
          <HStack
            px={6}
            py={2}
            background="shader.500"
            borderRadius="100px"
            fontWeight="700"
            fontSize="sm"
            color="shader.300"
          >
            <HStack>
              <Icon as={WalletIcon} height={6} width={6} />
              <Text>{ellipseMiddle(userAddress || '', 4, 4)}</Text>
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
        </MenuButton>
        <MenuList>
          {/* <HStack justifyContent="center" mb={2}>
          <Icon
            as={VerifyIcon}
            height={6}
            width={6}
            sx={{
              path: {
                _first: {
                  fill: "url(#paint0_linear_746_1465)",
                },
                _last: {
                  fill: "url(#paint1_linear_746_1465)",
                },
              },
            }}
          />
          <Text fontWeight="bold" variant="gradient_text">
            Rank: #1st
          </Text>
        </HStack> */}
          <MenuItem
            display={{
              xl: 'none',
              md: 'flex',
            }}
          >
            <HStack padding={4} fontWeight="800" borderRadius="8px">
              <HStack width="fit-content">
                <Text>Your Point:</Text>
                <Box>
                  {dataPoint && !isLoadingPoint ? (
                    dataPoint.toString()
                  ) : (
                    <Skeleton>0</Skeleton>
                  )}
                </Box>
              </HStack>
              <HStack width="fit-content">
                <Text>Address:</Text>
              </HStack>
            </HStack>
          </MenuItem>

          <Link href="/setting-profile">
            <MenuItem isDisabled>
              <Icon as={ProfileIcon} h={6} w={6} />
              <Text>Setting Profile</Text>
            </MenuItem>
          </Link>
          <MenuItem isDisabled>
            <Icon as={BugIcon} h={6} w={6} />
            <Text>Report Bug</Text>
          </MenuItem>
          <MenuItem isDisabled>
            <Icon as={FAQIcon} h={6} w={6} />
            <Text>FAQ Support</Text>
          </MenuItem>

          <MenuItem
            onClick={async () => {
              disconnectWallet();
            }}
          >
            <Icon as={LogoutIcon} h={6} w={6} />
            <Text>Logout</Text>
          </MenuItem>
        </MenuList>
      </Menu>
      <HStack
        onClick={onToggle}
        background="shader.500"
        borderRadius="100px"
        fontWeight="700"
        display={{
          md: 'none',
          base: 'flex',
        }}
        fontSize="sm"
        px={6}
        py={2}
        color="shader.300"
      >
        <Icon as={WalletIcon} height={6} width={6} />
        <Text>{ellipseMiddle(userAddress || '', 4, 4)}</Text>
      </HStack>
      <ProfileDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ProfileAccount;
