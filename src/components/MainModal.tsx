import type { ModalProps } from '@banjo/atoms';
import { Table, Modal, Typography } from '@banjo/atoms';

type MainModalProps = Omit<ModalProps, 'children'>;

export function MainModal(props: MainModalProps) {
  return (
    <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
      <Modal.Overlay>
        <Modal.Header>
          <Typography>Header</Typography>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Cell headerCell>
                  <Typography>title 1</Typography>
                </Table.Cell>
                <Table.Cell headerCell>
                  <Typography>title 2</Typography>
                </Table.Cell>
                <Table.Cell headerCell>
                  <Typography>title 3</Typography>
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
              <Typography>Some Footer Stuff</Typography>
            </Table.Footer>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Typography>Footer</Typography>
        </Modal.Footer>
      </Modal.Overlay>
    </Modal>
  );
}
