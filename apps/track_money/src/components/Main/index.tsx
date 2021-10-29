import { useState, useEffect } from "react"
import { api } from "../../services/api"

import { MainStyle } from "./styles"

interface TransactionInterface {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt: Date,
}

export function Main() {
  const [transactions, setTransactions] = useState([])

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
            transactions.map(({id, title, amount, type, category, createdAt }: TransactionInterface) => {
              return (
                <tr key={id}>
                  <td>{title}</td>
                  <td className={type}>{`R$ ${amount}`}</td>
                  <td>{category}</td>
                  <td>{createdAt}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </MainStyle>
  )
}