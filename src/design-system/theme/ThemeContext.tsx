import { createStore } from 'solid-js/store';

import type { Accessor, ParentProps } from 'solid-js';
import { createSignal, createContext, useContext } from 'solid-js';

import { noop } from '@banjo/utils';

import type { PaletteOption, Theme } from './theme.types';
import { getTheme } from './utils';

const defaultPalette: PaletteOption = 'light';

interface ThemeContextValue {
  themeName: Accessor<PaletteOption>;
  theme: Theme;
  setTheme: (newPalette: PaletteOption) => void;
}

const initialValue: ThemeContextValue = {
  themeName: () => defaultPalette,
  theme: getTheme(defaultPalette),
  setTheme: noop,
};

const ThemeContext = createContext<ThemeContextValue>(initialValue);

export function ThemeProvider(props: ParentProps) {
  const [themeName, setThemeName] = createSignal<PaletteOption>(defaultPalette);
  const [theme, setContextTheme] = createStore<Theme>(initialValue.theme);
  const setTheme = (newPalette: PaletteOption) => {
    setThemeName(newPalette);
    setContextTheme(getTheme(newPalette));
  };

  const contextValue = () => ({
    themeName,
    theme,
    setTheme,
  });

  return <ThemeContext.Provider value={contextValue()}>{props.children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
