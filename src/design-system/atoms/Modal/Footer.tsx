import type { ParentProps } from 'solid-js';
import { children } from 'solid-js';
import { css } from 'solid-styled';

export function Footer(props: ParentProps) {
  css`
    .modal-footer {
      padding: 15px;
    }
  `;

  const content = children(() => props.children);

  return <div class="modal-footer">{content()}</div>;
}
