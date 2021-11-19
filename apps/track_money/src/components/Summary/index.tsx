import { useContext } from "react"

import Money from '../../assets/monetization_on_black_24dp.svg'
import ArrowCircle from '../../assets/arrow_circle_black_24dp.svg'
import { svgFilter } from "../../styles/svg-filters"

import { SummaryStyle } from "./styles"
import { TransactionsContext } from "../../Context"


export function Summary(){
  const { transactions } = useContext(TransactionsContext)

  const summaryTransactions = transactions.reduce((total, transaction) => {
    if (transaction.type === 'deposit') total.deposit += transaction.amount
    if (transaction.type === 'withdraw') total.withdraw += transaction.amount

    return total
  },  { deposit: 0, withdraw: 0 })

  return (
    <SummaryStyle>
      <div>
        <header>
          <p>Entradas</p>
          <img src={ArrowCircle} style={svgFilter.upArrow} alt="Entradas de dinheiro"/>
        </header>
        <strong>
          {
            new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
              .format(summaryTransactions.deposit)
          }
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={ArrowCircle} style={svgFilter.downArrow} alt="Saidas de dinheiro"/>
        </header>
        <strong>
          {
            `-${new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
              .format(summaryTransactions.withdraw)}` 
          }
        </strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={Money} style={svgFilter.money} alt="Dinheiro total"/>
        </header>
        <strong>
          {
            `${new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
              .format(summaryTransactions.deposit-summaryTransactions.withdraw)}` 
          }
        </strong>
      </div>

    </SummaryStyle>
  )
}
