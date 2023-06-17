import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

import { TypeFormProps } from '.';

interface TypeProps {
  type: 'deposit' | 'withdrawal',
}

export const Container = styled(TouchableOpacity).attrs((props) => ({
  ...props,
  activeOpacity: props.activeOpacity || 0.6,
}))<TypeFormProps>`
  margin: 8px 0;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.text};
  width: 49%;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ checked, type }) => type === 'deposit' && checked && css`
    background-color: ${({ theme }) => theme.color.success_light};
    border: none;
  `}

  ${({ checked, type }) => type === 'withdrawal' && checked && css`
    background-color: ${({ theme }) => theme.color.attention_light};
    border: none;
  `}
`

export const Icon = styled(FontAwesome).attrs((props) => ({
  ...props,
  size: props.size || 30,
}))<TypeProps>`
  margin-right: 12px;

  ${({ type }) => type === 'deposit' && css`
    color: ${({ theme }) => theme.color.success};
  `}

  ${({ type }) => type === 'withdrawal' && css`
    color: ${({ theme }) => theme.color.attention};
  `}
`

export const Title = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
`