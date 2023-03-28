import { createResource, For } from 'solid-js';

import { orderApi } from '@banjo/api';
import { PriorityDot, Table, Typography } from '@banjo/atoms';
import { pxToRem, useTheme } from '@banjo/theme';

export function OrderTable() {
  const { theme } = useTheme();
  const tableHeadStyle = () => ({ 'background-color': theme.palette.colors.tableHeadBackground });
  const [orders] = createResource(orderApi.getOrders);

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
        <For each={orders()}>
          {(order) => (
            <Table.Row>
              <Table.Cell>
                <Typography>{order.teamMember}</Typography>
              </Table.Cell>
              <Table.Cell style={{ width: pxToRem(166) }}>
                <PriorityDot priority={order.priority} />
                <Typography>{order.priority}</Typography>
              </Table.Cell>
              <Table.Cell>
                <Typography>{order.orderNumber}</Typography>
              </Table.Cell>
              <Table.Cell>
                <Typography>{order.team}</Typography>
              </Table.Cell>
              <Table.Cell>
                <Typography>{order.dueDate.toLocaleDateString()}</Typography>
              </Table.Cell>
            </Table.Row>
          )}
        </For>
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
