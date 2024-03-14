import * as stylex from '@stylexjs/stylex';

export interface PulseAnimation {
  animationName: typeof pulse,
  animationDuration: '1s' | '2s',
  animationIterationCount: number
};

const pulse = stylex.keyframes({
  '0%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(0.9)' },
  '100%': { transform: 'scale(1)' }
});

export const animations = stylex.create<{[key: string]: PulseAnimation}>({
  pulse: {
    animationName: pulse,
    animationDuration: '1s',
    animationIterationCount: 1
  }
});
