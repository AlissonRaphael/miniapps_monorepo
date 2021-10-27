import { SummaryStyle } from "./styles"
import ArrowCircle from '../../assets/arrow_circle_black_24dp.svg'
import Money from '../../assets/monetization_on_black_24dp.svg'


const upArrow = {
  height: '30px',
  filter: `invert(76%) sepia(36%) saturate(444%)
          hue-rotate(108deg) brightness(88%) contrast(92%)`,
  transform: 'rotate(-90deg)'
}

const downArrow = {
  height: '30px',
  filter: `invert(21%) sepia(98%) saturate(6644%)
          hue-rotate(342deg) brightness(89%) contrast(92%)`,
  transform: 'rotate(90deg)'
}

const money = {
  height: '30px',
  filter: `invert(100%)`,
}

export function Summary(){
  return (
    <SummaryStyle>
      <div>
        <header>
          <p>Entradas</p>
          <img src={ArrowCircle} style={upArrow} alt="Entradas de dinheiro"/>
        </header>
        <strong>R$ 1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={ArrowCircle} style={downArrow} alt="Saidas de dinheiro"/>
        </header>
        <strong>R$ -600,00</strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={Money} style={money} alt="Dinheiro total"/>
        </header>
        <strong>R$ 400,00</strong>
      </div>

    </SummaryStyle>
  )
}
