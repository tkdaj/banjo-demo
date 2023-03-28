import { createMemo } from 'solid-js';

import type { ModalProps } from '@banjo/atoms';
import { Button, Modal, Typography } from '@banjo/atoms';

type MainModalProps = Omit<ModalProps, 'children'>;

export function NewOrderModal(props: MainModalProps) {
  const bodyStyles = createMemo(
    () => `
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  );
  const footerStyles = createMemo(
    () => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `
  );
  return (
    <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
      <Modal.Header>
        <Typography configName="modalTitle">Create a New Order</Typography>
        <Typography configName="modalSubTitle">
          Fill out the required information to create a new order.
        </Typography>
      </Modal.Header>
      <Modal.Body>
        <div style={bodyStyles()}>
          <Typography configName="formHelpText">One fine body</Typography>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div style={footerStyles()}>
          <Button variant="secondary" onClick={() => console.log('clicked cancel')}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => console.log('clicked save')}>
            Submit
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
