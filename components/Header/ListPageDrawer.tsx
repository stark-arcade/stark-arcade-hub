import React from 'react';
import HamburgerIcon from '@/public/assets/icons/hamburger.svg';
import CloseIcon from '@/public/assets/icons/close.svg';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
import NavigationPage from './NavigationPage';
const ListPageDrawer = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <>
      <Icon
        as={isOpen ? CloseIcon : HamburgerIcon}
        height={6}
        width={6}
        onClick={onToggle}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent bg="shader.800" mt="80px">
          <DrawerBody py={10} display="flex" flexDirection="column" gap={6}>
            <NavigationPage
              sx={{
                flexDirection: 'column',
                gap: 8,
              }}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ListPageDrawer;
