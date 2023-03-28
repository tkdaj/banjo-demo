import { Table, Typography } from '@banjo/atoms';

export function OrderTable() {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Typography configName="tableHeadHeading">Team Member</Typography>
          <Typography configName="tableHeadHeading">Priority</Typography>
          <Typography configName="tableHeadHeading">Order Number</Typography>
          <Typography configName="tableHeadHeading">Team</Typography>
          <Typography configName="tableHeadHeading">Due Date</Typography>
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
  );
}
