import type { ParentProps } from 'solid-js';
import { children } from 'solid-js';

export function Row(props: ParentProps) {
  const content = children(() => props.children);
  return <tr>{content()}</tr>;
}
