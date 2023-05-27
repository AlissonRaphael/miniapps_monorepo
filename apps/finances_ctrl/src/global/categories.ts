export interface CategoryType {
  id: number,
  name: string,
  icon: string,
  color: string,
}

export interface CategoryListType {
  [id: number]: CategoryType
}

const CATEGORIES: CategoryListType = {
  1: { id: 1, name: 'Trabalho', icon: 'suitcase', color: 'aquamarine' },
  2: { id: 2, name: 'Lazer', icon: 'glass', color: 'lightskyblue' },
  3: { id: 3, name: 'Custos', icon: 'credit-card', color: 'gold' },
  4: { id: 4, name: 'Imprevistos', icon: 'thumbs-down', color: 'coral' },
  5: { id: 5, name: 'Outros', icon: 'archive', color: 'pink' }
}

export default CATEGORIES;
