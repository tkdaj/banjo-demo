import type { ParentProps } from 'solid-js';
import { children } from 'solid-js';
import { css } from 'solid-styled';

export function Body(props: ParentProps) {
  css`
    .modal-body {
      padding: 15px;
    }
  `;

  const content = children(() => props.children);

  return <div class="modal-body">{content()}</div>;
}
