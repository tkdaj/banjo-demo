import { Dynamic } from 'solid-js/web';

import type { Accessor, ParentProps } from 'solid-js';
import { mergeProps } from 'solid-js';

import type { ColorName } from '@banjo/theme';
import { useTheme } from '@banjo/theme';

const tags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  span: 'span',
  div: 'div',
  label: 'label',
  strong: 'strong',
  small: 'small',
  blockquote: 'blockquote',
  cite: 'cite',
  time: 'time',
  code: 'code',
  pre: 'pre',
  em: 'em',
} as const;

type Tag = keyof typeof tags;

const defaultTag: Tag = tags.span;
const defaultColor: ColorName = 'textHeadingDark';

interface TypographyProps extends ParentProps {
  as?: Tag;
  color?: ColorName;
}

export function Typography(props: TypographyProps) {
  const { theme } = useTheme();
  const merged = mergeProps({ as: defaultTag, color: defaultColor }, props);

  const fontColor: Accessor<ColorName> = () => merged.color;

  return (
    <Dynamic component={merged.as} style={{ color: theme.palette.colors[fontColor()] }}>
      {props.children}
    </Dynamic>
  );
}
