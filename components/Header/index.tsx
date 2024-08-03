import LogoStark from '@/public/assets/logo/logo.svg';
import StarkText from '@/public/assets/logo/stark-text.svg';
import { Box, HStack, Icon } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import NavigationPage from './NavigationPage';
import ConnectWallet from '../ConnectWallet';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { useAccount, useConnect } from '@starknet-react/core';
import { useDispatch } from 'react-redux';
import { setUserAdress } from '@/redux/user/user-slice';
import ButonDecolgenLab from '../Button/ButonDecolgenLab';
import ProfileAccount from '../Account/ProfileAccount';

import ListPageDrawer from './ListPageDrawer';

const Header = () => {
  const { userAddress, prevConnector } = useAuth();
  const { connectors, connect } = useConnect();
  const {
    address: addressWallet,
    status: statusWallet,
    account,
  } = useAccount();
  const dispatch = useDispatch();
  useEffect(() => {
    const handleChangeWallet = async () => {
      if (
        addressWallet &&
        addressWallet !== userAddress &&
        prevConnector != null &&
        account
      ) {
        dispatch(setUserAdress(addressWallet));
      } else if (
        addressWallet &&
        account &&
        account.address !== addressWallet &&
        userAddress != null
      ) {
        dispatch(setUserAdress(addressWallet));
      }
    };
    handleChangeWallet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressWallet]);

  useEffect(() => {
    const handleReConenct = async () => {
      if (
        userAddress != null &&
        statusWallet === 'disconnected' &&
        prevConnector != null
      ) {
        await connect({ connector: connectors[prevConnector] });
      }
    };
    handleReConenct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAddress, prevConnector]);
  return (
    <HStack
      as="header"
      px={{ md: 10, base: 4 }}
      zIndex={'popover'}
      position="sticky"
      top={0}
      py={5}
      background="shader.800"
      justifyContent="space-between"
    >
      <HStack as={Link} href="/">
        <Box display={{ md: 'none', base: 'flex' }} alignItems="center">
          <ListPageDrawer />
        </Box>
        <Icon as={LogoStark} height={8} width={8} />
        <Icon
          as={StarkText}
          height={'auto'}
          width={'auto'}
          display={{ md: 'block', base: 'none' }}
        />
      </HStack>
      <Box display={{ md: 'block', base: 'none' }}>
        <NavigationPage />
      </Box>

      <HStack gap={4}>
        <ButonDecolgenLab />
        {
          // eslint-disable-next-line no-nested-ternary
          userAddress ? <ProfileAccount /> : <ConnectWallet />
        }
      </HStack>
    </HStack>
  );
};

export default Header;
