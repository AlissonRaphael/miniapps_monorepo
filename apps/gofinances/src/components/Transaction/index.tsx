import { Container, Title, Amount, Footer, Description, Icon, Category, TransactionDate } from "./style"

interface Category {
  name: string,
  icon: string,
}

interface Transaction {
  title: string,
  type: 'deposit' | 'withdrawal',
  category: Category,
  amount: number,
  date: Date,
}

interface Props {
  data: Transaction
}

export default function Transaction ({ data }: Props) {
  const { title, type, category, amount, date } = data

  const formmatedDate = new Intl.DateTimeFormat('pt-BR',
    { year: "numeric", month: "long", day: "numeric", }
  ).format(date)

  const formmatedAmount = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
  ).format(amount)

  return (
    <Container>
      <Title>{title}</Title>
      <Amount type={type}>
        {type === 'deposit' ? '+' : '-' }{formmatedAmount}
      </Amount>
      <Footer>
        <Description>
          <Icon name={category.icon} type={type}/>
          <Category>{category.name}</Category>
        </Description>
        <TransactionDate>{formmatedDate}</TransactionDate>
      </Footer>
    </Container>
  )
}
