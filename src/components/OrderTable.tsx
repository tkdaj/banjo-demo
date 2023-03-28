import { createResource } from 'solid-js';

import { orderApi } from '@banjo/api';
import { Table, Typography } from '@banjo/atoms';
import { useTheme } from '@banjo/theme';

export function OrderTable() {
  const { theme } = useTheme();
  const tableHeadStyle = () => ({ 'background-color': theme.palette.colors.tableHeadBackground });
  const [orders] = createResource(null, orderApi.getOrders);
  console.log('ORDERS', orders());

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.Cell headerCell style={tableHeadStyle()}>
            <Typography configName="tableHeadHeading">Team Member</Typography>
          </Table.Cell>
          <Table.Cell headerCell style={tableHeadStyle()}>
            <Typography configName="tableHeadHeading">Priority</Typography>
          </Table.Cell>
          <Table.Cell headerCell style={tableHeadStyle()}>
            <Typography configName="tableHeadHeading">Order Number</Typography>
          </Table.Cell>
          <Table.Cell headerCell style={tableHeadStyle()}>
            <Typography configName="tableHeadHeading">Team</Typography>
          </Table.Cell>
          <Table.Cell headerCell style={tableHeadStyle()}>
            <Typography configName="tableHeadHeading">Due Date</Typography>
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
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell>
            <Typography>Foot 1</Typography>
          </Table.Cell>
          <Table.Cell>
            <Typography>Foot 2</Typography>
          </Table.Cell>
          <Table.Cell>
            <Typography>Foot 3</Typography>
          </Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}
