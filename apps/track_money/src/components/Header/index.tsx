import { HeaderStyle, ContentStyle } from './styles'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderStyle>
      <ContentStyle>
        <img src={logo} style={{ height: '50px' }} alt="logo track money" />
        <button type="button">Nova transação</button>
      </ContentStyle>
    </HeaderStyle>
  )
}
