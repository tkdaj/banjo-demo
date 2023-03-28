import type { DynamicProps } from 'solid-js/web';
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
  _props: TypographyProps<ConfigName>
) {
  // give default values to some params
  const merged = mergeProps(
    { configName: defaultConfigName, style: {} as JSX.CSSProperties },
    _props,
    {}
  );
  // get specific config/styles for this configName
  const elementConfig = () => typographyConfigs[merged.configName as ConfigName];

  // get any custom styles that the user passed in
  const [ownStyleProps, props] = splitProps(merged, ['style']);

  // remove the "tag" prop from from elementConfig() since it isn't a valid style
  // eslint-disable-next-line solid/reactivity
  const [tagProps, configStyles] = splitProps(elementConfig(), ['tag']) as unknown as [
    { tag: TagFromConfigName<ConfigName> },
    JSX.CSSProperties
  ];

  // create variable to hold custom styles and styles specific to the chosen config
  const mergedStyles = createMemo(() => {
    const finalStyles = mergeProps(configStyles, ownStyleProps.style) as JSX.CSSProperties;
    return finalStyles;
  });

  const allProps = createMemo(() => {
    const finalProps = mergeProps({ component: tagProps.tag }, mergedStyles());
    return finalProps as DynamicProps<TagFromConfigName<ConfigName>>;
  });

  return <Dynamic {...allProps()}>{props.children}</Dynamic>;
}
