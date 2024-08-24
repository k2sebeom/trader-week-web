import { CustomResource } from '../i18n';

const ar: CustomResource = {
  translation: {
    join: 'انضم إلى السوق!',
    create: 'أنشئ لعبة جديدة',
    warnings: {
      generic: 'حدث خطأ',
      unauthorized: 'الرجاء تسجيل الدخول أولاً',
    },
    supportModal: {
      title: 'ادعم السوق',
      message: 'هذا اللعبة مدعومة من المجتمع ❤️',
      cancel: 'خذني إلى اللعبة فقط',
    },
    signinModal: {
      title: 'سجل دخولك / اشتراكك كتاجر!',
      nickname: 'الاسم المستعار', // placeholder for nickname field
      password: 'كلمة المرور', // placeholder for password field
      confirm: 'ابدأ التداول!',
    },

    gameTable: {
      theme: 'الموضوع', // of the game
      users: 'المستخدمون', // users
      join: 'انضم', // button label for Joining Game
    },

    createModal: {
      title: 'أدخل موضوعًا للعبة!',
      message: 'قد يستغرق إعداد السوق الجديد حتى دقيقتين',
      confirm: 'أنشئ لعبة',
      error: 'لا يمكن إنشاء اللعبة الآن. حاول مرة أخرى بعد بضع دقائق.',
    },

    game: {
      participants: 'المشاركون',
      leave: 'مغادرة', // button name for leaving the game
      start: 'ابدأ!',
      wait: 'انتظر...',
      deposit: 'الإيداع', // The amount of money available to use for investment
      trade: 'تداول', // a button label for making trade
      leaveModal: {
        title: 'مغادرة اللعبة؟',
        message: 'هل تريد حقًا مغادرة اللعبة؟',
        cancel: 'في الواقع، لا',
        confirm: 'نعم',
        error: 'فشل في مغادرة الغرفة..',
      },
      startModal: {
        title: 'بدء اللعبة؟',
        message: 'سيؤدي هذا إلى بدء السوق على الفور',
        errorTitle: 'فشل في بدء السوق',
        errorMessage: 'حاول مرة أخرى لاحقًا...',
      },
      tradeModal: {
        title: 'إجراء صفقة؟',
        confirm: 'مستعد للانطلاق',
        cancel: 'انتظر...',
        error: 'فشل في إجراء الصفقة...',
      },
      eventCover: {
        title: 'السوق مغلق الآن!',
        message: 'تابع المزيد من التداول',
      },
    },
  },
};

export default ar;
