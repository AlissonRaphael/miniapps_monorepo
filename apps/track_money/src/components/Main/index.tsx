import { MainStyle } from "./styles"

export function Main() {
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$10.000,00</td>
            <td>Entrada</td>
            <td>20/11/2021</td>
          </tr>

          <tr>
            <td>Despesas gerais</td>
            <td className="withdraw">R$500,00</td>
            <td>Saida</td>
            <td>05/11/2021</td>
          </tr>

          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$10.000,00</td>
            <td>Entrada</td>
            <td>20/11/2021</td>
          </tr>

          <tr>
            <td>Despesas gerais</td>
            <td className="withdraw">R$1.500,00</td>
            <td>Saida</td>
            <td>05/11/2021</td>
          </tr>
        </tbody>
      </table>
    </MainStyle>
  )
}