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
    type === 'total' ? theme.color.secondary : theme.color.shape
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
    type === 'total' ? theme.color.text_invert : theme.color.text
  };
`

export const Icon = styled(FontAwesome).attrs((props) => ({
  ...props,
  size: props.size || 40,
}))<TypeProps>`

  ${({ type }) => type === 'deposit' && css`
    color: ${({ theme }) => theme.color.success};
  `}

  ${({ type }) => type === 'withdrawal' && css`
    color: ${({ theme }) => theme.color.attention};
  `}

  ${({ type }) => type === 'total' && css`
    color: ${({ theme }) => theme.color.shape};
  `}
`

export const Footer = styled.View``

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 40px;
  margin-top: 42px;

  color: ${({ type, theme }) =>
    type === 'total' ? theme.color.text_light : theme.color.text_dark
  };
`

export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;

  color: ${({ type, theme }) =>
    type === 'total' ? theme.color.text_invert : theme.color.text
  };
`
