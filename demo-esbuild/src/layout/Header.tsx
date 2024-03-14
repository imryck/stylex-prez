import * as React from 'react';
import { useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { colors, displayScreen, spacing } from '../styles/tokens.stylex';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { mainMenuLinks } from './link.model';
import { MainMenu } from './MainMenu';
import { animations } from '../styles/animations.stylex';

const styles = stylex.create({
  navContainer: {
    backgroundColor: colors.backgroundNavMain,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs
  },
  mainNavBar: {
    alignItems: 'center',
    display: 'flex',
    flex: '1'
  },
  leftNavBar: {
    display: 'flex',
    flex: '1'
  },
  menuDesktop: {
    display: displayScreen.desktop
  },
  hidden: {
    display: 'none'
  },
  menuMobile: {
    display: displayScreen.mobile,
    marginTop: spacing.sm
  },
  logo: {
    marginRight: spacing.xl,
    width: 54
  },
  menuBtn: {
    color: colors.linkNavMain,
    display: displayScreen.mobile
  },
  menuMobileList: {
    flexDirection: 'column'
  }
});

export const Header = () => {
  const [activeLink, setActiveLink] = useState(mainMenuLinks[0].href);
  const [mobileOpened, setMobileOpened] = useState(false);
  return (
    <header>
      <nav {...stylex.props(styles.navContainer)}>
        <div {...stylex.props(styles.mainNavBar)}>
          <div {...stylex.props(styles.leftNavBar)}>
            <img {...stylex.props(styles.logo)} src="../images/stylex-logo-small.svg" alt="StyleX" />
            <div {...stylex.props(styles.menuDesktop)}>
              <MainMenu activeLink={activeLink} setActiveLink={setActiveLink}></MainMenu>
            </div>
          </div>
          <button {...stylex.props(styles.menuBtn)}
            aria-label="Ouvrir le menu mobile"
            onClick={() => {
              setMobileOpened(!mobileOpened)
            }}>
            {mobileOpened ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
        </div>
        <div {...stylex.props(styles.menuMobile, !mobileOpened && styles.hidden)}>
          <MainMenu activeLink={activeLink} setActiveLink={setActiveLink}
            customStyles={{ ...styles.menuMobileList, ...animations.pulse }}
          ></MainMenu>
        </div>
      </nav>
    </header>
  )
}
