import { useCallback, useState } from 'react';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';

import { Container, Header, Title, Form, Fields, Types } from './styles';
import schema from './schema';

import { $transactions } from '../../global/storage';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Type from '../../components/Type';
import Select from '../../components/Select';
import Category, { CategoryType } from '../Category';

interface NavigationProps {
  navigate: (value: string) => void,
}

export default function Register () {
  const [type, setType] = useState<string>("")
  const [category, setCategory] = useState<CategoryType | null>(null)

  const { control, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) })
  const navigation = useNavigation<NavigationProps>()

  const [categoryModalIsOpen, setCategoryModalIsOpen] = useState<boolean>(false)

  const handleReset = useCallback(() => {
    setType('')
    setCategory(null)
    reset()
  }, [])

  const handleCategoryModalClose = useCallback((category: CategoryType) => {
    setCategory(category)
    setCategoryModalIsOpen(false)
  }, [])

  const handleCategoryModalOpen = useCallback(() => {
    setCategoryModalIsOpen(true)
  }, [])

  const handleOnSubmit = useCallback(async (model: FieldValues) => {
    if (['', undefined, null].includes(type)) {
      alert('Selectione o tipo da transação')
      return;
    }

    if (!category) {
      alert('Selectione uma categoria para essa transação')
      return;
    }

    try {
      const transactions = JSON.parse(await AsyncStorage.getItem($transactions) || "[]")
      const transaction = { id: String(uuid.v4()), ...model, category, type, date: new Date() }
      transactions.push(transaction)
      await AsyncStorage.setItem($transactions, JSON.stringify(transactions))
      handleReset()
      navigation.navigate('Transações')
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível cadastrar')
    }
  }, [category, type, handleSubmit])

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
