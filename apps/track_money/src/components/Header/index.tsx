import { HeaderStyle, ContentStyle, LogoStyle } from './styles'

import logo from '../../assets/logo.png'

interface HeaderProps {
  handleOpenNewTransactionModal: () => void;
}

export function Header({ handleOpenNewTransactionModal }: HeaderProps) {
  return (
    <HeaderStyle>
      <ContentStyle>
        <LogoStyle>
          <img src={logo} alt="logo track money" />
          <span>track <strong>money</strong></span>
        </LogoStyle>
        <button
          type="button"
          onClick={handleOpenNewTransactionModal}
        >
          Nova transação
        </button>
      </ContentStyle>
    </HeaderStyle>
  )
}
