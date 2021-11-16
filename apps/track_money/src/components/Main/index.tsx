import { useContext } from "react"
import { MainStyle } from "./styles"
import { TransactionsContext } from '../../Context'


export function Main() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <MainStyle>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {
            transactions.map(({id, title, amount, type, category, createdAt }) => (
              <tr key={id}>
                <td>{title}</td>
                <td className={type}>
                  { new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(amount) }
                </td>
                <td>{category}</td>
                <td>{ new Intl.DateTimeFormat('pt-BR').format(new Date(createdAt)) }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </MainStyle>
  )
}