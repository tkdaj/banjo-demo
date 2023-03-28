import { palettes } from './palettes';
import type { ColorName, PaletteOption, ThemeColor } from './theme.types';

export function spacing(multiplier: number) {
  return `${multiplier}rem`;
}

export function cssColorKey<Color extends ColorName>(color: Color): `--theme-${Color}` {
  return `--theme-${color}`;
}

export function cssColor<Color extends ColorName>(color: Color): `var(--theme-${Color})` {
  return `var(${cssColorKey(color)})`;
}

const colorArray = Object.keys(palettes.light.colors) as ThemeColor[];

export function getTheme<Option extends PaletteOption>(palette: Option) {
  const jsPalette = palettes[palette];

  const cssColors = colorArray.reduce((acc, colorName) => {
    acc[colorName] = cssColor(colorName);
    return acc;
  }, {} as Record<ThemeColor, string>);

  return {
    spacing,
    palette: jsPalette,
    cssVariables: cssColors,
  };
}

export function pxToRem(px: number): string {
  return `${px / 16}rem`;
}

/**
 * Takes any CSS color and returns the HEX equivalent
 * @param anyColor Any CSS color
 * @returns HEX equivalent of the input color
 */
export function standardizeColorToHex(anyColor: string): string {
  const ctx = document.createElement('canvas').getContext('2d');
  if (ctx == null) return '';
  ctx.fillStyle = anyColor;
  return ctx.fillStyle.toString();
}

export function standardizeColorToRgb(anyColor: string): { r: number; g: number; b: number } {
  let hex = standardizeColorToHex(anyColor);
  if (hex.startsWith('#')) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }
  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
  };
}
