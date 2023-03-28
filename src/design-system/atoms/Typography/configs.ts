import { pxToRem, useTheme } from '@banjo/theme';

const { theme } = useTheme();

export const typographyConfigs = {
  modalTitle: {
    tag: 'h2',
    styles: {
      'font-size': pxToRem(28),
      'line-height': pxToRem(38),
      'font-weight': 600,
      'text-align': 'center',
      color: theme.palette.colors.textHeadingDark,
    },
  },
  modalSubTitle: {
    tag: 'h4',
    styles: {
      'font-size': pxToRem(14),
      'line-height': pxToRem(23),
      'font-weight': 400,
      color: theme.palette.colors.textBodyMuted,
    },
  },
  formLabel: {
    tag: 'label',
    styles: {
      'font-size': pxToRem(14),
      'line-height': pxToRem(17),
      'font-weight': 500,
      color: theme.palette.colors.textBodyLight,
    },
  },
  tableBodyText: {
    tag: 'span',
    styles: {
      'font-size': pxToRem(14),
      'line-height': pxToRem(20),
      'font-weight': 400,
      color: theme.palette.colors.textBodyLight,
    },
  },
  tableBodySmall: {
    tag: 'span',
    styles: {
      'font-size': pxToRem(12),
      'line-height': pxToRem(16),
      'font-weight': 600,
      color: theme.palette.colors.textBodyLight,
    },
  },
  tableBodyHeading: {
    tag: 'span',
    styles: {
      'font-size': pxToRem(12),
      'line-height': pxToRem(20),
      'font-weight': 600,
      color: theme.palette.colors.textHeadingDark,
    },
  },
  tableHeadHeading: {
    tag: 'span',
    styles: {
      'font-size': pxToRem(10),
      'line-height': pxToRem(16),
      'font-weight': 600,
      'text-transform': 'uppercase',
      color: theme.palette.colors.tableHeadText,
    },
  },
} as const;
