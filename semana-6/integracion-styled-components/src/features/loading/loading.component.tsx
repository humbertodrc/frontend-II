import { FC } from 'react';
import { useLanguage } from 'features/language';

const LoadingComponent: FC = () => {
  const { t } = useLanguage();
  return <div>{t('loading')}...</div>;
};

export default LoadingComponent;
