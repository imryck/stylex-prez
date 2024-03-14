import * as React from 'react';
import * as stylex from '@stylexjs/stylex';
import { LinkModel } from './link.model';
import { styleBases } from '../styles/bases.stylex';
import { colors, radius, spacing, textSizes } from '../styles/tokens.stylex';

interface LinkProps {
  link: LinkModel;
  ariaCurrent: boolean;
  setActiveLink: (href: string) => void;
}

const styles = stylex.create({
  listItem: {
    backgroundColor: {
      default: colors.backgroundNavMain,
      ':hover': colors.backgroundNavActive,
      ':has([aria-current=page])': colors.backgroundNavSecondary
    },
    display: 'flex',
    flex: '1',
    borderRadius: {
      default: radius.soft,
      ':hover': {
        default: null,
        ':has([aria-current=page])': radius.medium
      }
    },
    marginRight: {
      default: 0,
      ':not(:last-child)': spacing.xs
    }
  },
  listItemLink: {
    color: {
      default: colors.linkNavMain,
      ':hover': colors.linkNavHover
    },
    fontSize: textSizes.m,
    flex: '1',
    paddingInline: spacing.l,
    paddingVertical: spacing.xs
  }
})

export const Link = (props: LinkProps) => {
  return (
    <li key={props.link.title} {...stylex.props(styles.listItem)}>
      <a {...stylex.props(styleBases.link, styles.listItemLink)}
         aria-current={props.ariaCurrent ? 'page' : undefined}
         href={props.link.href}
         onClick={() => {
          props.setActiveLink(props.link.href)
         }}>{props.link.title}</a>
    </li>
  )
}
