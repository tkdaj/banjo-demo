import type { ComponentProps } from 'solid-js';
import { splitProps, children } from 'solid-js';
import { css } from 'solid-styled';

import { clickOutside as co } from '@banjo/directives';
import { useTheme } from '@banjo/theme';

import type { ModalProps } from '.';

// workaround to keep TS from automatically removing the directives import since it is used
// on a JSX element in a way that TS doesn't understand by default
const clickOutside = co;

type OverlayProps = ModalProps & ComponentProps<'div'>;

export function Overlay(props: OverlayProps) {
  const { theme } = useTheme();
  css`
    .modal-overlay {
      background-color: ${theme.palette.colors.dominant};
    }
  `;

  const [childContainer, isOpenProps, rest] = splitProps(
    props,
    ['children'],
    ['isOpen', 'setIsOpen']
  );
  const content = children(() => childContainer.children);

  const onClickOutside = (e: MouseEvent) => {
    if (isOpenProps.isOpen()) {
      isOpenProps.setIsOpen(false);
      e.stopPropagation();
    }
  };

  return (
    <div
      // eslint-disable-next-line solid/reactivity
      use:clickOutside={onClickOutside}
      class="modal-overlay"
      {...rest}
    >
      {content()}
    </div>
  );
}
