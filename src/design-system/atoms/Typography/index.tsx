import { Dynamic } from 'solid-js/web';

import type { ComponentProps, JSX, ParentProps } from 'solid-js';
import { createMemo, splitProps, mergeProps } from 'solid-js';

import { typographyConfigs } from './configs';
import type { TagFromConfigName, TypographyConfigName } from './typography.types';

const defaultConfigName: TypographyConfigName = 'tableBodyText';

export type TypographyProps<ConfigName extends TypographyConfigName> = ParentProps<
  ComponentProps<TagFromConfigName<ConfigName>>
> & {
  configName?: ConfigName;
};

export function Typography<ConfigName extends TypographyConfigName = typeof defaultConfigName>(
  props: TypographyProps<ConfigName>
) {
  // give default values to some params
  const merged = mergeProps(
    { configName: defaultConfigName, style: {} as JSX.CSSProperties },
    props
  );

  // get specific config/styles for this configName
  const elementConfig = createMemo(() => typographyConfigs[merged.configName as ConfigName]);

  // get any custom styles that the user passed in
  const [ownStyleProps, rest] = splitProps(merged, ['style']);

  // create variable to hold custom styles and styles specific to the chosen config
  const mergedStyles = createMemo(() => {
    const finalStyles = mergeProps(
      elementConfig().styles,
      ownStyleProps.style
    ) as JSX.CSSProperties;
    return finalStyles;
  });

  return (
    <Dynamic component={elementConfig().tag} style={mergedStyles()}>
      {rest.children}
    </Dynamic>
  );
}
