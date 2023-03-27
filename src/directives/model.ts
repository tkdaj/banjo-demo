import type { Accessor, Signal } from 'solid-js';
import { createRenderEffect } from 'solid-js';

export function model(element: HTMLInputElement, value: Accessor<Signal<string>>) {
  const [field, setField] = value();
  createRenderEffect(() => (element.value = field()));
  // @ts-expect-error the Event type doesn't support e.target.value even though it is there
  element.addEventListener('input', (e: Event) => setField(e.target.value));
}
