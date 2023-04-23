import { useCallback, useState } from "react";
import { Modal } from "react-native";

import { Container, Header, Title, Form, Fields, Types } from "./styles";

import Input from '../../components/Input';
import Button from '../../components/Button';
import Type from "../../components/Type";
import Select from "../../components/Select";

import Category, { CategoryType } from "../Category";

export default function Register () {
  const [transactionType, setTransactionType] = useState<string>("")
  const [category, setCategory] = useState<CategoryType>()

  const [categoryModalIsOpen, setCategoryModalIsOpen] = useState<boolean>(false)

  const handleCategoryModalClose = useCallback(category => {
    setCategory(category)
    setCategoryModalIsOpen(false)
  }, [])

  const handleCategoryModalOpen = useCallback(() => {
    setCategoryModalIsOpen(true)
  }, [])

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

          <Select title="Category" onPress={handleCategoryModalOpen} />
        </Fields>

        <Button label="Cadastrar" />
      </Form>
      <Category
        visible={categoryModalIsOpen}
        onSelect={handleCategoryModalClose}
        value={category}
      />
    </Container>
  )
}
