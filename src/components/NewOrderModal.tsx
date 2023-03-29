/* eslint-disable no-console */
import { createMemo, createSignal } from 'solid-js';

import { orderApi } from '@banjo/api';
import type { ModalProps, SelectOption } from '@banjo/atoms';
import { Input, Select, Button, Modal, Typography } from '@banjo/atoms';
import type { Priority } from '@banjo/types';
import { PRIORITY } from '@banjo/types';
import { departments, makeStuffLookRealTimeyish } from 'src/api/orders/mocks';

type MainModalProps = Omit<ModalProps, 'children'>;

const prioritySelectOptions = Object.keys(PRIORITY).map<SelectOption>((priority) => {
  const priorityValue = PRIORITY[priority as Priority];
  return {
    id: priority,
    label: {
      ariaLabel: priorityValue,
      uiElementSelected: priorityValue,
      uiListElement: priorityValue,
    },
    value: priorityValue,
  };
});

const departmentsSelectOptions = departments.map<SelectOption>((dept) => {
  return {
    id: dept,
    label: {
      ariaLabel: dept,
      uiElementSelected: dept,
      uiListElement: dept,
    },
    value: dept,
  };
});

export function NewOrderModal(props: MainModalProps) {
  const [teamMember, setTeamMember] = createSignal('');
  const [dueDate, setDueDate] = createSignal('');
  const [selectedPriority, setSelectedPriority] = createSignal<SelectOption>(
    prioritySelectOptions[0]
  );
  const [selectedDepartment, seSelectedDepartment] = createSignal<SelectOption>(
    departmentsSelectOptions[0]
  );
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
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={async (e) => {
            e.preventDefault();
            await orderApi.addOrder({
              teamMember: teamMember(),
              priority: selectedPriority().value as Priority,
              department: selectedDepartment().value.toString(),
              dueDate: new Date(dueDate()),
            });
            closeModal();
            makeStuffLookRealTimeyish();
          }}
          style={bodyStyles()}
        >
          <Typography configName="formLabel">Team Member Name *</Typography>
          <Input type="text" value={teamMember} setValue={setTeamMember} />
          <Typography configName="formLabel">Priority *</Typography>
          <Select
            id="member-name-select"
            labelId="member-name-select-label"
            listItems={prioritySelectOptions}
            selectedItem={selectedPriority}
            onChange={setSelectedPriority}
          />
          <Typography configName="formLabel">Team *</Typography>
          <Select
            id="member-name-select"
            labelId="member-name-select-label"
            listItems={departmentsSelectOptions}
            selectedItem={selectedDepartment}
            onChange={seSelectedDepartment}
          />
          <Typography configName="formLabel">Due Date *</Typography>
          <Input type="date" value={dueDate} setValue={setDueDate} />
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
