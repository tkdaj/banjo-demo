import type { JSX } from 'solid-js';
import { mergeProps } from 'solid-js';

import type { Theme } from '@banjo/theme';
import { useTheme, pxToRem } from '@banjo/theme';

export type ButtonSize = 'small' | 'medium';
export type ButtonVariant = 'primary' | 'secondary' | 'dominant' | 'naked';

export interface ButtonConfiguration {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

function getSizeStyles(size: ButtonSize): JSX.CSSProperties {
  const sizeConfigs = {
    small: {
      'border-radius': pxToRem(4),
      'font-size': pxToRem(10),
      padding: `${pxToRem(8)} ${pxToRem(16)}`,
      'line-height': pxToRem(12),
    },
    medium: {
      'border-radius': pxToRem(6),
      'font-size': pxToRem(12),
      padding: `${pxToRem(12)} ${pxToRem(20)}`,
      'line-height': pxToRem(10),
    },
  };
  return sizeConfigs[size];
}

function getVariantStyles(variant: ButtonVariant, theme: Theme): JSX.CSSProperties {
  const variantConfigs = {
    primary: {
      'background-color': theme.palette.colors.primary,
      color: theme.palette.colors.white,
    },
    secondary: {
      'background-color': theme.palette.colors.secondary,
      color: theme.palette.colors.tertiary,
    },
    dominant: {
      'background-color': theme.palette.colors.dominant,
      color: theme.palette.colors.complementary,
    },
    naked: {
      'background-color': 'transparent',
      'box-shadow': 'none',
    },
  };
  return variantConfigs[variant];
}

export function getButtonStyles(config: ButtonConfiguration) {
  const { theme } = useTheme();
  const size = () => config.size ?? 'medium';
  const variant = () => config.variant ?? 'primary';
  const sizeStyles = () => getSizeStyles(size());
  const variantStyles = () => getVariantStyles(variant(), theme);

  const btnConfig = mergeProps(sizeStyles(), variantStyles(), {
    border: 'none',
    cursor: 'pointer',
  });

  return btnConfig;
}
