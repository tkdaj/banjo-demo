import type { ModalProps } from '@banjo/atoms';
import { Modal, Typography } from '@banjo/atoms';

type MainModalProps = Omit<ModalProps, 'children'>;

export function NewOrderModal(props: MainModalProps) {
  return (
    <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
      <Modal.Header>
        <Typography>Header</Typography>
      </Modal.Header>
      <Modal.Body>Some body</Modal.Body>
      <Modal.Footer>
        <Typography>Footer</Typography>
      </Modal.Footer>
    </Modal>
  );
}
