import { useCallback, useMemo } from 'react';

import { TransactionListProps } from '../../screens/Dashboard';
import CATEGORIES from '../../global/categories';

import { Container, Item, Title, Amount } from './styles';

interface AmountListProps {
  transactions: TransactionListProps[],
  amountFilter: 'deposit' | 'withdrawal',
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

export default function AmountList ({ transactions, amountFilter }: AmountListProps) {
  const amountFormatter = useCallback((amount: number) => {
    return new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }
    ).format(amount)
  }, [])

  const categories = useMemo(() => {
    const categories = {} as Dictionary<Category>
    let deposit = 0
    let withdrawal = 0

    transactions.forEach((transaction: TransactionListProps) => {
      const { amount, type, category } = transaction
      const { id, name, color } = CATEGORIES[category]

      if (categories[name] === undefined) {
        categories[name] = { deposit: 0, withdrawal: 0, id, name, color }
      }

      if (type === 'deposit') {
        categories[name].deposit += amount
        deposit += amount
      }

      if (type === 'withdrawal') {
        categories[name].withdrawal += amount
        withdrawal += amount
      }
    })

    return Object.values(categories)
  }, [transactions])

  return (
    <Container>
      {categories.map((category: Category) => {
        const { deposit, withdrawal, id, name, color } = category
        return (
          <Item key={id} borderColor={color}>
            <Title>{name}</Title>
              <Amount>
                {amountFilter === 'deposit' ?
                  amountFormatter(deposit) :
                  amountFormatter(withdrawal) }
              </Amount>
          </Item>
        )
      })}
    </Container>
  )
}
