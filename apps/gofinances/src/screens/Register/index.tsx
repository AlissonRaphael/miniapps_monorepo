import { useCallback, useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { useForm, FieldValues } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { Container, Header, Title, Form, Fields, Types } from "./styles";

import Input from '../../components/Input';
import Button from '../../components/Button';
import Type from "../../components/Type";
import Select from "../../components/Select";
import Category, { CategoryType } from "../Category";

import schema from "./schema";

export default function Register () {
  const [type, setType] = useState<string>("")
  const [category, setCategory] = useState<CategoryType>()

  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

  const [categoryModalIsOpen, setCategoryModalIsOpen] = useState<boolean>(false)

  const handleCategoryModalClose = useCallback((category: CategoryType) => {
    setCategory(category)
    setCategoryModalIsOpen(false)
  }, [])

  const handleCategoryModalOpen = useCallback(() => {
    setCategoryModalIsOpen(true)
  }, [])

  const handleOnSubmit = useCallback((model: FieldValues) => {
    if (['', undefined, null].includes(type)) {
      alert('Selectione o tipo da transação')
      return;
    }

    if (!category) {
      alert('Selectione uma categoria para essa transação')
      return;
    }

    console.log({...model, category, transactionType})
  }, [category, transactionType, handleSubmit])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <Input
              name="name"
              placeholder="Nome"
              autoCapitalize="sentences"
              control={control}
              error={errors.name?.message}
            />

            <Input
              name="amount"
              placeholder="Preço"
              keyboardType="numeric"
              control={control}
              error={errors.amount?.message}
            />

            <Types>
              <Type
                type="deposit"
                onPress={() => setType("deposit")}
                checked={type === "deposit"}
              />
              <Type
                type="withdrawal"
                onPress={() => setType("withdrawal")}
                checked={type === "withdrawal"}
              />
            </Types>

            <Select
              placeholder="Category"
              onPress={handleCategoryModalOpen}
              category={category}
            />
          </Fields>

          <Button label="Cadastrar" onPress={handleSubmit(handleOnSubmit)}/>
        </Form>
        <Category
          visible={categoryModalIsOpen}
          onSelect={handleCategoryModalClose}
          value={category}
        />
      </Container>
    </TouchableWithoutFeedback>

  )
}
