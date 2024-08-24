import { CustomResource } from '../i18n';

const ar: CustomResource = {
  translation: {
    join: 'انضم إلى السوق!',
    create: 'أنشئ لعبة جديدة',
    warnings: {
      generic: 'حدث خطأ',
      unauthorized: 'الرجاء تسجيل الدخول أولاً',
    },
    howto: {
      buttonName: 'كيفية اللعب',
      tutorial: `"Trader Week" هي لعبة تقوم فيها بقراءة تغيرات سوق الأسهم على مدار 7 جولات ووضع استراتيجية لتحقيق أقصى قدر من الربح. قم بإنشاء حساب باستخدام اسم مستعار وكلمة مرور عشوائيين مع رأس مال يبلغ 10,000. انضم إلى لعبة موجودة بالفعل أو قم بإنشاء سوق جديد مع موضوع مثير. بعد الانضمام إلى اللعبة، انتظر حتى يبدأ المضيف اللعبة. تتقلب أسعار أسهم 5 شركات على مدار 7 جولات. لا تنسَ الضغط على زر "تنفيذ التداول" لإتمام صفقاتك! إذا كنت جاهزًا للسيطرة على السوق، ابدأ اللعبة الآن!`,
      close: 'إغلاق',
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
    historyTable: {
      title: 'الألعاب السابقة',
      view: 'عرض',
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
