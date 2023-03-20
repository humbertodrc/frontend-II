import { FC } from 'react';
import { useLanguage } from 'features/language/index';
import { LanguageButton, WrapperLanguage } from './language.styles';

const LanguageComponent: FC = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <WrapperLanguage>
      <LanguageButton
        onClick={() => setLanguage('SPANISH')}
        // className={language === 'SPANISH' ? 'active' : ''}
        // languageActive={language}
        isActive={language === 'SPANISH' ? true : false}>
        {t('language.spanish')}
      </LanguageButton>
      <LanguageButton
        onClick={() => setLanguage('ENGLISH')}
        // className={language === 'ENGLISH' ? 'active' : ''}
        // languageActive={language}
        isActive={language === 'ENGLISH' ? true : false}>
        {t('language.english')}
      </LanguageButton>
      <LanguageButton
        onClick={() => setLanguage('PORTUGUESE')}
        // className={language === 'PORTUGUESE' ? 'active' : ''}
        // languageActive={language}
        isActive={language === 'PORTUGUESE' ? true : false}>
        {t('language.portuguese')}
      </LanguageButton>
    </WrapperLanguage>
  );
};
export default LanguageComponent;
