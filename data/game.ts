export interface GameProps {
  name: string;
  description: string;
  tags: string[];
  link: string;
  banner: string;
  thumbnail: string;
  typeGame?: LABEL_GAMES[];
}
export enum LABEL_GAMES {
  PLAY_TO_EARN = "Play to Earn",
  FREE_TO_PLAY = "Free to Play",
  STORY_GAME = "Story Game",
}
export enum CATEGORY_GAME {}
export const ListGame: GameProps[] = [
  {
    name: "2048",
    description:
      "The simplest gamble, but the biggest thrill - one flip away to decrypt your fortune on Starknet. 50/50 odds of double to triple gains or brutal losses. Call it in the air as the coin dances, while your destiny is defined!",
    tags: ["FlipGame", "coin", "reward"],
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    link: "https://2048-game.starkarcade.com",
    banner: "/assets/games/2048.png",
    thumbnail: "/assets/games/comming_start.svg",
  },
  {
    name: "Tetris",
    description:
      "The simplest gamble, but the biggest thrill - one flip away to decrypt your fortune on Starknet. 50/50 odds of double to triple gains or brutal losses. Call it in the air as the coin dances, while your destiny is defined!",
    tags: ["FlipGame", "coin", "reward"],
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    link: "https://tetris-game.starkarcade.com",
    banner: "/assets/games/tetris.png",
    thumbnail: "/assets/games/comming_start.svg",
  },
  {
    name: "Starkflip",
    description:
      "The simplest gamble, but the biggest thrill - one flip away to decrypt your fortune on Starknet. 50/50 odds of double to triple gains or brutal losses. Call it in the air as the coin dances, while your destiny is defined!",
    tags: ["FlipGame", "coin", "reward"],
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    link: "/game/starkflip",
    banner: "/assets/games/stark_flip.png",
    thumbnail: "/assets/games/comming_start.svg",
  },
  {
    name: "Brushit",
    description:
      "The simplest gamble, but the biggest thrill - one flip away to decrypt your fortune on Starknet. 50/50 odds of double to triple gains or brutal losses. Call it in the air as the coin dances, while your destiny is defined!",
    tags: ["Unity Game", "Dojo", "Fully On-Chain"],
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    link: "/game/starkflip",
    banner: "/assets/games/brush_hit.png",
    thumbnail: "/assets/games/comming_start.svg",
  },
  {
    name: "Starkpot",
    description:
      "The simplest gamble, but the biggest thrill - one flip away to decrypt your fortune on Starknet. 50/50 odds of double to triple gains or brutal losses. Call it in the air as the coin dances, while your destiny is defined!",
    tags: ["FlipGame", "coin", "reward"],
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    link: "https://starkpot.starkarcade.com",
    banner: "/assets/games/starkpot.png",
    thumbnail: "/assets/games/comming_start.svg",
  },
];
