import esTranslations from 'data/i18n.es';
import enTranslations from 'data/i18n.en';
import ptTranslations from 'data/i18n.pt';
import Languages from 'features/language/language.types';

const translate = (language: Languages, key: string) => {
  if (language === 'SPANISH') {
    return esTranslations[key];
  } else if (language === 'ENGLISH') {
    return enTranslations[key];
  } else if (language === 'PORTUGUESE') {
    return ptTranslations[key];
  }
  return key;
};

export default translate;
