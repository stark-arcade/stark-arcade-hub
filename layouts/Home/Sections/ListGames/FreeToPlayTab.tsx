import React from "react";
import { ListGame } from "@/data/game";
import { Grid } from "@chakra-ui/react";
import CardGame from "@/components/Card/CardGame";
const FreeToPlayTab = () => {
  return (
    <Grid
      gridTemplateColumns={{
        lg: "repeat(4,1fr)",
        md: "repeat(3,1fr)",
        base: "repeat(1,1fr)",
      }}
      gridGap={4}
    >
      {ListGame.map((game, index) => (
        <CardGame key={index} {...game} />
      ))}
    </Grid>
  );
};

export default FreeToPlayTab;
