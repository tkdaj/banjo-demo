import { pxToRem, useTheme } from '@banjo/theme';

import type { Conf } from './typography.types';

const { theme } = useTheme();

export const typographyConfigs = {
  modalTitle: {
    tag: 'h2',
    'font-size': pxToRem(28),
    'line-height': pxToRem(38),
    'font-weight': 600,
    'text-align': 'center',
    color: theme.palette.colors.textHeadingDark,
  } as Conf<'h2'>,
  modalSubTitle: {
    tag: 'h4',
    'font-size': pxToRem(14),
    'line-height': pxToRem(23),
    'font-weight': 400,
    color: theme.palette.colors.textBodyMuted,
  } as Conf<'h4'>,
  formLabel: {
    tag: 'label',
    'font-size': pxToRem(14),
    'line-height': pxToRem(17),
    'font-weight': 500,
    color: theme.palette.colors.textBodyLight,
  } as Conf<'label'>,
  tableBodyText: {
    tag: 'span',
    'font-size': pxToRem(14),
    'line-height': pxToRem(20),
    'font-weight': 400,
    color: theme.palette.colors.textBodyLight,
  } as Conf<'span'>,
  tableBodyHeading: {
    tag: 'span',
    'font-size': pxToRem(12),
    'line-height': pxToRem(20),
    'font-weight': 600,
    color: theme.palette.colors.textHeadingDark,
  } as Conf<'span'>,
  tableHeadHeading: {
    tag: 'th',
    'font-size': pxToRem(10),
    'line-height': pxToRem(16),
    'font-weight': 600,
    'text-transform': 'uppercase',
    color: theme.palette.colors.tableHeadText,
  } as Conf<'th'>,
} as const;
