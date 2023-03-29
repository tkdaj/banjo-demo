import type { Accessor } from 'solid-js';
import { css } from 'solid-styled';

import { pxToRem, useTheme } from '@banjo/theme';

interface InputProps {
  value: Accessor<string>;
  setValue: (newValue: string) => void;
  type: 'text' | 'date';
}

export function Input(props: InputProps) {
  const { theme } = useTheme();
  css`
    .input-box {
      box-sizing: border-box;
      box-shadow: ${pxToRem(0)} ${pxToRem(1)} ${pxToRem(2)} rgba(50, 50, 71, 0.08),
        ${pxToRem(0)} ${pxToRem(0)} ${pxToRem(1)} rgba(50, 50, 71, 0.2);
      border: none;
      padding: ${pxToRem(12)} ${pxToRem(17)};
      border-radius: ${pxToRem(6)};
      position: relative;
      width: 100%;
      background-color: ${theme.palette.colors.strong};
      text-align: left;
      margin-bottom: ${pxToRem(30)};
    }
  `;

  return (
    <input
      class="input-box"
      required
      value={props.value()}
      type={props.type}
      onChange={(e) => props.setValue(e.currentTarget.value)}
    />
  );
}
