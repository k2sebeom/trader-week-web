import 'i18next';
import { CustomTranslation } from './locales/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'default';
    resources: {
      default: CustomTranslation;
    };
  }
}
