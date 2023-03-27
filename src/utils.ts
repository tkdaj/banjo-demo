// eslint-disable-next-line @typescript-eslint/no-empty-function
export function noop() {}

export function capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}
