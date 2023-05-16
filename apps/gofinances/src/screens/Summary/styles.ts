import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { StatusBarHeightHelper, BottomHeightHelper } from '../../global/statusbar';

interface TypeProps {
  type: 'deposit' | 'withdrawal',
}

export const Container = styled.View`
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
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`
