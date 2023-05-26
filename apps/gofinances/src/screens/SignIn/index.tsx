import React from 'react';

import Apple from '../../assets/apple.svg';
import Google from '../../assets/google.svg';
import SocialButton from '../../components/SocialButton';

import {
  Container,
  Header,
  Footer,
  Logo,
  Text,
  Italic,
  Bold,
  Title,
  Message,
  Buttons
} from './styles';

export default function SignIn ({}) {
  return (
    <Container>
      <Header>
        <Logo />
        <Text>
          <Italic>finances</Italic>
          <Bold>Ctrl</Bold>
        </Text>

        <Title>Controle suas finanças de forma muito simples</Title>
        <Message>Faça seu login com uma das contas abaixo</Message>
      </Header>

      <Footer>
        <Buttons>
          <SocialButton
            name="Entrar com Google"
            icon={Google}
            onPress={() => console.log('google')}
          />
          <SocialButton
            name="Entrar com Apple"
            icon={Apple}
            onPress={() => console.log('apple')}
          />
        </Buttons>
      </Footer>
    </Container>
  )
}
