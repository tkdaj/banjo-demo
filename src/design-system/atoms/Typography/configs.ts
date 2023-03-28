import { pxToRem, useTheme } from '@banjo/theme';

const { theme } = useTheme();

// NOTE: In a real design-system, we would not just stick all of the styles here and name
// them based on where they're used. Rather, there would be more generic names for the
// font variations.  (small, heading1, heading3, buttonStandard, buttonLarge, are maybe some examples)
// Those configurations would contain default stylings, but the Typography component would accept props
// to allow the ability to override any of those styles if necessary.

// example:  <Typography fontSize={28} lineHeight={16} />

export const typographyConfigs = {
  modalTitle: {
    tag: 'h2',
    styles: {
      'font-size': pxToRem(28),
      'line-height': pxToRem(38),
      'font-weight': 600,
      'text-align': 'center',
      'margin-top': 0,
      'margin-bottom': pxToRem(12),
      color: theme.palette.colors.textHeadingDark,
    },
  },
  modalSubTitle: {
    tag: 'h6',
    styles: {
      'font-size': pxToRem(14),
      'line-height': pxToRem(23),
      'font-weight': 400,
      'text-align': 'center',
      'margin-top': 0,
      'margin-bottom': pxToRem(46),
      color: theme.palette.colors.textBodyMuted,
    },
  },
  pageHeader: {
    tag: 'h6',
    styles: {
      'font-size': pxToRem(14),
      'line-height': pxToRem(24),
      'font-weight': 600,
      'margin-top': pxToRem(18),
      'margin-bottom': pxToRem(18),
      color: theme.palette.colors.pageHeader,
    },
  },
  formLabel: {
    tag: 'label',
    styles: {
      'font-size': pxToRem(14),
      'line-height': pxToRem(17),
      'font-weight': 500,
      color: theme.palette.colors.textBodyLight,
      cursor: 'pointer',
    },
  },
  formHelpText: {
    tag: 'span',
    styles: {
      'font-size': pxToRem(11),
      'line-height': pxToRem(12),
      'font-weight': 400,
      color: theme.palette.colors.textBodyMuted,
      'margin-bottom': pxToRem(36),
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
