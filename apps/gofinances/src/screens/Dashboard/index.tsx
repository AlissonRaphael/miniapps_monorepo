import React from 'react';

import { Container, Header, Wrapper, User, Avatar, Details, Greeting, Name, LogoutIcon, Cards } from './styles';

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
      </Cards>
    </Container>
  )
}
