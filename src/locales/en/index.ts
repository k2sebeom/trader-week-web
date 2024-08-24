import { CustomResource } from '../i18n';

const en: CustomResource = {
  translation: {
    join: 'Join the Market!',
    create: 'Create New Game',
    howto: {
      buttonName: 'How to Play',
      tutorial: `"Trader Week" is a game where you read the changing stock market over 7 turns and devise a strategy to earn the maximum profit. Create an account with a random nickname and password, starting with a capital of 10,000. Join an already existing game or set up a new market with an exciting theme. After joining a game, wait until the host starts the game. The stock prices of 5 companies will fluctuate over 7 turns. Don't forget to press the "Proceed with Trade" button to complete your trades! If you're ready to dominate the market, start the game now!`,
      close: 'Close',
    },
    warnings: {
      generic: 'An error has occurred.',
      unauthorized: 'You should sign in first',
    },
    historyTable: {
      title: 'Past Games',
      view: 'View',
    },
    supportModal: {
      title: 'Support the market',
      message: 'This game is supported by a community ❤️',
      cancel: 'Just take me to the game',
    },
    signinModal: {
      title: 'Sign in / up as a trader!',
      nickname: 'nickname',
      password: 'password',
      confirm: 'Start Trading!',
    },

    gameTable: {
      theme: 'Theme',
      users: 'Users',
      join: 'Join',
    },

    createModal: {
      title: 'Enter a theme for the game!',
      message: 'It may take upto 2 minutes to setup a new market',
      confirm: 'Create a Game',
      error: 'Game cannot be created now. Please try few minutes later.',
    },

    game: {
      participants: 'Participants',
      leave: 'Leave',
      start: 'Start!',
      wait: 'Wait...',
      deposit: 'Deposit',
      trade: 'Trade',
      leaveModal: {
        title: 'Leave Game?',
        message: 'Do you really want to leave the game?',
        cancel: 'Actually, no',
        confirm: 'Yes',
        error: 'Failed to leave the room..',
      },
      startModal: {
        title: 'Start Game?',
        message: 'This will immediately start the market',
        errorTitle: 'Failed to start the market',
        errorMessage: 'Try again later...',
      },
      tradeModal: {
        title: 'Make trade?',
        confirm: 'Good to go',
        cancel: 'Wait...',
        error: 'Failed to make trade...',
      },
      eventCover: {
        title: 'Market is now Closed!',
        message: 'Go trade more',
      },
    },
  },
};

export default en;
