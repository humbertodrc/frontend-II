import { FC } from 'react';
import { useLanguage } from 'features/language/index';

const LanguageComponent: FC = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div className={'language'}>
      <button
        onClick={() => setLanguage('SPANISH')}
        className={language === 'SPANISH' ? 'language-button active' : 'language-button'}>
        {t('language.spanish')}
      </button>
      <button
        onClick={() => setLanguage('ENGLISH')}
        className={language === 'ENGLISH' ? 'language-button active' : 'language-button'}>
        {t('language.english')}
      </button>
      <button
        onClick={() => setLanguage('PORTUGUESE')}
        className={language === 'PORTUGUESE' ? 'language-button active' : 'language-button'}>
        {t('language.portuguese')}
      </button>
    </div>
  );
};
export default LanguageComponent;
