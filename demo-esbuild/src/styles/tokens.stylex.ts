import * as stylex from '@stylexjs/stylex';

type BREAKPOINTS = 640 | 768 | 1024 | 1280

type SCREEN_TYPE = 'SCREEN_SM' | 'SCREEN_MD' | 'SCREEN_LG' | 'SCREEN_XL'

type SCREEN_DEF = `@media (min-width: ${BREAKPOINTS}px)`

const screens: Record<SCREEN_TYPE, SCREEN_DEF> = {
  SCREEN_SM: '@media (min-width: 640px)',
  SCREEN_MD: '@media (min-width: 768px)',
  SCREEN_LG: '@media (min-width: 1024px)',
  SCREEN_XL: '@media (min-width: 1280px)'
}

type COLORS_VARIANT = 'GRAY_900' |
'GRAY_800' |
'GRAY_700' |
'GRAY_600' |
'GRAY_200' |
'GRAY_100' |
'WHITE'

type RGB_COLOR = `rgb(${number} ${number} ${number})`

const pallette: Record<COLORS_VARIANT, RGB_COLOR> = {
  GRAY_900: 'rgb(17 24 39)',
  GRAY_800: 'rgb(31 41 55)',
  GRAY_700: 'rgb(55 65 81)',
  GRAY_600: 'rgb(75 85 101)',
  GRAY_200: 'rgb(229 231 235)',
  GRAY_100: 'rgb(248 252 250)',
  WHITE: 'rgb(255 255 255)'
}

type PALLETTE_COLOR = typeof pallette[COLORS_VARIANT]

export const colors = stylex.defineVars<Record<string, PALLETTE_COLOR>>({
  backgroundNavMain: pallette.GRAY_900,
  backgroundNavSecondary: pallette.GRAY_800,
  backgroundNavActive: pallette.GRAY_700,
  linkNavMain: pallette.WHITE,
  linkNavHover: pallette.GRAY_200,
  titleMain: pallette.GRAY_700,
  titleSecondary: pallette.GRAY_700,
  textMain: pallette.GRAY_900,
  textSecondary: pallette.GRAY_600,
  backgroundMain: pallette.WHITE,
  backgroundSecondary: pallette.GRAY_100,
  borderMain: pallette.GRAY_200,
  borderSecondary: pallette.GRAY_600
});

export const textSizes = stylex.defineVars({
  xs: '0.8rem',
  sm: '1.2rem',
  m: '1.4rem',
  l: '1.6rem',
  xl: '1.8rem'
});

export const spacing = stylex.defineVars({
  xxs: '0.2rem',
  xs: '0.8rem',
  sm: '1rem',
  m: '1.2rem',
  l: '1.4rem',
  xl: '1.8rem'
});

export const radius = stylex.defineVars({
  soft: '0.25rem',
  medium: '0.5rem',
  important: '1rem'
});

export const gridTemplates = stylex.defineVars({
  listSm1Xl4: {
    default: 'repeat(1, minmax(0, 1fr))',
    [screens.SCREEN_SM]: 'repeat(1, minmax(0, 1fr))',
    [screens.SCREEN_MD]: 'repeat(2, minmax(0, 1fr))',
    [screens.SCREEN_LG]: 'repeat(3, minmax(0, 1fr))',
    [screens.SCREEN_XL]: 'repeat(4, minmax(0, 1fr))'
  }
});

export const displayScreen = stylex.defineVars({
  mobile: {
    default: 'block',
    [screens.SCREEN_SM]: 'block',
    [screens.SCREEN_MD]: 'none'
  },
  desktop: {
    default: 'none',
    [screens.SCREEN_SM]: 'none',
    [screens.SCREEN_MD]: 'block'
  }
});

const DARK = '@media (prefers-color-scheme: dark)';

export const darkTheme = stylex.createTheme(colors, {
  titleMain: {
    default: pallette.GRAY_700,
    [DARK]: pallette.WHITE
  },
  titleSecondary: {
    default: pallette.GRAY_700,
    [DARK]: pallette.GRAY_100
  },
  textMain: {
    default: pallette.GRAY_900,
    [DARK]: pallette.WHITE
  },
  textSecondary: {
    default: pallette.GRAY_600,
    [DARK]: pallette.GRAY_100
  },
  backgroundMain: {
    default: pallette.WHITE,
    [DARK]: pallette.GRAY_700
  },
  backgroundSecondary: {
    default: pallette.GRAY_100,
    [DARK]: pallette.GRAY_700
  },
  borderMain: {
    default: pallette.GRAY_200,
    [DARK]: pallette.GRAY_600
  },
  borderSecondary: {
    default: pallette.GRAY_600,
    [DARK]: pallette.GRAY_200
  }
});
