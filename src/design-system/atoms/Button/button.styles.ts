import { mergeProps } from 'solid-js';

import type { Theme } from '@banjo/theme';
import { useTheme, pxToRem } from '@banjo/theme';

export type ButtonSize = 'small' | 'medium';
export type ButtonVariant = 'primary' | 'secondary' | 'dominant';

export interface ButtonConfiguration {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

interface ButtonSizeConfig {
  padding: string;
  'font-size': string;
  'border-radius': string;
  'line-height': string;
}

function getSizeStyles(size: ButtonSize): ButtonSizeConfig {
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

interface ButtonVariantConfig {
  'background-color': string;
  color: string;
}

function getVariantStyles(variant: ButtonVariant, theme: Theme): ButtonVariantConfig {
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
