import { Main } from "../Main"
import { Summary } from "../Summary"
import { DashboardStyle } from "./styles"

export function Dashboard () {
  return (
    <DashboardStyle>
      <Summary/>
      <Main/>
    </DashboardStyle>
  )
}
