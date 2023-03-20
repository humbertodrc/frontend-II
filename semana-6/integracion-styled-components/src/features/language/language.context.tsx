import { createContext, FC, useContext, useMemo, useState } from 'react';
import Languages from 'features/language/language.types';
import translate from 'features/language/language.services';

export interface LanguageState {
  language: Languages;
  setLanguage: (language: Languages) => void;
  t: (key: string) => string;
}

const initialState = {
  language: 'ENGLISH' as Languages
} as LanguageState;

const LanguageContext = createContext<LanguageState | undefined>(undefined);

export const LanguageProvider: FC = ({ children }) => {
  const [language, setLanguage] = useState<Languages>(initialState.language);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: string) => translate(language, key)
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

const useLanguage = (): LanguageState => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default useLanguage;
