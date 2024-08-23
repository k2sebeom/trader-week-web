interface LanguageSelectParam {
  value: string;
  label: string;
}
export const supportedLanguages: LanguageSelectParam[] = [
  {
    value: 'ko',
    label: '한국어',
  },
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'ar',
    label: 'عربي',
  },
  {
    value: 'es',
    label: 'español',
  },
  {
    value: 'ja',
    label: '日本語',
  },
];

export function getLanguage() {
  const code = localStorage.getItem('lng') || navigator.language;
  if (!supportedLanguages.map((l) => l.value).includes(code)) {
    return 'en';
  }
  return code.split('-')[0];
}

export function setLanguage(code: string) {
  localStorage.setItem('lng', code);
}
