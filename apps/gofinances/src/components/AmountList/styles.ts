import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

interface ItemProps {
  borderColor: string,
}

interface TypeProps {
  type: 'deposit' | 'withdrawal',
}

export const Container = styled.ScrollView`
  padding: 16px 24px;
  width: 100%;
`

export const Item = styled.View<ItemProps>`
  margin: 4px 0px;
  border-radius: 6px;
  border-left-width: 6px;
  border-left-color: ${(props) => props.borderColor};

  padding: 16px;

  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.shape};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
`

export const Amounts = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
`

export const Icon = styled(FontAwesome).attrs((props) => ({
  ...props,
  size: props.size || 40,
}))<TypeProps>`

  ${({ type }) => type === 'deposit' && css`
    color: ${({ theme }) => theme.colors.success};
  `}

  ${({ type }) => type === 'withdrawal' && css`
    color: ${({ theme }) => theme.colors.attention};
  `}
`

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;

  ${({ type }) => type === 'deposit' && css`
    color: ${({ theme }) => theme.colors.success};
  `}

  ${({ type }) => type === 'withdrawal' && css`
    color: ${({ theme }) => theme.colors.attention};
  `}
`
