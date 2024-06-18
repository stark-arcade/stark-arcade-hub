import { Button, Icon } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import LogoIcon from "@/public/assets/logo/logo-lab.svg";
const ButonDecolgenLab = () => {
  return (
    <Link href="https://www.decolgenlabs.com/" target="_blank">
      <Button
        role="group"
        leftIcon={
          <Icon
            as={LogoIcon}
            h={6}
            width={6}
            color="shader.50"
            _groupHover={{
              path: {
                fill: "url(#paint1_linear_9_45)",
              },
            }}
          />
        }
        variant="primary"
        bg="primary.500"
        fontWeight={700}
      >
        Lab
      </Button>
    </Link>
  );
};

export default ButonDecolgenLab;
