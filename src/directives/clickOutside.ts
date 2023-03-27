import type { Accessor } from 'solid-js';
import { onCleanup } from 'solid-js';

export type ClickOutsideOnClick = (e: MouseEvent) => void;

export function clickOutside(el: HTMLElement, accessor: Accessor<ClickOutsideOnClick>) {
  const onClick = (e: MouseEvent) => {
    const func = accessor();
    if (!el.contains(e.target as Node)) {
      func(e);
    }
  };
  document.body.addEventListener('click', onClick);

  onCleanup(() => document.body.removeEventListener('click', onClick));
}
