import React from "react";
import { ListGame } from "@/data/game";
import { Grid } from "@chakra-ui/react";
import CardGame from "@/components/Card/CardGame";
const FreeToPlayTab = () => {
  return (
    <Grid gridTemplateColumns={"repeat(4,1fr)"} gridGap={4}>
      {ListGame.map((game, index) => (
        <CardGame key={index} {...game} />
      ))}
    </Grid>
  );
};

export default FreeToPlayTab;
