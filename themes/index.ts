import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";

export const colors = {
  shader: {
    50: "#FAFAFA",
    100: "#F4F4F5",
    200: "#E4E4E7",
    300: "#D4D4D8",
    400: "#A1A1AA",
    500: "#71717A",
    600: "#52525B",
    700: "#3F3F46",
    800: "#27272A",
    900: "#18181B",
  },
  primary: {
    50: "#F0EEE7",
    100: "#E2DECF",
    200: "#D3CDB8",
    300: "#C4BCA0",
    400: "#B6AB88",
    500: "#A79B70",
    600: "#988A58",
    700: "#897941",
    800: "#7B6929",
    900: "#6C5811",
  },
  gradient: {
    100: "linear-gradient(180deg, #E3FF74 0%, #E37C39 100%)",
  },
};

const Button: ComponentStyleConfig = {
  variants: {
    primary: {},
  },
};
const styles = {
  // eslint-disable-next-line no-unused-vars
  global: () => ({
    body: {
      bg: "#18181B",
      color: "white",
    },
  }),
};
const theme = extendTheme({
  colors,
  styles,
  components: {
    Button,
  },
});

export default theme;
