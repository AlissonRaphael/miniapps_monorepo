import { useState, useEffect, useContext } from "react"
import { api } from "../../services/api"

import { MainStyle } from "./styles"
import { TransactionsContext } from '../../Context'

interface TransactionInterface {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt: Date,
}

export function Main() {
  const data = useContext(TransactionsContext)

  const [transactions, setTransactions] = useState<TransactionInterface[]>([])

  useEffect(() => {
    api.get('/transactions')
    .then(response => setTransactions(response.data))
  }, [])

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