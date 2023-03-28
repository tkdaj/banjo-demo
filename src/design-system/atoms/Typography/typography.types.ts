import type { JSX } from 'solid-js';

import type { typographyConfigs } from './configs';

export type TypographyConfigs = typeof typographyConfigs;
export type TypographyConfigName = keyof TypographyConfigs;

export type Conf<Tag extends string> = JSX.CSSProperties & { tag: Tag };
export type TagFromConfigName<ConfigName extends TypographyConfigName> =
  (typeof typographyConfigs)[ConfigName]['tag'];
