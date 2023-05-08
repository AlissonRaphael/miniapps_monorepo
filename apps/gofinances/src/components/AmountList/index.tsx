import { useCallback, useMemo } from 'react';

import { Container, Item, Title, Amounts, Amount, Icon, Text } from './styles';

import { TransactionItemProps } from '../Transaction';

interface Transaction extends TransactionItemProps {
  id: string,
}

interface AmountListProps {
  transactions: Transaction[]
}
interface Dictionary<TValue> {
  [key: string]: TValue
}

interface Category {
  deposit: number,
  withdrawal: number,
  name: string,
  color: string,
}

export default function AmountList ({ transactions }: AmountListProps) {
  const categories = useMemo<Category[]>(() => {
    const processor = {} as Dictionary<Processor>

    transactions.forEach((transaction: Transaction) => {
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

class Processor {
  deposit: number;
  withdrawal: number;

  constructor(public transaction: Transaction) {
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
    const { deposit, withdrawal, transaction: { category: { name, color } } } = this
    return { deposit, withdrawal, name, color }
  }

}
