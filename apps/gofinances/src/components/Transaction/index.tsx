import { Container, Title, Amount, Footer, Description, Icon, Category, TransactionDate } from './style';

interface Category {
  id: string;
  name: string,
  color: string,
  icon: string,
}

export interface TransactionItemProps {
  name: string,
  type: 'deposit' | 'withdrawal',
  category: Category,
  amount: number,
  date: Date,
}

interface TransactionProps {
  data: TransactionItemProps
}

export default function Transaction ({ data }: TransactionProps) {
  const { name, type, category, amount, date } = data

  const formmatedDate = new Intl.DateTimeFormat('pt-BR',
    { year: "numeric", month: "long", day: "numeric", }
  ).format(new Date(date))

  const formmatedAmount = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
  ).format(amount)

  return (
    <Container>
      <Title>{name}</Title>
      <Amount type={type}>
        {type === 'deposit' ? '+' : '-'}{formmatedAmount}
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
