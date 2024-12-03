export interface GameProps {
  name: string;
  description: string;
  tags: string[];
  link?: string;
  banner: string;
  avatar: string;
  thumbnail: string;
  // eslint-disable-next-line no-use-before-define
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
    name: "Brewmaster Is Officially Live 🍻",
    description: `Don't let those boozers await! Serve your beer NOW.`,
    tags: ["Action", "RPG", "Adventure", "Tesnet"],
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    banner: "/assets/games/boltwade/brewmaster_banner.png",
    thumbnail: "/assets/games/comming_start.svg",
    avatar: "/assets/games/boltwade/brewmaster_logo.svg",
    link: "https://brewmaster.boltwade.xyz/",
  },
  {
    name: "StarkSweep",
    description:
      "Spin the brush, paint the sticks, and stay dry in the thrilling challenge of StarkSweep!",
    tags: ["Casual", "Entertaining", "Testnet"],
    link: "https://starksweep.starkarcade.com",
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    banner: "/assets/games/arcade/brush_hit.png",
    thumbnail: "/assets/games/comming_start.svg",
    avatar: "/assets/games/arcade/logo.svg",
  },
  {
    name: "2048",
    description:
      "Challenge your mind and swipe your way to 2048 in the ultimate number-merging puzzle game!",
    tags: ["Puzzle", "Entertaining", "Mainnet"],
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    link: "https://2048-game.starkarcade.com",
    banner: "/assets/games/arcade/2048.png",
    thumbnail: "/assets/games/comming_start.svg",
    avatar: "/assets/games/arcade/logo.svg",
  },
  {
    name: "Tetris",
    description:
      "Get ready to twist, turn, and drop your way to flying scores in this timeless puzzle, now reimagined on Starknet",
    tags: ["Puzzle", "Entertaining", "Mainnet"],
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    link: "https://tetris-game.starkarcade.com",
    banner: "/assets/games/arcade/tetris.png",
    thumbnail: "/assets/games/comming_start.svg",
    avatar: "/assets/games/arcade/logo.svg",
  },
  {
    name: "Starkflip",
    description:
      "The simplest game, but the biggest thrill - one flip away to decrypt your fortune on Starknet. ",
    tags: ["Prediction", "Coin Flip", "Mainnet"],
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    link: "https://starkflip.starkarcade.com/",
    banner: "/assets/games/arcade/stark_flip.png",
    thumbnail: "/assets/games/comming_start.svg",
    avatar: "/assets/games/arcade/logo.svg",
  },
  // {
  //   name: 'Starkpot',
  //   description:
  //     'Test your foresight and hit the jackpot with our thrilling number prediction challenge!',
  //   tags: ['Prediction', 'Raffle', 'Mainnet'],
  //   typeGame: [LABEL_GAMES.PLAY_TO_EARN],
  //   link: 'https://starkpot.starkarcade.com',
  //   banner: '/assets/games/starkpot.png',
  //   thumbnail: '/assets/games/comming_start.svg',
  // },

  {
    name: "StarkVoyager",
    description: "New Game StarkVoyager",
    tags: ["Action", "RPG", "Adventure", "Tesnet"],
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    banner: "/assets/games/arcade/stark_voyage.png",
    thumbnail: "/assets/games/comming_start.svg",
    avatar: "/assets/games/arcade/logo.svg",
  },
];

export const ListHotGame: GameProps[] = [
  {
    name: "Brewmaster Is Officially Live 🍻",
    description: `Don't let those boozers await! Serve your beer NOW`,
    tags: ["Action", "RPG", "Adventure", "Tesnet"],
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    banner: "/assets/games/boltwade/brewmaster_banner.png",
    thumbnail: "/assets/games/comming_start.svg",
    avatar: "/assets/games/boltwade/brewmaster_logo.svg",
    link: "https://brewmaster.boltwade.xyz/",
  },
  {
    name: "StarkSweep",
    description:
      "Spin the brush, paint the sticks, and stay dry in the thrilling challenge of StarkSweep!",
    tags: ["Casual", "Entertaining", "Testnet"],
    link: "https://starksweep.starkarcade.com",
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    banner: "/assets/games/arcade/brush_hit.png",
    thumbnail: "/assets/games/comming_start.svg",
    avatar: "/assets/games/arcade/logo.svg",
  },
  {
    name: "Starkflip",
    description:
      "The simplest game, but the biggest thrill - one flip away to decrypt your fortune on Starknet. ",
    tags: ["Prediction", "Coin Flip", "Mainnet"],
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    link: "https://starkflip.starkarcade.com/",
    banner: "/assets/games/arcade/stark_flip.png",
    thumbnail: "/assets/games/comming_start.svg",
    avatar: "/assets/games/arcade/logo.svg",
  },
  {
    name: "2048",
    description:
      "Challenge your mind and swipe your way to 2048 in the ultimate number-merging puzzle game!",
    tags: ["Puzzle", "Entertaining", "Mainnet"],
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    link: "https://2048-game.starkarcade.com",
    banner: "/assets/games/arcade/2048.png",
    thumbnail: "/assets/games/comming_start.svg",
    avatar: "/assets/games/arcade/logo.svg",
  },
  {
    name: "Tetris",
    description:
      "Get ready to twist, turn, and drop your way to flying scores in this timeless puzzle, now reimagined on Starknet",
    tags: ["Puzzle", "Entertaining", "Mainnet"],
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    link: "https://tetris-game.starkarcade.com",
    banner: "/assets/games/arcade/tetris.png",
    thumbnail: "/assets/games/comming_start.svg",
    avatar: "/assets/games/arcade/logo.svg",
  },

  // {
  //   name: 'Starkpot',
  //   description:
  //     'Test your foresight and hit the jackpot with our thrilling number prediction challenge!',
  //   tags: ['Prediction', 'Raffle', 'Mainnet'],
  //   typeGame: [LABEL_GAMES.PLAY_TO_EARN],
  //   link: 'https://starkpot.starkarcade.com',
  //   banner: '/assets/games/starkpot.png',
  //   thumbnail: '/assets/games/comming_start.svg',
  // },

  {
    name: "StarkVoyager",
    description: "New Game StarkVoyager",
    tags: ["Action", "RPG", "Adventure", "Tesnet"],
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    banner: "/assets/games/arcade/stark_voyage.png",
    thumbnail: "/assets/games/comming_start.svg",
    avatar: "/assets/games/arcade/logo.svg",
  },
];
