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

export default function Summary () {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categories, setCategories] = useState<Category[]>([])

  const process = useCallback((transactions: TransactionListProps[]) => {
    const processor = {} as Dictionary<Category>

    transactions.forEach((transaction: TransactionListProps) => {
      const { amount, type, category: { name, color } } = transaction

      if (processor[name] === undefined) {
        processor[name] = { deposit: 0, withdrawal: 0, name, color }
      }

      if (type === 'deposit') {
        processor[name].deposit += amount
      }

      if (type === 'withdrawal') {
        processor[name].withdrawal += amount
      }
    })

    return Object.values(processor)
  }, [])

  const loadTransactions = async () => {
    setIsLoading(true)
    const data = await AsyncStorage.getItem($transactions)
    if (data) {
      const raw = JSON.parse(data || "[]")
      setCategories(process(raw))
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
