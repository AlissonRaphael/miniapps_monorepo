import { Container, Title, Icon } from './styles';

interface SelectFormProps {
  title: string
}

export default function SelectForm ({ title }: SelectFormProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Icon name="chevron-down" /> 
    </Container>
  )
}
