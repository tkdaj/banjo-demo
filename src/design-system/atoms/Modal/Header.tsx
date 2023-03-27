import type { ParentProps } from 'solid-js';
import { children } from 'solid-js';
import { css } from 'solid-styled';

export function Header(props: ParentProps) {
  css`
    .modal-header {
      padding: 15px;
    }
  `;

  const content = children(() => props.children);

  return <div class="modal-header">{content()}</div>;
}
