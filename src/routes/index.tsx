import { createSignal } from 'solid-js';

import { Button } from '@banjo/atoms';
import { ThemeToggleButton, useTheme } from '@banjo/theme';
import { MainModal } from 'src/components/MainModal';
export default function Home() {
  const { themeName } = useTheme();
  const [open, setOpen] = createSignal(true);

  return (
    <>
      <ThemeToggleButton />
      <br />
      <Button
        variant={themeName() === 'dark' ? 'dominant' : 'primary'}
        onClick={() => setOpen((prevVal) => !prevVal)}
      >
        {`${open() ? 'Hide' : 'Show'} Modal`}
      </Button>
      <MainModal isOpen={open} setIsOpen={setOpen} />
    </>
  );
}
