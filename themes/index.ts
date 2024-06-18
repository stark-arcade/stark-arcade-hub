import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";

export const colors = {
  shader: {
    100: "#A0CBD9",
    200: "#333D7E",
    300: "#33C7F1",
    400: "#85D4F0",
    500: "#13359A",
    600: "#694158",
    700: "",
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
