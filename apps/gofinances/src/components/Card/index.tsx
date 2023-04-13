import React, { useEffect, useState } from 'react';

import { Container, Header, Title, Icon, Footer, Amount, LastTransaction } from './styles';

interface Props {
  type: 'deposit' | 'withdrawal' | 'total',
  amount: number,
  lastTransaction: Date,
}

const TYPE = {
  deposit: { title: 'Entrada', icon: 'arrow-circle-up' },
  withdrawal: { title: 'Saída', icon: 'arrow-circle-down' },
  total: { title: 'Total', icon: 'dollar' },
}

export default function Card ({ type, amount, lastTransaction }: Props) {
  const formmatedLastTransaction = new Intl.DateTimeFormat('pt-BR',
    'pt-BR',
    { year: "numeric", month: "long", day: "numeric", }
  ).format(lastTransaction)

  const formmatedAmount = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
    { style: 'currency', currency: 'BR' }
  ).format(amount)

  return (
    <Container type={type}>
      <Header>
        <Title>{TYPE[type].title}</Title>
        <Icon name={TYPE[type].icon} type={type} />
      </Header>

      <Footer>
        <Amount>{formmatedAmount}</Amount>
        <LastTransaction>Última entrada {formmatedLastTransaction}</LastTransaction>
      </Footer>
    </Container>
  )
}