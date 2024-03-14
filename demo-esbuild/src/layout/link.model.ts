export interface LinkModel {
  title: string
  href: string
}

export const mainMenuLinks: LinkModel[] = [
  { title: 'Accueil', href: '#dashboard' },
  { title: 'Portables', href: '#laptop' },
  { title: 'Gaming', href: '#gaming' }
];
