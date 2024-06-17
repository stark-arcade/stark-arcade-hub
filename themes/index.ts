import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";

export const colors = {
  shader: {
    100: "#A0CBD9",
    200: "#333D7E",
    300: "#33C7F1",
    400: "#85D4F0",
    500: "#13359A",
    600: "#694158",
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
