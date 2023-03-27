import { capitalize } from '@banjo/utils';

import { useTheme } from './ThemeContext';

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  return (
    <label>
      Theme: {capitalize(theme.palette.name)}
      <input
        type="checkbox"
        checked={theme.palette.name === 'dark'}
        onChange={(e) => setTheme(e.currentTarget.checked ? 'dark' : 'light')}
      />
    </label>
  );
}
