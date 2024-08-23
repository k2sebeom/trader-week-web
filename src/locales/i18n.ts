import i18n, { Resource, ResourceLanguage } from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './ko';

interface CustomTranslation {
  hello: string;
}

interface CustomResource extends ResourceLanguage {
  translation: CustomTranslation;
}

const resources: Resource = {
  ko,
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
