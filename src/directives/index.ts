import type { ClickOutsideOnClick } from './clickOutside';

export * from './clickOutside';

declare module 'solid-js' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface Directives {
      clickOutside: Accessor<ClickOutsideOnClick>;
    }
  }
}
