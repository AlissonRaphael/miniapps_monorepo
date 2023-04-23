import { TouchableOpacityProps } from 'react-native';

import { Container, Title, Icon } from './styles';

interface SelectFormProps extends TouchableOpacityProps {
  title: string
}

export default function SelectForm ({ title, ...props }: SelectFormProps) {
  return (
    <Container {...props}>
      <Title>{title}</Title>
      <Icon name="chevron-down" /> 
    </Container>
  )
}
