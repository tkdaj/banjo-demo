import { Dynamic } from 'solid-js/web';

import type { ComponentProps, JSX, ParentProps } from 'solid-js';
import { splitProps, mergeProps, children, createMemo } from 'solid-js';

import { pxToRem } from '@banjo/theme';

type CellProps = ParentProps<ComponentProps<'th'> | ComponentProps<'td'>> & {
  headerCell?: boolean;
};
const cellDefaultStyles = {
  'text-align': 'center',
  padding: `${pxToRem(18)} ${pxToRem(24)}`,
};

export function Cell(props: CellProps) {
  const merged = mergeProps({ headerCell: false, style: {} as JSX.CSSProperties }, props);
  const [nonNative, stylesProps, rest] = splitProps(merged, ['children', 'headerCell'], ['style']);
  const finalStyle = createMemo(() => {
    const final = mergeProps(cellDefaultStyles, stylesProps.style) as JSX.CSSProperties;
    return final;
  });
  const content = children(() => nonNative.children);
  return (
    <Dynamic component={nonNative.headerCell ? 'th' : 'td'} style={finalStyle()} {...rest}>
      {content()}
    </Dynamic>
  );
}
