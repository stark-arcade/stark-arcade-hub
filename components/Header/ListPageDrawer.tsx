import React from 'react';
import HamburgerIcon from '@/public/assets/icons/hamburger.svg';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
const ListPageDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Icon as={HamburgerIcon} height={6} width={6} onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody py={10} display="flex" flexDirection="column" gap={6}>
            dsadasd
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ListPageDrawer;
