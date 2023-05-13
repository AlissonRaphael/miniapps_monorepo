import React, { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { $transactions } from '../../global/storage';
import { TransactionItemProps } from '../../components/Transaction';
import ActivityIndicator from '../../components/ActivityIndicator';
import AmountList from '../../components/AmountList';

import { Container, Header, Title } from './styles';

export interface TransactionListProps extends TransactionItemProps {
  id: string,
}

export default function Summary () {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [transactions, setTransactions] = useState<TransactionListProps[]>([])

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

      <AmountList transactions={transactions} />
    </Container>
  )
}
