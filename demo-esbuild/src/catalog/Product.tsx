import { ProductModel } from './product.model';
import * as stylex from '@stylexjs/stylex';
import * as React from 'react';
import { colors, darkTheme, spacing, textSizes } from '../styles/tokens.stylex';
import { styleBases } from '../styles/bases.stylex';

interface ProductProps {
  product: ProductModel
}

const styles = stylex.create({
  body: {
    backgroundColor: colors.backgroundMain,
    borderColor: {
      default: colors.borderMain,
      ':hover': colors.borderSecondary
    },
    borderWidth: 2,
    display: 'flex',
    flexDirection: 'column',
    padding: spacing.xs,
    transitionDuration: '0.8s',
    transitionProperty: 'border'
  },
  image: {
    height: 180,
    objectFit: 'contain'
  },
  titleRow: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    color: colors.titleSecondary,
    fontSize: textSizes.m
  },
  price: {
    fontSize: textSizes.sm,
    fontWeight: 500,
    whiteSpace: 'nowrap',
    '::after': {
      marginLeft: spacing.xxs,
      content: '\\20AC'
    }
  },
  description: {
    color: colors.textSecondary,
    fontSize: textSizes.xs
  }
})

export const Product = ({ product }: ProductProps) => {
  return (
    <div key={product.title} {...stylex.props(darkTheme, styleBases.borderRadius, styles.body)}>
      <img {...stylex.props(styles.image)} src={product.image} alt={product.title}/>
      <div {...stylex.props(styles.titleRow)}>
        <h3 {...stylex.props(styles.title)}>{product.title}</h3>
        <span {...stylex.props(styles.price)}>{product.price}</span>
      </div>
      <p {...stylex.props(styles.description)}>{product.description}</p>
    </div>
  );
}
