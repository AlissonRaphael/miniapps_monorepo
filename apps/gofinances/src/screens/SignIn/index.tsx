import React from 'react';

import Apple from '../../assets/apple.svg';
import Google from '../../assets/google.svg';

import {
  Container,
  Top,
  Bottom,
  LogoContainer,
  Logo,
  Name,
  ItalicText,
  BoldText,
  Title,
  Text,
} from './styles';

export default function SignIn ({}) {
  return (
    <Container>
      <Top>
        <LogoContainer>
          <Logo />
          <Name>
            <ItalicText>finances</ItalicText>
            <BoldText>Ctrl</BoldText>
          </Name>
        </LogoContainer>

        <Title>Controle suas finanças de forma muito simples</Title>
        <Text>Faça seu login com uma das contas abaixo</Text>
      </Top>

      <Bottom>
      </Bottom>
    </Container>
  )
}
