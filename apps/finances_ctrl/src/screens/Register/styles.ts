import styled from 'styled-components/native';

import { StatusBarHeightHelper, BottomHeightHelper } from '../../global/statusbar';


export const Container = styled.View`
  padding-bottom: ${BottomHeightHelper()}px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background };
`

export const Header = styled.View`
  padding-top: ${StatusBarHeightHelper()}px;

  width: 100%;
  height: 114px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
`

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;

  justify-content: space-between;
`

export const Fields = styled.View``

export const Types = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`