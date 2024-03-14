import * as React from 'react';
import * as stylex from '@stylexjs/stylex'
import { colors, darkTheme, gridTemplates, radius, spacing } from '../styles/tokens.stylex';
import { Product } from './Product';
import { products } from './product.model';

const styles = stylex.create({
  productContainer: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: radius.soft,
    columnGap: spacing.sm,
    display: 'grid',
    gridTemplateColumns: gridTemplates.listSm1Xl4,
    padding: spacing.sm,
    rowGap: spacing.sm
  }
})

export const ProductList = () => {
  return (
    <div {...stylex.props(darkTheme, styles.productContainer)}>
      {products.map((product) => <Product key={product.title} product={product}/>)}
    </div>
  )
}
