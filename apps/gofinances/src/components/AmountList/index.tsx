import { useCallback } from 'react';

import { Container, Item, Title, Amounts, Amount, Icon, Text } from './styles';

interface AmountListProps {
  categories: Category[]
}

interface Category {
  id: number,
  deposit: number,
  withdrawal: number,
  max: number,
  name: string,
  color: string,
}

export default function AmountList ({ categories }: AmountListProps) {
  const amountFormatter = useCallback((amount: number) => {
    return new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }
    ).format(amount)
  }, [])

  return (
    <Container>
      {categories.map((category: Category) => {
        const { deposit, withdrawal, id, name, color } = category
        return (
          <Item key={id} borderColor={color}>
            <Title>{name}</Title>
            <Amounts>
              <Amount>
                <Text>{amountFormatter(deposit)}</Text>
                <Icon name="arrow-circle-up" type="deposit" />
              </Amount>
              <Amount>
              <Text>{amountFormatter(withdrawal)}</Text>
                <Icon name="arrow-circle-down" type="withdrawal" />
              </Amount>
            </Amounts>
          </Item>
        )
      })}
    </Container>
  )
}
