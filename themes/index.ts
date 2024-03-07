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
    primary: {
      bg: "shader.100",
      color: "#1E1E1E",
      py: 2,
      px: 8,
      borderRadius: "1.5rem",
      transition: "all .3s",
      _hover: {
        bg: "#85D4F0",
        boxShadow:'0px 0px 32px #85D4F0'
      },
    },
  },
};
const styles = {
  // eslint-disable-next-line no-unused-vars
  global: () => ({
    body: {
      bg: "#020D11",
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
