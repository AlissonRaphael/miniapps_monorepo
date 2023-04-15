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
  const list = [{
    id: 1,
    title: 'Desenvolvimento de site',
    category: { name: "Trabalho", icon: "dollar" },
    amount: 11029,
    date: new Date(Date.now())
  },{
    id: 2,
    title: 'Desenvolvimento de site',
    category: { name: "Trabalho", icon: "dollar" },
    amount: 11029,
    date: new Date(Date.now())
  },{
    id: 3,
    title: 'Desenvolvimento de site',
    category: { name: "Trabalho", icon: "dollar" },
    amount: 11029,
    date: new Date(Date.now())
  },{
    id: 4,
    title: 'Desenvolvimento de site',
    category: { name: "Trabalho", icon: "dollar" },
    amount: 11029,
    date: new Date(Date.now())
  }]

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
