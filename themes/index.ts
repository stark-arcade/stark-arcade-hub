import { ComponentStyleConfig, extendTheme } from '@chakra-ui/react';

export const colors = {
  shader: {
    50: '#FAFAFA',
    100: '#F4F4F5',
    200: '#E4E4E7',
    300: '#D4D4D8',
    400: '#A1A1AA',
    500: '#71717A',
    600: '#52525B',
    700: '#3F3F46',
    800: '#27272A',
    900: '#18181B',
  },
  primary: {
    50: '#F0EEE7',
    100: '#E2DECF',
    200: '#D3CDB8',
    300: '#C4BCA0',
    400: '#B6AB88',
    500: '#A79B70',
    600: '#988A58',
    700: '#897941',
    800: '#7B6929',
    900: '#6C5811',
  },
  gradient: {
    100: 'linear-gradient(180deg, #E3FF74 0%, #E37C39 100%)',
  },
};

const Button: ComponentStyleConfig = {
  variants: {
    primary: {
      background: 'shader.500',
      py: 2,
      px: 6,
      borderRadius: '100px',
    },
    secondary: {
      bg: 'primary.500',
      color: 'white',
      py: 2,
      px: 6,
      borderRadius: '100px',
    },
  },
};
const Text: ComponentStyleConfig = {
  variants: {
    gradient_text: {
      background: 'gradient.100',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },
};
const styles = {
  // eslint-disable-next-line no-unused-vars
  global: () => ({
    body: {
      bg: '#18181B',
      color: 'white',
    },
  }),
};

export const Menu: ComponentStyleConfig = {
  variants: {
    profile: {
      list: {
        py: 4,
        px: 2,
        borderRadius: 'xl',
        border: 'none',
        bg: 'shader.700',
      },
      item: {
        bg: 'inherit',
        color: 'shader.500',
        py: 2,
        px: 4,
        borderRadius: '2xl',
        display: 'flex',
        fontWeight: '700',
        gap: 4,
        _hover: {
          bg: 'primary.600',
          color: 'white',
        },
      },
      command: {
        opacity: '0.8',
        fontFamily: 'mono',
        fontSize: 'sm',
        letterSpacing: 'tighter',
        pl: '4',
      },
      divider: {
        // this will style the MenuDivider component
        my: '4',
      },
    },
  },
};
export const Tabs: ComponentStyleConfig = {
  variants: {
    unstyled: {
      tablist: {
        background: `#FAFAFA33`,
        width: 'fit-content',
        borderRadius: '24px',
        py: 2,
      },
      tab: {
        px: 4,
        py: 2,
        fontSize: 'lg',
        borderRadius: '24px',
        fontWeight: 'bold',
        color: 'white',
        _selected: {
          color: 'white',
          border: 'unset',
          background: 'primary.500',
        },
      },
    },
  },
};
export const Tag: ComponentStyleConfig = {
  variants: {
    primary: {
      container: {
        border: '1px solid',
        borderColor: 'shader.300',
        bg: '#FAFAFA33',
        px: 4,
        borderRadius: '24px',
      },
      label: {
        fontSize: 'xs',
        fontWeight: 800,
        textTransform: 'capitalize',
        color: 'white',
      },
    },
  },
};
const theme = extendTheme({
  colors,
  styles,
  components: {
    Button,
    Text,
    Menu,
    Tabs,
  },
});

export default theme;
