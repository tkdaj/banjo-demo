import type { ParentProps } from 'solid-js';
import { children } from 'solid-js';
import { css } from 'solid-styled';

import { useTheme } from '@banjo/theme';

export function Row(props: ParentProps) {
  const { theme } = useTheme();
  css`
    tr {
      border-bottom: 1px solid ${theme.palette.colors.tableBorder};
      width: 100%;
    }
  `;
  const content = children(() => props.children);
  return <tr>{content()}</tr>;
}
