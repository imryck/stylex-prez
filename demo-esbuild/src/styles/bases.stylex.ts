import * as stylex from '@stylexjs/stylex';
import { colors, radius, textSizes } from './tokens.stylex';

export const styleBases = stylex.create({
  pageTitle: {
    color: colors.titleMain,
    fontSize: textSizes.xl
  },
  link: {
    color: colors.backgroundNavSecondary,
    textDecoration: 'none'
  },
  borderRadius: {
    borderColor: colors.borderMain,
    borderRadius: radius.medium,
    borderStyle: 'solid',
    borderWidth: 1
  }
});
