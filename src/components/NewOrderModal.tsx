/* eslint-disable no-console */
import { createMemo, For } from 'solid-js';

import type { ModalProps } from '@banjo/atoms';
import { Button, Modal, Typography } from '@banjo/atoms';
import { pxToRem } from '@banjo/theme';
import type { Priority } from '@banjo/types';
import { PRIORITY } from '@banjo/types';
import { departments } from 'src/api/orders/mockOrders';

type MainModalProps = Omit<ModalProps, 'children'>;

export function NewOrderModal(props: MainModalProps) {
  const bodyStyles = createMemo(
    () => `
    display: flex;
    flex-direction: column;
    align-items: left;
  `
  );
  const footerStyles = createMemo(
    () => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `
  );

  const closeModal = () => props.setIsOpen(false);

  return (
    <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
      <Modal.Header>
        <Typography configName="modalTitle">Create a New Order</Typography>
        <Typography configName="modalSubTitle">
          Fill out the required information to create a new order.
        </Typography>
      </Modal.Header>
      <Modal.Body>
        <form
          id="new-order-form"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            console.log('submitting form');
          }}
          style={bodyStyles()}
        >
          <Typography configName="formLabel">Team Member Name</Typography>
          <input style={{ 'margin-bottom': pxToRem(30) }} type="text" />
          <Typography configName="formLabel">Priority</Typography>
          <select style={{ 'margin-bottom': pxToRem(30) }}>
            <For each={Object.keys(PRIORITY)}>
              {(priority) => <option value={priority}>{PRIORITY[priority as Priority]}</option>}
            </For>
          </select>
          <Typography configName="formLabel">Team</Typography>
          <select style={{ 'margin-bottom': pxToRem(30) }}>
            <For each={departments}>{(dept) => <option value={dept}>{dept}</option>}</For>
          </select>
          <Typography configName="formLabel">Due Date</Typography>
          <input style={{ 'margin-bottom': pxToRem(8) }} type="date" />
          <Typography configName="formHelpText">Date format must be mm/dd/yyyyy</Typography>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div style={footerStyles()}>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button form="new-order-form" type="submit" variant="primary">
            Submit
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
