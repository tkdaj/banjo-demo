import type { ParentProps } from 'solid-js';
import { children } from 'solid-js';

export function Footer(props: ParentProps) {
  const content = children(() => props.children);
  return <div class="modal-footer">{content()}</div>;
}
