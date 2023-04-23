import {
  Container,
  Header,
  Title,
  CategoriesList,
  CategoryItem,
  Separator,
  Icon,
  Label,
  Footer
} from './styles';

import Button from '../../components/Button';

export interface CategoryType {
  id: number,
  label: string,
  icon: string,
  color: string,
}

export default function Categories () {
  const DATA: CategoryType[] = [
    { id: 1, label: 'Trabalho', icon: 'suitcase', color: 'aquamarine' },
    { id: 2, label: 'Lazer', icon: 'glass', color: 'lightskyblue' },
    { id: 3, label: 'Custos', icon: 'credit-card', color: 'gold' },
    { id: 4, label: 'Imprevistos', icon: 'thumbs-down', color: 'coral' },
    { id: 5, label: 'Outros', icon: 'archive', color: 'pink' }
  ]

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <CategoriesList
        data={DATA}
        keyExtractor={(item: CategoryType) => item.id}
        renderItem={({ item }: { item: CategoryType }, index: number) => <>
          { index === 0 ? null : <Separator  /> }
          <Category category={item} onPress={() => console.log(item)}/>
        </>}
      />
      <Footer>
        <Button label="Selecionar" onPress={() => {}} />
      </Footer>
    </Container>
  )
}

interface CategoryProps {
  category: CategoryType,
  onPress: () => void,
}

function Category ({ category, onPress }: CategoryProps) {
  const { label, icon, color } = category

  return (
    <CategoryItem onPress={onPress}>
      <Icon name={icon} color={color} />
      <Label>{label}</Label>
    </CategoryItem>
  )
}