import React from 'react';

import { Container, Header, Title, Icon, Footer, Amount, LastTransaction } from './styles';

export default function Card () {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name='arrow-up-circle-outline' />
      </Header>

      <Footer>
        <Amount>R$ 10.300,00</Amount>
        <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
      </Footer>
    </Container>
  )
}