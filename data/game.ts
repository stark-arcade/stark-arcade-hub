export interface GameProps {
  name: string;
  description: string;
  tags: string[];
  link?: string;
  banner: string;
  thumbnail: string;
  // eslint-disable-next-line no-use-before-define
  typeGame?: LABEL_GAMES[];
}
export enum LABEL_GAMES {
  PLAY_TO_EARN = 'Play to Earn',
  FREE_TO_PLAY = 'Free to Play',
  STORY_GAME = 'Story Game',
}
export enum CATEGORY_GAME {}
export const ListGame: GameProps[] = [
  {
    name: 'Brewmaster',
    description:
      'The simplest gamble, but the biggest thrill - one flip away to decrypt your fortune on Starknet. 50/50 odds of double to triple gains or brutal losses. Call it in the air as the coin dances, while your destiny is defined!',
    tags: ['Action', 'RPG', 'Adventure', 'Tesnet'],
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    banner: '/assets/games/stark_voyage.png',
    thumbnail: '/assets/games/comming_start.svg',
  },
  {
    name: '2048',
    description:
      'Challenge your mind and swipe your way to 2048 in the ultimate number-merging puzzle game!',
    tags: ['Puzzle', 'Entertaining', 'Mainnet'],
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    link: 'https://2048-game.starkarcade.com',
    banner: '/assets/games/2048.png',
    thumbnail: '/assets/games/comming_start.svg',
  },
  {
    name: 'Tetris',
    description:
      'Get ready to twist, turn, and drop your way to flying scores in this timeless puzzle, now reimagined on Starknet',
    tags: ['Puzzle', 'Entertaining', 'Mainnet'],
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    link: 'https://tetris-game.starkarcade.com',
    banner: '/assets/games/tetris.png',
    thumbnail: '/assets/games/comming_start.svg',
  },
  {
    name: 'Starkflip',
    description:
      'The simplest game, but the biggest thrill - one flip away to decrypt your fortune on Starknet. ',
    tags: ['Prediction', 'Coin Flip', 'Mainnet'],
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    link: 'https://starkflip.starkarcade.com/',
    banner: '/assets/games/stark_flip.png',
    thumbnail: '/assets/games/comming_start.svg',
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
    name: 'StarkSweep',
    description:
      'Spin the brush, paint the sticks, and stay dry in the thrilling challenge of StarkSweep!',
    tags: ['Casual', 'Entertaining', 'Testnet'],
    link: 'https://starksweep.starkarcade.com',
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    banner: '/assets/games/brush_hit.png',
    thumbnail: '/assets/games/comming_start.svg',
  },

  {
    name: 'StarkVoyager',
    description:
      'The simplest gamble, but the biggest thrill - one flip away to decrypt your fortune on Starknet. 50/50 odds of double to triple gains or brutal losses. Call it in the air as the coin dances, while your destiny is defined!',
    tags: ['Action', 'RPG', 'Adventure', 'Tesnet'],
    typeGame: [LABEL_GAMES.PLAY_TO_EARN],
    banner: '/assets/games/stark_voyage.png',
    thumbnail: '/assets/games/comming_start.svg',
  },
];

export const LisGameForYou: GameProps[] = [];
