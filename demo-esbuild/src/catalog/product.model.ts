export interface ProductModel {
  title: string
  image: string
  description: string
  price: number
}

export const products: ProductModel[] = [
  {
    title: 'Dell XPS 15',
    description: 'Ordinateur portable XPS 15',
    image: '/images/products/notebook-xps-15-9530-t-black-gallery-1.avif',
    price: 1899.35
  },
  {
    title: 'Alienware m16 R2',
    description: 'Ordinateurs portables Alienware 16 pouces',
    image: '/images/products/notebook-alienware-x16-r2-gray-gallery-12.avif',
    price: 1999.50
  },
  {
    title: 'Alienware Aurora R16',
    description: 'Ordinateurs de bureau gaming Alienware',
    image: '/images/products/desktop-aw-r16-bk-lqd-cooling-gallery-3.avif',
    price: 1399.01
  },
  {
    title: 'Acer Nitro',
    description: 'Acer Nitro 5 Ordinateur portable Gamer | AN515-58 | Noir',
    image: '/images/products/acer-nitro.webp',
    price: 1199.00
  },
  {
    title: 'Macbook Pro Touch',
    description: 'MacBook Pro Touch Bar 16" Retina',
    image: '/images/products/macbook-pro-touch-16.avif',
    price: 2419.02
  },
  {
    title: 'HP spectre',
    description: 'HP Spectre x360 16-f2004nf - Écran tactile OLED',
    image: '/images/products/hp-spectre-16.webp',
    price: 2399.00
  },
  {
    title: 'Lenovo Yoga',
    description: 'PC Hybride Lenovo Yoga 7 16IRL8 16" 2.5K Tactile Intel Evo Core i7 16 Go RAM 512 Go SSD Gris',
    image: '/images/products/lenovo-yoga.jpg',
    price: 1499.99
  },
  {
    title: 'MSI MEG Trident X2',
    description: 'Intel Core i7-13700KF, RTX 4080 16 Go, 32 Go DDR5, SSD 2 To',
    image: '/images/products/msi-meg-trident.jpg',
    price: 3699.95
  }
];
