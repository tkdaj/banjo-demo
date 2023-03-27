import type { Accessor, ParentProps, Setter } from 'solid-js';
import { children } from 'solid-js';
import { css } from 'solid-styled';

import { clickOutside as co } from '@banjo/directives';

// workaround to keep TS from automatically removing the directives import since it is used
// on a JSX element in a way that TS doesn't understand by default

const clickOutside = co;

import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';
import { Overlay } from './Overlay';

export interface ModalProps extends ParentProps {
  isOpen: Accessor<boolean>;
  setIsOpen: Setter<boolean>;
}

function Modal(props: ModalProps) {
  css`
    .modal {
      padding: 1rem;
    }
  `;
  const content = children(() => props.children);
  const modalStyle = () => ({ display: props.isOpen() ? 'block' : 'none' });

  return (
    <div style={modalStyle()} class="modal">
      {content()}
    </div>
  );
}

Modal.Overlay = Overlay;
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export { Modal };
