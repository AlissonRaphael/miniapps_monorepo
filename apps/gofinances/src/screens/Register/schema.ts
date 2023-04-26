import * as yup from 'yup';

export default yup.object().shape({
  name: yup
    .string()
    .required('Esse campo é obrigatório'),
  amount: yup
    .number()
    .typeError('Insira um valor numérico')
    .positive('Valor da transação não pode ser negativo')
    .required('Esse campo é obrigatório')
})
