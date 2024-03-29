import styled, { css } from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

interface TypeProps {
  type: 'deposit' | 'withdrawal',
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.color.shape};
  border-radius: 6px;
  padding: 18px 24px;
  margin-bottom: 16px;
`

export const Title = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const Amount = styled.Text<TypeProps>`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 2px;

  ${({ type }) => type === 'deposit' && css`
    color: ${({ theme }) => theme.color.success};
  `}

  ${({ type }) => type === 'withdrawal' && css`
    color: ${({ theme }) => theme.color.attention};
  `}
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const Description = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Icon = styled(FontAwesome).attrs((props) => ({
  ...props,
  size: props.size || 20
}))<TypeProps>`

  ${({ type }) => type === 'deposit' && css`
    color: ${({ theme }) => theme.color.success};
  `}

  ${({ type }) => type === 'withdrawal' && css`
    color: ${({ theme }) => theme.color.attention};
  `}
`

export const Category = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.color.text};
  margin-left: 10px;
`

export const TransactionDate = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.color.text};
`
