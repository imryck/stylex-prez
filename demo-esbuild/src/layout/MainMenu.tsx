import * as React from 'react';
import * as stylex from '@stylexjs/stylex';
import { mainMenuLinks } from './link.model';
import { Link } from './Link';
import { StyleXStyles } from '@stylexjs/stylex';
import { PulseAnimation } from '../styles/animations.stylex';

const styles = stylex.create({
  list: {
    display: 'flex',
    listStyle: 'none'
  }
});

export const MainMenu = ({ activeLink, setActiveLink, customStyles }: {
  activeLink: string
  setActiveLink: (href: string) => void
  customStyles?: StyleXStyles<PulseAnimation & {
    flexDirection?: 'column' | 'row'
  }>
}) => {
  return (
    <ul {...stylex.props(styles.list, customStyles)}>
      {
        mainMenuLinks.map(link =>
          <Link key={link.title}
                link={link}
                ariaCurrent={activeLink === link.href}
                setActiveLink={setActiveLink} />
        )
      }
    </ul>
  )
}
