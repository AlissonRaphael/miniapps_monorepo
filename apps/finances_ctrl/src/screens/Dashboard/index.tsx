import React, { useCallback, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import Card from '../../components/Card';
import Transaction, { TransactionItemProps } from '../../components/Transaction';
import { $transactions } from '../../global/storage';
import ActivityIndicator from '../../components/ActivityIndicator';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  Wrapper,
  User,
  Avatar,
  Details,
  Greeting,
  Name,
  LogoutButton,
  LogoutIcon,
  Cards,
  History,
  Transactions,
  Title,
} from './styles';

export interface TransactionListProps extends TransactionItemProps {
  id: string,
}

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<TransactionListProps[]>([])
  const { user } = useAuth()

  const loadTransactions = async () => {
    setIsLoading(true)
    const data = await AsyncStorage.getItem($transactions)
    if (data) {
      setData(JSON.parse(data || "[]"))
    }
    setIsLoading(false)
  }

  useFocusEffect(useCallback(() => {
    loadTransactions()
  }, []))

  const [deposit, withdrawal, total, lastDeposit, lastWithdrawal, lastTransaction] = useMemo(() => {
    let deposit = 0, withdrawal = 0, lastDeposit = 0, lastWithdrawal = 0, lastTransaction = 0;

    data.forEach(({ amount, type, date }) => {
      const time = new Date(date).getTime()
      lastTransaction = lastTransaction > time ? lastTransaction : time

      switch (type) {
        case 'deposit':
          deposit += amount
          lastDeposit = lastDeposit > time ? lastDeposit : time
          break
        case 'withdrawal':
          withdrawal += amount
          lastWithdrawal = lastWithdrawal > time ? lastWithdrawal : time
          break
      }
    })
    return [
      deposit,
      withdrawal,
      deposit-withdrawal,
      new Date(lastDeposit),
      new Date(lastWithdrawal),
      new Date(lastTransaction)
    ]
  }, [data])

  if (isLoading) {
    return <ActivityIndicator />
  }

  return (
    <Container>
      <Header>
        <Wrapper>
          <User>
            <Avatar source={{ uri: user?.avatar }} />
            <Details>
              <Greeting>Olá,</Greeting>
              <Name>{user.name}</Name>
            </Details>
          </User>
          <LogoutButton onPress={() => console.log('ok')}>
            <LogoutIcon />
          </LogoutButton>
        </Wrapper>
      </Header>

      <Cards>
        <Card type="deposit" amount={deposit} lastTransaction={lastDeposit} />
        <Card type="withdrawal" amount={withdrawal} lastTransaction={lastWithdrawal} />
        <Card type="total" amount={total} lastTransaction={lastTransaction} />
      </Cards>

      <History>
        <Title>Listagem</Title>
        <Transactions
          data={data}
          keyExtractor={(item: TransactionListProps) => item.id}
          renderItem={({ item }: { item: TransactionListProps }) => <Transaction data={item} />}
        />
      </History> 
    </Container>
  )
}
