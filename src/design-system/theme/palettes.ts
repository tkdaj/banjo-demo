import type { PaletteOptionsObject } from './theme.types';

export const palettes: PaletteOptionsObject = {
  light: {
    name: 'light',
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      primary: '#4C6FFF',
      secondary: '#E4ECF7',
      tertiary: '#505780',
      danger: '#F16063',
      warning: '#F7936F',
      success: '#66CB9F',
      dominant: '#FFFFFF',
      complementary: '#16192C',
      textHeadingDark: '#27272E',
      textBodyMuted: '#718096',
      textBodyLight: '#425466',
      tableBorder: '#EDF2F7',
      tableHeadText: '#8492A6',
      tableHeadBackground: '#FAFAFB',
    },
  },
  dark: {
    name: 'dark',
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      primary: '#4C6FFF',
      secondary: '#E4ECF7',
      tertiary: '#505780',
      danger: '#F16063',
      warning: '#F7936F',
      success: '#66CB9F',
      dominant: '#16192C',
      complementary: '#F2F2F7',
      textHeadingDark: '#FFFFFF',
      textBodyMuted: '#99AAB5',
      textBodyLight: '#B9C0CA',
      tableBorder: '#2C2C34',
      tableHeadText: '#8492A6',
      tableHeadBackground: '#1D1D23',
    },
  },
};
