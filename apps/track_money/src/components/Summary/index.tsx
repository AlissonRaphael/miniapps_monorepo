import { useContext } from "react"
import { SummaryStyle } from "./styles"
import { TransactionsContext } from "../../Context"
import Money from '../../assets/monetization_on_black_24dp.svg'
import ArrowCircle from '../../assets/arrow_circle_black_24dp.svg'
import { svgFilter } from "../../styles/svg-filters"

export function Summary(){
  const data = useContext(TransactionsContext)

  return (
    <SummaryStyle>
      <div>
        <header>
          <p>Entradas</p>
          <img src={ArrowCircle} style={svgFilter.upArrow} alt="Entradas de dinheiro"/>
        </header>
        <strong>R$ 1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={ArrowCircle} style={svgFilter.downArrow} alt="Saidas de dinheiro"/>
        </header>
        <strong>R$ -600,00</strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={Money} style={svgFilter.money} alt="Dinheiro total"/>
        </header>
        <strong>R$ 400,00</strong>
      </div>

    </SummaryStyle>
  )
}
