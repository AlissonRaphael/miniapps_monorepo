import { Container, Title, Amount, Footer, Description, Icon, Category, TransactionDate } from "./style"

interface Category {
  name: string,
  icon: string,
}

interface TransactionProps {
  data: {
    title: string,
    amount: number,
    category: Category,
    date: Date,
  }
}

export default function Transaction ({ data }: TransactionProps) {
  const { title, amount, category, date } = data

  const formmatedDate = new Intl.DateTimeFormat('pt-BR',
    { year: "numeric", month: "long", day: "numeric", }
  ).format(date)

  const formmatedAmount = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
  ).format(amount)

  return (
    <Container>
      <Title>{title}</Title>
      <Amount type="deposit">{formmatedAmount}</Amount>
      <Footer>
        <Description>
          <Icon name={category.icon}/>
          <Category>{category.name}</Category>
        </Description>
        <TransactionDate>{formmatedDate}</TransactionDate>
      </Footer>
    </Container>
  )
}
