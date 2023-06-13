import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

import { InputProps } from '.'

export const Input = styled(TextInput)<InputProps>`
  margin-bottom: ${({ error }) => error ? 2 : 8}px;
  border-radius: 5px;
  width: 100%;
  padding: 16px 18px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.light.text_dark};
  background-color: ${({ theme }) => theme.light.shape};

  ${({ error }) => error && css`
    border: 1px solid ${({ theme }) => theme.light.attention}
  `};
`

export const Error = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.light.attention};
  margin-bottom: 8px;
`