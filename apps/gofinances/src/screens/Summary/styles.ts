import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { StatusBarHeightHelper, BottomHeightHelper } from '../../global/statusbar';

interface TypeProps {
  type: 'deposit' | 'withdrawal',
}

export const Container = styled.View`
  padding-bottom: ${BottomHeightHelper()}px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background };
`

export const Header = styled.View`
  padding-top: ${StatusBarHeightHelper()}px;

  width: 100%;
  height: 114px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
`

export const Title = styled.Text`
  padding-left: 46px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`

export const AmountButtons = styled.View`
  flex-direction: row;
  align-items: center;
`

export const AmountButton = styled(TouchableOpacity).attrs((props) => ({
  ...props,
  activeOpacity: props.activeOpacity || 0.6,
}))`
  opacity: 0.6;
  margin-left: 8px;
`

export const Icon = styled(FontAwesome).attrs((props) => ({
  ...props,
  size: props.size || 20,
}))<TypeProps>`

  ${({ type }) => type === 'deposit' && css`
    color: ${({ theme }) => theme.colors.success};
  `}

  ${({ type }) => type === 'withdrawal' && css`
    color: ${({ theme }) => theme.colors.attention};
  `}
`
