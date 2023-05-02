import { TouchableOpacityProps } from 'react-native';

import { Container, Category, Icon, Title, Chevron } from './styles';

import { CategoryType } from '../../screens/Category';

interface SelectFormProps extends TouchableOpacityProps {
  placeholder: string,
  category: CategoryType | null,
}

export default function SelectForm ({ placeholder, category, ...props }: SelectFormProps) {
  return (
    <Container {...props}>
      <Category>
        { category ? <Icon name={category?.icon} /> : null}
        <Title selected={Boolean(category?.name)}>{category?.name || placeholder}</Title>
      </Category>
      <Chevron />
    </Container>
  )
}
