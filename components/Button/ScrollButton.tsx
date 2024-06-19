import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import React from "react";
import ArrowIcon from "@/public/assets/icons/arrow.svg";
interface IProps {
  sx?: ButtonProps;
}
const ScrollButton = ({ sx }: IProps) => {
  return (
    <Button
      variant="primary"
      {...sx}
      leftIcon={<Icon as={ArrowIcon} height={6} w={6} />}
    >
      Scroll !
    </Button>
  );
};

export default ScrollButton;
