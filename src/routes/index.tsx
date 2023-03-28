import { createMemo, createSignal } from 'solid-js';

import { Button } from '@banjo/atoms';
import { pxToRem, ThemeToggleButton, useTheme } from '@banjo/theme';
import { NewOrderModal } from 'src/components/NewOrderModal';
import { OrderTable } from 'src/components/OrderTable';
export default function Home() {
  const { themeName, theme } = useTheme();
  const [open, setOpen] = createSignal(true);

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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    background-color: ${theme.palette.colors.strong}
  `
  );

  return (
    <div style={appContainerStyles()}>
      <div style={containerStyles()}>
        <ThemeToggleButton />
        <br />
        <Button
          variant={themeName() === 'dark' ? 'dominant' : 'primary'}
          onClick={() => setOpen((prev) => !prev)}
        >
          {`${open() ? 'Hide' : 'Show'} Modal`}
        </Button>
        <br />
        <OrderTable />
        <NewOrderModal isOpen={open} setIsOpen={setOpen} />
      </div>
    </div>
  );
}
