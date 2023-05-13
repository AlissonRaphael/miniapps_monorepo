import { useEffect, useMemo, useState } from 'react';
import { ModalProps } from 'react-native';

import Button from '../../components/Button';
import CATEGORIES, { CategoryType } from '../../global/categories';

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

interface CategoriesProps extends ModalProps {
  value?: number | undefined,
  onSelect: (categoryId: number) => void,
}

export default function Categories ({ value, onSelect, ...props }: CategoriesProps) {
  const categories: CategoryType[] = useMemo(() => Object.values(CATEGORIES), [])
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>()

  useEffect(() => {
    if (value) {
      setSelectedCategory(CATEGORIES[value])
    }
  }, [])

  return (
    <Container statusBarTranslucent={true} presentationStyle="fullScreen" {...props}>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <CategoriesList
        data={categories}
        keyExtractor={(item: CategoryType) => item.id}
        renderItem={({ item }: { item: CategoryType }, index: number) => <>
          { index === 0 ? null : <Separator  /> }
          <Category
            category={item}
            onPress={() => setSelectedCategory(item)}
            active={item.id === selectedCategory?.id}
          />
        </>}
      />
      <Footer>
        <Button label="Selecionar" onPress={() => selectedCategory && onSelect(selectedCategory.id)} />
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
  const { name, icon, color } = category

  return (
    <CategoryItem onPress={onPress} active={active}>
      <Icon name={icon} color={color} />
      <Label>{name}</Label>
    </CategoryItem>
  )
}