import { createContext, FC, useState } from 'react';


interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}


export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {

  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;