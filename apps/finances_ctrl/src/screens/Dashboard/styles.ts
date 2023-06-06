import styled from 'styled-components/native';
import { FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { StatusBarHeightHelper, BottomHeightHelper } from '../../global/statusbar';

import { TransactionListProps } from '.'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background };
`

export const Header = styled.View`
  padding-top: ${StatusBarHeightHelper() + 36}px;
  width: 100%;
  height: 40%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const Wrapper = styled.View`
  flex-direction: row;
  padding: 0 24px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const User = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Avatar = styled.Image`
  height: 48px;
  width: 48px;
  border-radius: 10px;
`

export const Details = styled.View`
  margin-left: 14px;
`

export const Greeting = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.shape };
  font-family: ${({ theme }) => theme.fonts.regular };
`

export const Name = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.shape };
  font-family: ${({ theme }) => theme.fonts.bold };
`

export const LogoutButton = styled(TouchableOpacity).attrs((props) => ({
  ...props,
  activeOpacity: props.activeOpacity || 0.6,
}))`
  padding: 8px;
  background-color: red;
`

export const LogoutIcon = styled(Ionicons).attrs((props) => ({
  ...props,
  name: 'ios-exit-outline',
  size: 28,
}))`
  color: ${({ theme }) => theme.colors.secondary}
`

export const Cards = styled.ScrollView.attrs((props) => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
}))`
  position: absolute;
  padding-top: ${StatusBarHeightHelper() + 36 + 75 + 26}px;
`

export const History = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: 105px;
`

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular };
`

export const Transactions = styled(
  FlatList as new () => FlatList<ListRenderItem<TransactionListProps>>
).attrs((props) => ({
  ...props,
  showsVerticalScrollIndicator: false
}))`
  margin-top: 8px;
  padding-bottom: ${BottomHeightHelper()}px;
  flex: 1;
`
