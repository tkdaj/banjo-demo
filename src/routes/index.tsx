import { createSignal } from 'solid-js';

import { Button } from '@banjo/atoms';
import { ThemeToggleButton, useTheme } from '@banjo/theme';
import { NewOrderModal } from 'src/components/NewOrderModal';
import { OrderTable } from 'src/components/OrderTable';
export default function Home() {
  const { themeName } = useTheme();
  const [open, setOpen] = createSignal(true);

  return (
    <>
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
    </>
  );
}
