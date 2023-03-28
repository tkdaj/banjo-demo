import type { typographyConfigs } from './configs';

export type TypographyConfigs = typeof typographyConfigs;
export type TypographyConfigName = keyof TypographyConfigs;

export type TagFromConfigName<ConfigName extends TypographyConfigName> =
  (typeof typographyConfigs)[ConfigName]['tag'];
