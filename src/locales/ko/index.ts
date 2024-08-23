import { CustomResource } from '../i18n';

const ko: CustomResource = {
  translation: {
    join: '시장에 참여하세요!',
    create: '새 게임 만들기',

    gameTable: {
      theme: '테마',
      users: '사용자',
      join: '참가',
    },

    createModal: {
      title: '게임의 테마를 입력하세요!',
      message: '새 시장을 만드는 데에 최대 2분이 소요될 수 있습니다',
      confirm: '게임 만들기',
      error: '지금은 게임을 만들 수 없습니다. 몇 분 후에 다시 시도해 주세요.',
    },

    game: {
      participants: '참가자',
      leave: '나가기',
      start: '시작!',
      wait: '기다려 주세요...',
      deposit: '예수금',
      trade: '거래 체결',
      leaveModal: {
        title: '게임에서 나가시겠습니까?',
        message: '기업들이 투자자님을 애타게 기다립니다.',
        cancel: '시장을 제패하기',
        confirm: '나가기',
        error: '방을 나가는 데 실패했습니다..',
      },
      startModal: {
        title: '게임을 시작하시겠습니까?',
        message: '시장이 열립니다. 준비해 주세요.',
        errorTitle: '시장을 시작하는 데 실패했습니다',
        errorMessage: '나중에 다시 시도해 주세요...',
      },
      tradeModal: {
        title: '거래를 진행하시겠습니까?',
        confirm: '확인',
        cancel: '잠시 기다려 주세요...',
        error: '거래를 실패했습니다...',
      },
      eventCover: {
        title: '시장이 이제 종료되었습니다!',
        message: '더 많은 거래를 진행하세요',
      },
    },
  },
};

export default ko;
