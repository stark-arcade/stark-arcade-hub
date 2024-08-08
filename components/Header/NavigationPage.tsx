import {
  HStack,
  Link as ChakraLink,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  useDisclosure,
  Button,
  StackProps,
  TextProps,
} from '@chakra-ui/react';
import Link from 'next/link';
import TwitterIcon from '@/public/assets/icons/twitter.svg';
import DiscordIcon from '@/public/assets/icons/discord.svg';
import React from 'react';
interface LinkProps {
  label: string;
  link: string;
  target?: boolean;
  isDisbaled?: boolean;
  sx?: TextProps;
}
interface IProps {
  sx?: StackProps;
}
const NavigationPage = ({ sx }: IProps) => {
  const ListPage: LinkProps[] = [
    {
      label: 'Games',
      link: '/games',
      isDisbaled: true,
    },
    {
      label: 'Leaderboard',
      link: '/leaderboard',
      isDisbaled: true,
    },
    {
      label: 'Services',
      link: '/service',
      isDisbaled: true,
    },
    {
      label: 'Join us',
      link: '/submit-game',
      sx: {
        background: 'gradient.100',
        backgroundClip: 'text',
        style: {
          WebkitTextFillColor: 'transparent',
        },
      },
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack gap={{ lg: 10, md: 6 }} {...sx}>
      {ListPage.map(item => (
        <React.Fragment key={item.label}>
          {item.isDisbaled ? (
            <Text fontWeight="bold" opacity={0.6} cursor="not-allowed">
              {item.label}
            </Text>
          ) : (
            <ChakraLink
              as={Link}
              href={item.link}
              fontWeight="bold"
              sx={{
                textDecoration: 'none',

                '&:hover': {
                  textDecoration: 'none',
                  color: 'primary.600',
                },
                ...item.sx,
              }}
            >
              {item.label}
            </ChakraLink>
          )}
        </React.Fragment>
      ))}

      <Menu variant="profile" isOpen={isOpen} onClose={onClose}>
        <MenuButton
          fontWeight="bold"
          onMouseOver={onOpen}
          as={Button}
          variant="unstyled"
          _hover={{
            color: 'primary.600',
          }}
        >
          Social
        </MenuButton>
        <MenuList minWidth="80px" fontWeight="bold">
          <Link href="https://twitter.com/starkarcade" target="_blank">
            <MenuItem gap={2}>
              <Icon as={TwitterIcon} h={6} w={6} />
              <Text>Twitter</Text>
            </MenuItem>
          </Link>
          <Link href="https://discord.gg/n93qp8AW" target="_blank">
            <MenuItem>
              <Icon as={DiscordIcon} h={6} w={6} />
              <Text>Discord</Text>
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default NavigationPage;
