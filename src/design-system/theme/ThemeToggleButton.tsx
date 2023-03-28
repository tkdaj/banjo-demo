import { Typography } from '@banjo/atoms';
import { capitalize } from '@banjo/utils';

import { useTheme } from './ThemeContext';
import { pxToRem } from './utils';

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  return (
    <Typography
      configName="formLabel"
      style={{ 'margin-right': pxToRem(8) }}
      onClick={(e) => {
        e.stopPropagation();
      }}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
    >
      {capitalize(theme.palette.name)}
      <input
        type="checkbox"
        checked={theme.palette.name === 'dark'}
        onChange={(e) => setTheme(e.currentTarget.checked ? 'dark' : 'light')}
      />
    </Typography>
  );
}
