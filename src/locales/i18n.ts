import i18n, { Resource, ResourceLanguage } from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './ko';
import en from './en';
import ar from './ar';
import ja from './ja';
import es from './es';

interface CustomTranslation {
  join: string;
  create: string;

  warnings: {
    generic: string;
    unauthorized: string;
  };

  signinModal: {
    title: string;
    nickname: string;
    password: string;
    confirm: string;
  };
  gameTable: {
    theme: string;
    users: string;
    join: string;
  };
  createModal: {
    title: string;
    message: string;
    confirm: string;
    error: string;
  };

  game: {
    participants: string;
    leave: string;
    start: string;
    wait: string;
    deposit: string;
    trade: string;
    leaveModal: {
      title: string;
      message: string;
      cancel: string;
      confirm: string;
      error: string;
    };
    startModal: {
      title: string;
      message: string;
      errorTitle: string;
      errorMessage: string;
    };
    tradeModal: {
      title: string;
      confirm: string;
      cancel: string;
      error: string;
    };
    eventCover: {
      title: string;
      message: string;
    };
  };
}

interface CustomResource extends ResourceLanguage {
  translation: CustomTranslation;
}

const resources: Resource = {
  ko,
  en,
  ar,
  ja,
  es,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
export type { CustomTranslation, CustomResource };
