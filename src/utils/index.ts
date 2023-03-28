import type { Accessor, JSX } from 'solid-js';
import { createMemo } from 'solid-js';

export function cssPropertiesToString(props: JSX.CSSProperties): Accessor<string> {
  const styles = createMemo(() => {
    const styleString = Object.entries(props).reduce(
      (acc, [key, value]) => `${acc}${key}: ${value as string};\n`,
      ''
    );
    return styleString;
  });

  return styles;
}
