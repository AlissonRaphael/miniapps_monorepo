import React, { useCallback, useMemo, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import {
  Container,
  Header,
  Wrapper,
  User,
  Avatar,
  Details,
  Greeting,
  Name,
  LogoutIcon,
  Cards,
  History,
  Transactions,
  Title,
  Load
} from './styles';

import Card from '../../components/Card';
import Transaction, { TransactionItemProps } from '../../components/Transaction';
import { $transactions } from '../../global/storage';
import { useTheme } from 'styled-components';

export interface TransactionListProps extends TransactionItemProps {
  id: number,
}

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<TransactionListProps[]>([])

  const theme = useTheme()

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

  const [deposit, withdrawal, total] = useMemo(() => {
    let deposit: number = 0
    let withdrawal: number = 0
    data.forEach(({ amount, type }) => type === 'deposit' ? deposit += amount : withdrawal += amount)
    return [deposit, withdrawal, deposit-withdrawal]
  }, [data])

  if (isLoading) {
    return (
      <Load>
        <ActivityIndicator color={theme.colors.secondary} size="large" />
      </Load>
    )
  }

  return (
    <Container>
      <Header>
        <Wrapper>
          <User>
            <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/67491541?v=4' }} />
            <Details>
              <Greeting>Olá,</Greeting>
              <Name>Alisson</Name>
            </Details>
          </User>
          <LogoutIcon />
        </Wrapper>
      </Header>

      <Cards>
        <Card type="deposit" amount={deposit} lastTransaction={new Date(Date.now())}/>
        <Card type="withdrawal" amount={withdrawal} lastTransaction={new Date(Date.now())}/>
        <Card type="total" amount={total} lastTransaction={new Date(Date.now())}/>
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
