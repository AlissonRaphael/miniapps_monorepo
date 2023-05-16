import React, { useCallback, useState, useMemo } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { $transactions } from '../../global/storage';
import { TransactionItemProps } from '../../components/Transaction';
import ActivityIndicator from '../../components/ActivityIndicator';
import AmountList from '../../components/AmountList';
import Chart from '../../components/Chart';
import CATEGORIES from '../../global/categories';

import { Container, Header, Title } from './styles';

export interface TransactionListProps extends TransactionItemProps {
  id: string,
}

interface Dictionary<TValue> {
  [key: string]: TValue
}

interface Category {
  id: number,
  deposit: number,
  withdrawal: number,
  max: number,
  name: string,
  color: string,
}

export default function Summary () {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [transactions, setTransactions] = useState<TransactionListProps[]>([])

  const categories = useMemo(() => {
    const categories = {} as Dictionary<Category>

    transactions.forEach((transaction: TransactionListProps) => {
      const { amount, type, category } = transaction
      const { id, name, color } = CATEGORIES[category]

      if (categories[name] === undefined) {
        categories[name] = { deposit: 0, withdrawal: 0, max: 0, id, name, color }
      }

      if (type === 'deposit') {
        categories[name].deposit += amount
      }

      if (type === 'withdrawal') {
        categories[name].withdrawal += amount
      }

      if (categories[name].deposit > categories[name].max) {
        categories[name].max = categories[name].deposit
      }

      if (categories[name].withdrawal > categories[name].max) {
        categories[name].max = categories[name].withdrawal
      }
    })

    return Object.values(categories)
  }, [transactions])

  const loadTransactions = async () => {
    setIsLoading(true)
    const data = await AsyncStorage.getItem($transactions)
    if (data) {
      const transactions = JSON.parse(data || "[]")
      setTransactions(transactions)
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

      <Chart categories={categories} />

      <AmountList categories={categories} />
    </Container>
  )
}
