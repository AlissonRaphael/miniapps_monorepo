import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, Header, Title } from './styles';

import { $transactions } from '../../global/storage';
import { TransactionItemProps } from '../../components/Transaction';
import ActivityIndicator from '../../components/ActivityIndicator';
import AmountList from '../../components/AmountList';

export interface TransactionListProps extends TransactionItemProps {
  id: string,
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

interface Totals {
  deposit: number,
  withdrawal: number,
}

export default function Summary () {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categories, setCategories] = useState<Category[]>([])
  const [totals, setTotals] = useState<Totals>()

  const process = useCallback((transactions: TransactionListProps[]) => {
    const processor = {} as Dictionary<Category>
    let deposit = 0
    let withdrawal = 0

    transactions.forEach((transaction: TransactionListProps) => {
      const { amount, type, category: { name, color } } = transaction

      if (processor[name] === undefined) {
        processor[name] = { deposit: 0, withdrawal: 0, name, color }
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

  const loadTransactions = async () => {
    setIsLoading(true)
    const data = await AsyncStorage.getItem($transactions)
    if (data) {
      const raw = JSON.parse(data || "[]")
      const [categories, totals] = process(raw)
      setCategories(categories)
      setTotals(totals)
    }
    setIsLoading(false)
  }

  useFocusEffect(useCallback(() => {
    loadTransactions()
  }, []))

  if (isLoading) {
    return <ActivityIndicator />
  }

  return (
    <Container>
      <Header>
        <Title>Resumo</Title>
      </Header>

      <AmountList categories={categories} />
    </Container>
  )
}
