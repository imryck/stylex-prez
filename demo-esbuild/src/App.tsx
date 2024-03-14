import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './layout/Header';
import { ProductList } from './catalog/ProductList';

import * as stylex from '@stylexjs/stylex';
import './styles/global.css'
import { colors, darkTheme, spacing } from './styles/tokens.stylex';
import { styleBases } from './styles/bases.stylex';

const styles = stylex.create({
  main: {
    backgroundColor: colors.backgroundMain,
    color: colors.textMain,
    padding: spacing.m
  },
  pageContainer: {
    padding: spacing.m
  }
});

function App() {
  return (
    <>
      <Header></Header>
      <main {...stylex.props(darkTheme, styles.main)}>
        <div {...stylex.props(styles.pageContainer, styleBases.borderRadius)}>
          <h2 {...stylex.props(styleBases.pageTitle)}>Nos meilleures ventes</h2>
          <ProductList></ProductList>
        </div>
      </main>
    </>
  )
}

const root = createRoot(document.getElementById('root') as Element);
root.render(<App/>);
