import type { Accessor } from 'solid-js';
import { onCleanup } from 'solid-js';

export type ClickOutsideOnClick = (...args: unknown[]) => void;

export function clickOutside(el: HTMLElement, accessor: Accessor<ClickOutsideOnClick>) {
  const onClick = (e: MouseEvent) => !el.contains(e.target as Node) && accessor()();
  document.body.addEventListener('click', onClick);

  onCleanup(() => document.body.removeEventListener('click', onClick));
}
