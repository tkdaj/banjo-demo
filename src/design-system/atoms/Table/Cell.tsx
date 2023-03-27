import type { ParentProps } from 'solid-js';
import { mergeProps, children } from 'solid-js';

interface CellProps extends ParentProps {
  headerCell?: boolean;
}

export function Cell(props: CellProps) {
  const merged = mergeProps({ headerCell: false }, props);
  const content = children(() => props.children);
  return <>{merged.headerCell ? <th>{content()}</th> : <td>{content()}</td>}</>;
}
