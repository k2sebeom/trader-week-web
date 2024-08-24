import { CustomResource } from '../i18n';

const ko: CustomResource = {
  translation: {
    join: '시장에 참여하세요!',
    create: '새 게임 만들기',
    rankingTable: {
      title: '시장의 정복자들',
    },
    warnings: {
      generic: '오류가 발생했습니다.',
      unauthorized: '로그인을 먼저 하세요.',
    },
    howto: {
      buttonName: '플레이 방법',
      tutorial: `"Trader Week" 는 7턴간의 변동하는 주가 시장을 읽어내어, 최대의 수익을 내는 전략을 세우는 게임입니다. 임의의 닉네임과 비밀번호를 이용해서 자본금 10000을 지닌 계정을 만드십시오. 이미 생성되어 있는 게임에 참가하거나, 흥미로운 테마를 설정하여 새로운 시장을 생성하세요. 게임에 참가한 후, 방장이 게임을 시작할 때까지 기다리세요. 5개의 기업의 주가가 7턴동안 변동합니다. 거래를 체결하기 위해서, "거래 진행" 버튼을 반드시 누르는 것을 잊지 마세요! 시장의 지배자가 될 준비가 되었다면, 게임을 시작하세요!`,
      close: '닫기',
    },
    supportModal: {
      title: '마켓을 지원해주세요',
      message: '이 게임은 커뮤니티의 지원으로 운영됩니다 ❤️',
      cancel: '그냥 게임으로 이동할게요',
    },
    signinModal: {
      title: '투자자로 로그인 / 회원가입 하세요!',
      nickname: '닉네임',
      password: '비밀번호',
      confirm: '시장에 뛰어들기',
    },

    gameTable: {
      theme: '테마',
      users: '사용자',
      join: '참가',
    },
    historyTable: {
      title: '지난 게임',
      view: '보기',
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
