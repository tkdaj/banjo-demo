import type { ComponentProps, ParentProps } from 'solid-js';
import { mergeProps, createMemo, splitProps } from 'solid-js';
import { css } from 'solid-styled';

import type { ButtonConfiguration } from './button.styles';
import { getButtonStyles } from './button.styles';

type ButtonProps = ParentProps<ButtonConfiguration & ComponentProps<'button'>>;

export function Button(props: ButtonProps) {
  const [nonNative, native] = splitProps(props, ['size', 'variant', 'style']);
  const buttonStyles = createMemo(() => {
    const mergedStyles = mergeProps(
      getButtonStyles({ size: nonNative.size, variant: nonNative.variant }),
      nonNative.style
    );
    return mergedStyles;
  });
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
    <button style={buttonStyles()} type="button" {...native}>
      {props.children}
    </button>
  );
}
