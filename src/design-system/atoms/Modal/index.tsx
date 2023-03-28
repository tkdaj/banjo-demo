import type { Accessor, ParentProps } from 'solid-js';
import { createMemo, children } from 'solid-js';
import { css } from 'solid-styled';

import { clickOutside as co } from '@banjo/directives';
import { pxToRem, standardizeColorToRgb, useTheme } from '@banjo/theme';

import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';

// workaround to keep TS from automatically removing the directives import since it is used
// on a JSX element in a way that TS doesn't understand by default
const clickOutside = co;

export interface ModalProps {
  isOpen: Accessor<boolean>;
  setIsOpen: (isOpen: boolean) => void;
}

function Modal(props: ParentProps<ModalProps>) {
  const { theme } = useTheme();
  const { r, g, b } = standardizeColorToRgb(theme.palette.colors.complementary);
  css`
    .modal-content {
      position: relative;
      padding: ${pxToRem(40)};
      width: ${pxToRem(510)};
      margin: auto;
      top: 50%;
      transform: translateY(-50%);
      background-color: ${theme.palette.colors.gray100};
      border-radius: ${pxToRem(16)};
    }

    .modal-overlay {
      background-color: rgba(${r.toString()}, ${g.toString()}, ${b.toString()}, 0.6);
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      margin: auto;
    }
  `;

  const content = children(() => props.children);

  const modalStyle = createMemo(() => ({ display: props.isOpen() ? 'block' : 'none' }));

  const onClickOutside = (e: MouseEvent) => {
    if (props.isOpen()) {
      props.setIsOpen(false);
      e.stopPropagation();
    }
  };
  return (
    <div class="modal-overlay" style={modalStyle()}>
      {/* eslint-disable-next-line solid/reactivity */}
      <div use:clickOutside={onClickOutside} class="modal-content">
        {content()}
      </div>
    </div>
  );
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export { Modal };
