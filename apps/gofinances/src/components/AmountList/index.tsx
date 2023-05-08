import { useCallback, useMemo } from 'react';

import { Container, Item, Title, Amounts, Amount, Icon, Text } from './styles';

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
  deposit: number,
  withdrawal: number,
  name: string,
  color: string,
}

export default function AmountList ({ transactions }: AmountListProps) {
  const categories = useMemo<CategoryValues[]>(() => {
    const processor = {} as CategoryDictionary<Processor>

    transactions.forEach((transaction: TransactionListProps) => {
      const { amount, type, category: { name } } = transaction

      if (processor[name] === undefined) {
        processor[name] = new Processor(transaction)
      }

      processor[name].put(amount, type)
    })

    return Object.values(processor).map(processor => processor.get())
  }, [transactions])

  const amountFormatter = useCallback((amount: number) => {
    return new Intl.NumberFormat('pt-BR',
      { style: 'currency', currency: 'BRL' }
    ).format(amount)
  }, [])

  return (
    <Container>
      {categories.map((category: CategoryValues) => {
        const { id, deposit, withdrawal, name, color } = category
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
