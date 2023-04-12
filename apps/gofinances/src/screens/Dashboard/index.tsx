import React from 'react';

import { Container, Header, Wrapper, User, Avatar, Details, Greeting, Name, LogoutIcon, Cards } from './styles';

import Card from '../../components/Card';

export default function Dashboard() {
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
    </Container>
  )
}
