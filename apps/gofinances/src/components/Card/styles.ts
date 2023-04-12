import styled, { css } from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
  background-color: ${({ type, theme: { colors: { shape, success_light } } }) => type === 'total' ? success_light : shape};
  width: 300px;
  border-radius: 5px;
  padding: 19px 23px 42px 19px;
  margin-right: 16px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
`

export const Icon = styled(FontAwesome).attrs((props) => ({
  ...props,
  size: props.size || 40,
}))`
  ${({ type }) => type === 'deposit' && css`color: ${({ theme }) => theme.colors.success};`}
  ${({ type }) => type === 'withdrawal' && css`color: ${({ theme }) => theme.colors.attention};`}
  ${({ type }) => type === 'total' && css`color: ${({ theme }) => theme.colors.shape};`}
`

export const Footer = styled.View``

export const Amount = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 38px;
  margin-top: 38px;
`

export const LastTransaction = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
`
