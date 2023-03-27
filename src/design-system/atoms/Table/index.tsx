import type { ParentProps } from 'solid-js';
import { children } from 'solid-js';

import { Body } from './Body';
import { Cell } from './Cell';
import { Footer } from './Footer';
import { Header } from './Header';
import { Row } from './Row';

export function Table(props: ParentProps) {
  const content = children(() => props.children);
  return <table>{content()}</table>;
}

Table.Row = Row;
Table.Cell = Cell;
Table.Header = Header;
Table.Body = Body;
Table.Footer = Footer;
