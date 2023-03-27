import type { ParentProps } from 'solid-js';
import { children } from 'solid-js';

export function Body(props: ParentProps) {
  const content = children(() => props.children);
  return <tbody>{content()}</tbody>;
}
