import { useEffect, useState } from 'react';
import { TouchableOpacityProps } from 'react-native';

import CATEGORIES, { CategoryType } from '../../global/categories';

import { Container, Category, Icon, Title, Chevron } from './styles';

interface SelectFormProps extends TouchableOpacityProps {
  placeholder: string,
  category: number | undefined,
}

export default function SelectForm ({ placeholder, category, ...props }: SelectFormProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);

  useEffect(() => {
    if (category) {
      setSelectedCategory(CATEGORIES[category])
    }
  }, [category])

  return (
    <Container {...props}>
      <Category>
        { selectedCategory ? <Icon name={selectedCategory?.icon} /> : null}
        <Title selected={Boolean(selectedCategory?.name)}>{selectedCategory?.name || placeholder}</Title>
      </Category>
      <Chevron />
    </Container>
  )
}
