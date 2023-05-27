import { TouchableOpacityProps } from 'react-native/types';

import { Container, Icon, Title } from './styles';

export interface TypeFormProps extends TouchableOpacityProps {
  type: 'deposit' | 'withdrawal',
  checked: boolean
}

const TYPE = {
  deposit: { title: 'Entrada', icon: 'arrow-circle-up' },
  withdrawal: { title: 'Saída', icon: 'arrow-circle-down' },
}

export default function TypeForm ({ ...props }: TypeFormProps) {
  const { type } = props
  return (
    <Container {...props}>
      <Icon type={type} name={TYPE[type].icon} />
      <Title>{TYPE[type].title}</Title>
    </Container>
  )
}
