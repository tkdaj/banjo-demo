/* eslint-disable no-console */
import { createResource, For } from 'solid-js';

import { orderApi } from '@banjo/api';
import { Icons } from '@banjo/assets';
import { Button, PriorityDot, Table, Typography } from '@banjo/atoms';
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

          <Table.Cell headerCell style={tableHeadStyle()} />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <For each={orders()}>
          {(order, i) => {
            const onMoreClick = () => console.log(`clicked more in row ${i()}`);
            // NOTE: generally I would probably not just use hardcoded widths for each table, but since
            // I cannot discuss this with the design team, I'm going with these values for the sake of the coding challenge
            return (
              <Table.Row>
                <Table.Cell>
                  <Typography configName="tableBodyHeading">{order.teamMember}</Typography>
                </Table.Cell>
                <Table.Cell style={{ width: pxToRem(166) }}>
                  <PriorityDot priority={order.priority} />
                  <Typography>{order.priority}</Typography>
                </Table.Cell>
                <Table.Cell style={{ width: pxToRem(155) }}>
                  <Typography>{order.orderNumber}</Typography>
                </Table.Cell>
                <Table.Cell style={{ width: pxToRem(209) }}>
                  <Typography configName="tableBodySmall">{order.department}</Typography>
                </Table.Cell>
                <Table.Cell style={{ width: pxToRem(181) }}>
                  <Typography>{order.dueDate.toLocaleDateString()}</Typography>
                </Table.Cell>
                <Table.Cell style={{ width: pxToRem(67) }}>
                  <Button variant="naked" size="small" onClick={onMoreClick}>
                    <Icons.More />
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          }}
        </For>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={3}>
            <Typography>Showing 10 items out of {orders()?.length ?? 0} results</Typography>
          </Table.Cell>
          <Table.Cell colSpan={3} style={{ 'text-align': 'right', 'padding-right': pxToRem(20) }}>
            <Button
              style={{ 'margin-right': pxToRem(4) }}
              variant="dominant"
              onClick={() => console.log('clicked previous')}
            >
              <Icons.ChevronLeft />
            </Button>
            <For each={[1, 2, 3, 4, 5]}>
              {(page) => (
                <Button
                  style={{ 'margin-right': pxToRem(4) }}
                  variant="dominant"
                  onClick={() => console.log(`clicked page: ${page}`)}
                >
                  {page}
                </Button>
              )}
            </For>
            <Button variant="dominant" onClick={() => console.log('clicked next')}>
              <Icons.ChevronRight />
            </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}
