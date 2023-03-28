import type { ComponentProps, ParentProps } from 'solid-js';
import { splitProps, mergeProps, children } from 'solid-js';

type CellProps = ParentProps<ComponentProps<'th'> | ComponentProps<'td'>> & {
  headerCell?: boolean;
};

export function Cell(props: CellProps) {
  const merged = mergeProps({ headerCell: false }, props);
  const [nonNative, native] = splitProps(merged, ['children', 'headerCell']);
  const content = children(() => nonNative.children);
  return (
    <>
      {nonNative.headerCell ? <th {...native}>{content()}</th> : <td {...native}>{content()}</td>}
    </>
  );
}
