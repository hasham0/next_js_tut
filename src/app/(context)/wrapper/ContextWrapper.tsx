"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Props = { children: ReactNode };

type Theme = {
  color: {
    primary: string;
    secondary: string;
  };
};

export const defaultTheme: Theme = {
  color: {
    primary: "light",
    secondary: "dark",
  },
};

type ThemeContextType = {
  currentTheme: string;
  setCurrentTheme: React.Dispatch<React.SetStateAction<string>>;
};

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: defaultTheme.color.primary,
  setCurrentTheme: () => {},
});

export default function ContextWrapper({ children }: Props) {
  const [currentTheme, setCurrentTheme] = useState<string>(
    defaultTheme.color["primary"]
  );

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// create hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
