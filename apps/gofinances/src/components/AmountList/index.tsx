import { useCallback } from 'react';

import { Container, Item, Title, Amounts, Amount, Icon, Text } from './styles';

interface AmountListProps {
  categories: Category[]
}

interface Category {
  deposit: number,
  withdrawal: number,
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
        const { deposit, withdrawal, name, color } = category
        return (
          <Item key={name} borderColor={color}>
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
