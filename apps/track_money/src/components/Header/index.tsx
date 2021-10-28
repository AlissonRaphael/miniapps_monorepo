import { HeaderStyle, ContentStyle, LogoStyle } from './styles'

import logo from '../../assets/logo.png'

export function Header() {
  return (
    <HeaderStyle>
      <ContentStyle>
        <LogoStyle>
          <img src={logo} alt="logo track money" />
          <span>track <strong>money</strong></span>
        </LogoStyle>
        <button type="button">Nova transação</button>
      </ContentStyle>
    </HeaderStyle>
  )
}
