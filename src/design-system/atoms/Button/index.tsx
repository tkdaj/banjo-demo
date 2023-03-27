import type { ParentProps } from 'solid-js';
import { css } from 'solid-styled';

import type { ButtonConfiguration } from './button.styles';
import { getButtonStyles } from './button.styles';

interface ButtonProps extends ParentProps<ButtonConfiguration> {
  onClick: (e: MouseEvent) => void;
}

export function Button(props: ButtonProps) {
  const size = () => props.size;
  const variant = () => props.variant;
  const buttonStyles = () => getButtonStyles({ size: size(), variant: variant() });
  css`
    button {
      &:hover {
        opacity: 0.9;
      }
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      &:active {
        transform: translate(1px, 1px);
        position: relative;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
      }
    }
  `;
  return (
    <button style={buttonStyles()} type="button" onClick={(e) => props.onClick(e)}>
      {props.children}
    </button>
  );
}
