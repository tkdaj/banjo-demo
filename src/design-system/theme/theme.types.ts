import type { getTheme } from './utils';

export type PaletteOption = 'light' | 'dark';
export type ColorName = keyof PaletteDefinition<PaletteOption>['colors'];
export interface PaletteDefinition<PaletteName extends PaletteOption> {
  name: PaletteName;
  colors: ColorsObject;
}

export interface ColorsObject {
  white: string;
  black: string;
  gray100: string;
  primary: string;
  secondary: string;
  danger: string;
  warning: string;
  success: string;
  dominant: string;
  complementary: string;
  tertiary: string;
  textHeadingDark: string;
  textBodyMuted: string;
  textBodyLight: string;
  tableBorder: string;
  tableHeadText: string;
  tableHeadBackground: string;
  pageHeader: string;
  placeholder: string;
  strong: string;
  strongComplement: string;
}

export type ThemeColor = keyof ColorsObject;

export type PaletteOptionsObject = {
  [Option in PaletteOption]: PaletteDefinition<Option>;
};

export type Theme = ReturnType<typeof getTheme>;
