import { CustomResource } from '../i18n';

const en: CustomResource = {
  translation: {
    join: 'Join the Market!',
    create: 'Create New Game',
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
