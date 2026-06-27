import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (value: Theme) => void;
}

const STORAGE_KEY = 'theme';

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface Prop {
  children?: ReactNode;
}

// Resolve the initial theme: a previously saved choice wins; otherwise fall
// back to the visitor's OS/browser preference (prefers-color-scheme).
function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'light' || saved === 'dark') return saved;

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const ThemeProvider = ({ children }: Prop) => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  // Reflect the active theme on <html data-theme="..."> so the CSS variables
  // in _themes.scss take effect across the whole document. We intentionally do
  // NOT persist here — only an explicit choice (below) is remembered.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Follow live OS changes only while the user hasn't made an explicit choice.
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!mq) return;

    const onChange = (e: MediaQueryListEvent) => {
      if (!window.localStorage.getItem(STORAGE_KEY)) setThemeState(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // An explicit choice is persisted so it survives reloads and stops OS-following.
  const setTheme = (value: Theme) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setThemeState(value);
  };
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
