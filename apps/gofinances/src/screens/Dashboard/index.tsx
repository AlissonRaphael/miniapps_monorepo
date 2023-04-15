import React from 'react';

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
  Title
} from './styles';

import Card from '../../components/Card';
import Transaction from '../../components/Transaction';

export default function Dashboard() {
  const list = [
    {
      id: 1,
      title: 'Desenvolvimento de site',
      type: 'deposit',
      category: { name: "Trabalho", icon: "work" },
      amount: 11029,
      date: new Date(Date.now())
    },
    {
      id: 2,
      title: 'Aluguel',
      type: 'withdrawal',
      category: { name: "Despesas", icon: "home-filled" },
      amount: 921,
      date: new Date(Date.now())
    },
    {
      id: 3,
      title: 'Supermercado',
      type: 'withdrawal',
      category: { name: "Alimentação", icon: "fastfood" },
      amount: 413,
      date: new Date(Date.now())
    },
    {
      id: 4,
      title: 'Trabalho',
      type: 'deposit',
      category: { name: "Trabalho", icon: "work" },
      amount: 5000,
      date: new Date(Date.now())
    },
  ]

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
        <Card type="deposit" amount={15389} lastTransaction={new Date(Date.now())}/>
        <Card type="withdrawal" amount={9389} lastTransaction={new Date(Date.now())}/>
        <Card type="total" amount={2389} lastTransaction={new Date(Date.now())}/>
      </Cards>

      <History>
        <Title>Listagem</Title>
        <Transactions 
          data={list}
          renderItem={({ item }) => <Transaction key={item.id} data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </History>
    </Container>
  )
}
