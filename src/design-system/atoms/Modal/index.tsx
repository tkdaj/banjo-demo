import type { Accessor, ParentProps } from 'solid-js';
import { children } from 'solid-js';
import { css } from 'solid-styled';

import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';
import { Overlay } from './Overlay';

export interface ModalProps {
  isOpen: Accessor<boolean>;
  setIsOpen: (isOpen: boolean) => void;
}

function Modal(props: ParentProps<ModalProps>) {
  css`
    .modal {
      padding: 1rem;
    }
  `;
  const content = children(() => props.children);

  const modalStyle = () => ({ display: props.isOpen() ? 'block' : 'none' });

  return (
    // <Overlay isOpen={props.isOpen} setIsOpen={props.setIsOpen} style={modalStyle()} class="modal">
    <div class="modal" style={modalStyle()}>
      <Overlay {...props}>{content()}</Overlay>
    </div>
  );
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export { Modal };
