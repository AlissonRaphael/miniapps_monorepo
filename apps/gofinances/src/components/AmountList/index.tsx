import { useCallback, useMemo } from 'react';

import { TransactionListProps } from '../../screens/Dashboard';
import CATEGORIES from '../../global/categories';

import { Container, Item, Title, Amounts, Amount, Icon, Text } from './styles';

interface AmountListProps {
  transactions: TransactionListProps[]
}

interface Dictionary<TValue> {
  [key: string]: TValue
}

interface Category {
  id: number,
  deposit: number,
  withdrawal: number,
  name: string,
  color: string,
}

export default function AmountList ({ transactions }: AmountListProps) {
  const amountFormatter = useCallback((amount: number) => {
    return new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }
    ).format(amount)
  }, [])

  const [categories, totals] = useMemo(() => {
    const processor = {} as Dictionary<Category>
    let deposit = 0
    let withdrawal = 0

    transactions.forEach((transaction: TransactionListProps) => {
      const { amount, type, category } = transaction
      const { id, name, color } = CATEGORIES[category]

      if (processor[name] === undefined) {
        processor[name] = { deposit: 0, withdrawal: 0, id, name, color }
      }

      if (type === 'deposit') {
        processor[name].deposit += amount
        deposit += amount
      }

      if (type === 'withdrawal') {
        processor[name].withdrawal += amount
        withdrawal += amount
      }
    })

    return [Object.values(processor), { deposit, withdrawal }]
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
