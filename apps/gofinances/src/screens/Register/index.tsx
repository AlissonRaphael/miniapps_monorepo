import { Container, Header, Title, Form, Fields } from "./styles";

import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Register () {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input
            placeholder="Nome"
          />

          <Input
            placeholder="Preço"
          />

        </Fields>

        <Button label="Cadastrar" />
      </Form>

    </Container>
  )
}