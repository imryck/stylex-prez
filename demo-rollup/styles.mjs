import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  main: {
    backgroundColor: 'white',
    color: 'rgb(10, 61, 98)',
    padding: '1.2rem'
  },
  pageContainer: {
    padding: '1.2rem'
  },
});

console.log(stylex.attrs(styles.main));
