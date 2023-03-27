import type { ParentProps } from 'solid-js';
import { children } from 'solid-js';
import { css } from 'solid-styled';

import { useTheme } from '@banjo/theme';

export function Overlay(props: ParentProps) {
  const { theme } = useTheme();
  css`
    .modal-overlay {
      background-color: ${theme.palette.colors.dominant};
    }
  `;

  const content = children(() => props.children);

  return <div class="modal-overlay">{content()}</div>;
}
