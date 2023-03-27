import type { ModalProps } from '@banjo/atoms';
import { Table, Modal, Typography } from '@banjo/atoms';

type MainModalProps = Omit<ModalProps, 'children'>;

export function MainModal(props: MainModalProps) {
  return (
    <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
      <Modal.Header>
        <Typography>Header</Typography>
      </Modal.Header>
      <Modal.Body>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Cell headerCell>
                <Typography>Head 1</Typography>
              </Table.Cell>
              <Table.Cell headerCell>
                <Typography>Head 2</Typography>
              </Table.Cell>
              <Table.Cell headerCell>
                <Typography>Head 3</Typography>
              </Table.Cell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Typography>Cell 1</Typography>
              </Table.Cell>
              <Table.Cell>
                <Typography>Cell 2</Typography>
              </Table.Cell>
              <Table.Cell>
                <Typography>Cell 3</Typography>
              </Table.Cell>
            </Table.Row>
            <Table.Cell>
              <Typography>Cell 1</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography>Cell 2</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography>Cell 3</Typography>
            </Table.Cell>
          </Table.Body>
          <Table.Footer>
            <Table.Cell>
              <Typography>Foot 1</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography>Foot 2</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography>Foot 3</Typography>
            </Table.Cell>
          </Table.Footer>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Typography>Footer</Typography>
      </Modal.Footer>
    </Modal>
  );
}
