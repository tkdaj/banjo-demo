import { createMemo, createSignal } from 'solid-js';

import { Button, Typography } from '@banjo/atoms';
import { pxToRem, ThemeToggleButton, useTheme } from '@banjo/theme';
import { NewOrderModal } from 'src/components/NewOrderModal';
import { OrderTable } from 'src/components/OrderTable';
export default function Home() {
  const { themeName, theme } = useTheme();
  const [open, setOpen] = createSignal(false);

  const appContainerStyles = createMemo(
    () => `
    padding: ${pxToRem(24)};
    background-color: ${theme.palette.colors.secondary}
  `
  );

  const containerStyles = createMemo(
    () => `
    border-radius: ${pxToRem(16)};
    padding: ${pxToRem(16)};
    padding-top: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    background-color: ${theme.palette.colors.strong}
  `
  );

  const headerStyles = createMemo(
    () => `
    display: flex;
    flex-direction: row;
    align-items: center;
  `
  );

  return (
    <>
      <div style={appContainerStyles()}>
        <div style={containerStyles()}>
          <div style={headerStyles()}>
            <Typography
              style={{ 'margin-left': pxToRem(24), 'margin-right': 'auto' }}
              configName="pageHeader"
            >
              Orders
            </Typography>
            <ThemeToggleButton />
            <br />
            <Button
              variant={themeName() === 'dark' ? 'dominant' : 'primary'}
              onClick={() => setOpen((prev) => !prev)}
            >
              {`${open() ? 'Hide' : 'Show'} Modal`}
            </Button>
          </div>
          <OrderTable />
        </div>
      </div>
      <NewOrderModal isOpen={open} setIsOpen={setOpen} />
    </>
  );
}
