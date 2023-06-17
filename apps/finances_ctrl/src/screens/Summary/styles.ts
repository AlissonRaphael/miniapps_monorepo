import styled from 'styled-components/native';

import { StatusBarHeightHelper, BottomHeightHelper } from '../../global/statusbar';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background };
`

export const Header = styled.View`
  padding-top: ${StatusBarHeightHelper()}px;
  width: 100%;
  height: 114px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.primary};
`

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.color.shape};
`

export const Content = styled.View`
  padding: 32px;
  flex: 1;
  align-items: center;
`

export const Text = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.color.text};
`
