import React, { useCallback, useState, useMemo } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';
import { groupBy } from 'lodash';

import { $transactions } from '../../global/storage';
import { TransactionItemProps } from '../../components/Transaction';
import ActivityIndicator from '../../components/ActivityIndicator';
import AmountList from '../../components/AmountList';
import Chart from '../../components/Chart';
import SelectDate from '../../components/SelectDate';
import CATEGORIES from '../../global/categories';


import { Container, Header, Title, Content, Text } from './styles';
import { useAuth } from '../../hooks/auth';

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
  date: string,
}

export default function Summary () {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [transactions, setTransactions] = useState<TransactionListProps[]>([])
  const { user } = useAuth()

  const categories = useMemo(() => {
    const categories = {} as Dictionary<Category>

    transactions.forEach((transaction: TransactionListProps) => {
      const { amount, type, category, date: transactionDate } = transaction
      const { id, name, color } = CATEGORIES[category]
      const date = format(new Date(transactionDate), 'MM-yyyy')

      if (categories[name] === undefined) {
        categories[name] = { deposit: 0, withdrawal: 0, max: 0, id, name, color, date }
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

    return groupBy(Object.values(categories), 'date')
  }, [transactions])

  const filtered = useMemo(() => {
    const date = format(new Date(selectedDate), 'MM-yyyy')
    return categories[date] || []
  }, [categories, selectedDate])

  const loadTransactions = async () => {
    setIsLoading(true)
    const data = await AsyncStorage.getItem(`${$transactions}:${user.id}`)
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
      <SelectDate date={selectedDate} onChange={(date: Date) => setSelectedDate(date)} />
      { filtered.length ? <>
        <Chart categories={filtered} />
        <AmountList categories={filtered} />
      </> : <Content><Text>Sem registros no mês</Text></Content> }
    </Container>
  )
}
