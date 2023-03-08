import { createContext } from 'react';

interface CardContextProps {
  toggle: boolean;
  hanldeToggle: () => void;
}

export const CardContext = createContext({} as CardContextProps);