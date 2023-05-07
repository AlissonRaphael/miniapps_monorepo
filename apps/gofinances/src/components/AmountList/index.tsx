import { useCallback, useMemo } from 'react';

import { Container, Item, Title, Amounts, Icon, Amount } from './styles';

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

interface Category {
  id: string,
  deposit: number,
  withdrawal: number,
  name: string,
  color: string,
}

export default function AmountList ({ transactions }: AmountListProps) {
  const categoriesList = useMemo(() => {
    const processor = {} as CategoryDictionary<CategoryValues>
  
    transactions.forEach((transaction: TransactionListProps) => {
      const { amount, type } = transaction

      if (processor[transaction.name] === undefined) {
        processor[transaction.name] = new Processor(transaction)
      }

      processor[transaction.name].put(amount, type)
    })

    return Object.values(processor)
  }, [transactions])

  const amountFormatter = useCallback((amount: number) => {
    return new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }
    ).format(amount)
  }, [])

  return (
    <Container>
      {categoriesList.map(({ id, amount, name, color }: CategoryList) => (
        <Item key={id} borderColor={color}>
          <Title>{name}</Title>
          <Amounts>
            {amountFormatter(amount)}
          </Amounts>
        </Item>
      ))}
    </Container>
  )
}

class Processor {
  deposit: number;
  withdrawal: number;

  constructor(public transaction: TransactionListProps) {
    this.deposit = 0
    this.withdrawal = 0
  }

  put (amount: number, type: string) {
    if (type === "deposit") {
      this.deposit += amount
    }

    if (type === "withdrawal") {
      this.withdrawal += amount
    }
  }

  get () {
    const { deposit, withdrawal, transaction: { id, category: { name, color } } } = this
    return { id, deposit, withdrawal, name, color }
  }

}
