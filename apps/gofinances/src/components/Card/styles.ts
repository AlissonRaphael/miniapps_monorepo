import styled, { css } from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

interface TypeProps {
  type: 'deposit' | 'withdrawal' | 'total',
}

export const Container = styled.View<TypeProps>`
  width: 300px;
  border-radius: 5px;
  padding: 19px 23px 42px 19px;
  margin-right: 16px;

  background-color: ${({ type, theme }) =>
    type === 'total' ? theme.colors.secondary : theme.colors.shape
  };
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;

  color: ${({ type, theme }) =>
    type === 'total' ? theme.colors.text_invert : theme.colors.text
  };
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

  ${({ type }) => type === 'total' && css`
    color: ${({ theme }) => theme.colors.shape};
  `}
`

export const Footer = styled.View``

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 38px;
  margin-top: 38px;

  color: ${({ type, theme }) =>
    type === 'total' ? theme.colors.text_light : theme.colors.text_dark
  };
`

export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;

  color: ${({ type, theme }) =>
    type === 'total' ? theme.colors.text_invert : theme.colors.text
  };
`
