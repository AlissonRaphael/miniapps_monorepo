import { useCallback, useMemo } from 'react';

import { Amount, Container, Item, Title } from './styles';

import { TransactionItemProps } from '../Transaction';

interface TransactionListProps extends TransactionItemProps {
  id: string,
}

interface AmountListProps {
  transactions: TransactionListProps[]
}

interface CategoryDictionary<TValue> {
  [key: string]: TValue
}

interface CategoryValues {
  id: string,
  amount: number,
  name: string,
  color: string,
}

export default function AmountList ({ transactions }: AmountListProps) {
  const categories = useMemo(() => {
    const list = {} as CategoryDictionary<CategoryValues>

    transactions.forEach(({ id, amount, category: { name, color } }: TransactionListProps) => {
      if (list[name] === undefined) {
        list[name] = { id, amount, color, name }
      } else {
        list[name].amount += amount
      }
    })

    return list
  }, [])

  const amountFormatter = useCallback((amount: number) => {
    return new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }
    ).format(amount)
  }, [])

  return (
    <Container>
      {Object.values(categories || []).map(({ id, amount, name, color }: CategoryValues) => (
        <Item key={id} borderColor={color}>
          <Title>{name}</Title>
          <Amount>{amountFormatter(amount)}</Amount>
        </Item>
      ))}
    </Container>
  )
}
