import type { ParentProps } from 'solid-js';
import { children } from 'solid-js';

export function Header(props: ParentProps) {
  const content = children(() => props.children);
  return <div class="modal-header">{content()}</div>;
}
