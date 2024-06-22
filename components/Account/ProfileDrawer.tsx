import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import WalletIcon from '@/public/assets/icons/wallet.svg';
import VerifyIcon from '@/public/assets/icons/verified.svg';
import ProfileIcon from '@/public/assets/icons/profile.svg';
import LogoutIcon from '@/public/assets/icons/logout.svg';
import FAQIcon from '@/public/assets/icons/anoymos.svg';
import BugIcon from '@/public/assets/icons/bug.svg';

import { useAuth } from '@/hooks/useAuth';
interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
const ProfileDrawer = ({ isOpen, onClose }: IProps) => {
  const { disconnectWallet } = useAuth();
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="shader.800">
          <DrawerCloseButton />

          <DrawerBody py={10} display="flex" flexDirection="column" gap={6}>
            <HStack opacity={0.4} cursor="not-allowed">
              <Icon as={ProfileIcon} h={6} w={6} />
              <Text>Setting Profile</Text>
            </HStack>
            <HStack opacity={0.4} cursor="not-allowed">
              <Icon as={BugIcon} h={6} w={6} />
              <Text>Report Bug</Text>
            </HStack>
            <HStack opacity={0.4} cursor="not-allowed">
              <Icon as={FAQIcon} h={6} w={6} />
              <Text>FAQ Support</Text>
            </HStack>
            <HStack
              onClick={async () => {
                disconnectWallet();
              }}
            >
              <Icon as={LogoutIcon} h={6} w={6} />
              <Text>Logout</Text>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProfileDrawer;
