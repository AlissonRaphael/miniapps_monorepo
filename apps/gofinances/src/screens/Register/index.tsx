import { Container, Header, Title, Form, Fields, Types } from "./styles";

import Input from '../../components/Input';
import Button from '../../components/Button';
import Type from "../../components/Type";
import { useState } from "react";

export default function Register () {
  const [transactionType, setTransactionType] = useState<string>("")

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

          <Types>
            <Type
              type="deposit"
              onPress={() => setTransactionType("deposit")}
              checked={transactionType === "deposit"}
            />
            <Type
              type="withdrawal"
              onPress={() => setTransactionType("withdrawal")}
              checked={transactionType === "withdrawal"}
            />
          </Types>

        </Fields>

        <Button label="Cadastrar" />
      </Form>

    </Container>
  )
}