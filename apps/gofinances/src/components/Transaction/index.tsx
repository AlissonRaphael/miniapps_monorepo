import { Container, Title, Amount, Footer, Description, Icon, Category, TransactionDate } from "./style"

export default function Transaction () {
  const formmatedDate = new Intl.DateTimeFormat('pt-BR',
    { year: "numeric", month: "long", day: "numeric", }
  ).format(new Date(Date.now()))

  const formmatedAmount = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
  ).format(11382)

  return (
    <Container>
      <Title>Desenvolvimento</Title>
      <Amount type="deposit">{formmatedAmount}</Amount>
      <Footer>
        <Description>
          <Icon name="dollar"/>
          <Category>Trabalho</Category>
        </Description>
        <TransactionDate>{formmatedDate}</TransactionDate>
      </Footer>
    </Container>
  )
}
