import { useEffect, useState } from 'react';
import { ModalProps } from 'react-native';

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

interface CategoriesProps extends ModalProps {
  value?: CategoryType
  onSelect: (category: CategoryType) => void,
}

export default function Categories ({ value, onSelect, ...props }: CategoriesProps) {
  const DATA: CategoryType[] = [
    { id: 1, label: 'Trabalho', icon: 'suitcase', color: 'aquamarine' },
    { id: 2, label: 'Lazer', icon: 'glass', color: 'lightskyblue' },
    { id: 3, label: 'Custos', icon: 'credit-card', color: 'gold' },
    { id: 4, label: 'Imprevistos', icon: 'thumbs-down', color: 'coral' },
    { id: 5, label: 'Outros', icon: 'archive', color: 'pink' }
  ]

  const [selectedCatedory, setSelectedCategory] = useState<CategoryType>()

  useEffect(() => {
    if (value) {
      setSelectedCategory(value)
    }
  }, [])

  return (
    <Container {...props} statusBarTranslucent={true} presentationStyle="fullScreen">
      <Header>
        <Title>Categoria</Title>
      </Header>
      <CategoriesList
        data={DATA}
        keyExtractor={(item: CategoryType) => item.id}
        renderItem={({ item }: { item: CategoryType }, index: number) => <>
          { index === 0 ? null : <Separator  /> }
          <Category
            category={item}
            onPress={() => setSelectedCategory(item)}
            active={item.id === selectedCatedory?.id}
          />
        </>}
      />
      <Footer>
        <Button label="Selecionar" onPress={() => selectedCatedory && onSelect(selectedCatedory)} />
      </Footer>
    </Container>
  )
}

interface CategoryProps {
  category: CategoryType,
  active: boolean,
  onPress: () => void,
}

function Category ({ category, active, onPress }: CategoryProps) {
  const { label, icon, color } = category

  return (
    <CategoryItem onPress={onPress} active={active}>
      <Icon name={icon} color={color} />
      <Label>{label}</Label>
    </CategoryItem>
  )
}