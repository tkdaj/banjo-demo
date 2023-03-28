import { createMemo } from 'solid-js';

import { pxToRem, useTheme } from '@banjo/theme';
import { PRIORITY, type Priority } from '@banjo/types';

interface PriorityDotProps {
  priority: Priority;
}
const { theme } = useTheme();
const priorityColors: Record<Priority, string> = {
  [PRIORITY.Low]: theme.palette.colors.danger,
  [PRIORITY.Medium]: theme.palette.colors.warning,
  [PRIORITY.High]: theme.palette.colors.success,
};

export function PriorityDot(props: PriorityDotProps) {
  const bgColor = createMemo(() => priorityColors[props.priority]);
  const styles = createMemo(
    () => `
      display: inline-block;
      margin-right: ${pxToRem(12)};
      border-radius: 50%;
      height: ${pxToRem(10)};
      width: ${pxToRem(10)};
      background-color: ${bgColor()};
    `
  );
  return <div style={styles()} />;
}
