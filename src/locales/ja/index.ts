import { CustomResource } from '../i18n';

const ja: CustomResource = {
  translation: {
    join: 'マーケットに参加しよう！',
    create: '新しいゲームを作成',
    warnings: {
      generic: 'エラーが発生しました',
      unauthorized: 'まずログインしてください',
    },
    howto: {
      buttonName: '遊び方',
      tutorial: `"Trader Week" は、7ターンにわたる株式市場の変動を読み取り、最大の利益を上げる戦略を立てるゲームです。ランダムなニックネームとパスワードを使用して、所持金10000のアカウントを作成してください。既存のゲームに参加するか、興味深いテーマを設定して新しい市場を作成しましょう。ゲームに参加した後、ホストがゲームを開始するまで待ってください。5つの企業の株価が7ターンの間変動します。取引を完了するためには、「取引進行」ボタンを押すのを忘れないでください！市場を支配する準備ができたら、今すぐゲームを始めましょう！`,
      close: '閉じる',
    },
    supportModal: {
      title: 'マーケットをサポートする',
      message: 'このゲームはコミュニティによってサポートされています ❤️',
      cancel: 'ゲームに移動するだけ',
    },
    signinModal: {
      title: 'トレーダーとしてサインイン / サインアップ！',
      nickname: 'ニックネーム', // ニックネーム入力欄のプレースホルダー
      password: 'パスワード', // パスワード入力欄のプレースホルダー
      confirm: 'トレードを始めよう！',
    },

    gameTable: {
      theme: 'テーマ', // ゲームのテーマ
      users: '参加者', // 参加者
      join: '参加する', // ゲームに参加するボタンのラベル
    },
    historyTable: {
      title: '過去のゲーム',
      view: '表示',
    },

    createModal: {
      title: 'ゲームのテーマを入力してください！',
      message: '新しいマーケットの準備には最大2分かかる場合があります',
      confirm: 'ゲームを作成',
      error: '現在ゲームを作成できません。数分後にもう一度お試しください。',
    },

    game: {
      participants: '参加者',
      leave: '退出', // ゲームを退出するボタンの名前
      start: 'スタート！',
      wait: 'お待ちください...',
      deposit: '預金', // 投資に使えるお金の金額
      trade: 'トレード', // トレードを行うボタンのラベル
      leaveModal: {
        title: 'ゲームを退出しますか？',
        message: '本当にゲームを退出しますか？',
        cancel: 'やっぱりやめる',
        confirm: '退出する',
        error: '部屋から退出できませんでした...',
      },
      startModal: {
        title: 'ゲームを開始しますか？',
        message: 'これですぐにマーケットが始まります',
        errorTitle: 'マーケットの開始に失敗しました',
        errorMessage: 'もう一度後でお試しください...',
      },
      tradeModal: {
        title: 'トレードを行いますか？',
        confirm: 'これで決定',
        cancel: '待ってください...',
        error: 'トレードに失敗しました...',
      },
      eventCover: {
        title: 'マーケットは現在閉鎖中です！',
        message: 'もっとトレードしてください',
      },
    },
  },
};

export default ja;
