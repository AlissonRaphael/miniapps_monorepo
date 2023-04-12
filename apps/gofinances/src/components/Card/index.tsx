import React, { useEffect, useState } from 'react';

import { Container, Header, Title, Icon, Footer, Amount, LastTransaction } from './styles';

interface Props {
  type: 'deposit' | 'withdrawal' | 'total',
  amount: number,
  lastTransaction: Date,
}

const TYPE = {
  deposit: { title: 'Total', icon: 'dollar' },
  withdrawal: { title: 'Entrada', icon: 'arrow-circle-up' },
  total: { title: 'Saída', icon: 'arrow-circle-down' }
}

export default function Card ({ type, amount, lastTransaction }: Props) {
  const formmatedLastTransaction = new Intl.DateTimeFormat(
    'pt-BR',
    { year: "numeric", month: "long", day: "numeric", }
  ).format(lastTransaction)

  const formmatedAmount = new Intl.NumberFormat(
    'pt-BR',
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