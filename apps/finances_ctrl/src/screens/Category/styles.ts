import { TouchableOpacity, FlatList, ListRenderItem, Modal, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

import { StatusBarHeightHelper, BottomHeightHelper } from '../../global/statusbar';
import { CategoryType } from '../../global/categories';


export const Container = styled(Modal)`
  margin: 0;
  padding: 0 0 ${BottomHeightHelper()}px 0;
  flex: 1;
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

export const CategoriesList = styled(
  FlatList as new () => FlatList<ListRenderItem<CategoryType>>
).attrs((props) => ({
  ...props,
  showsVerticalScrollIndicator: false
}))`
  flex: 1;
`

interface CategoryItemProps extends TouchableOpacityProps {
  active: boolean,
}

export const CategoryItem = styled(TouchableOpacity).attrs((props) => ({
  ...props,
  activeOpacity: props.activeOpacity || 0.7,
}))<CategoryItemProps>`
  padding: 18px;
  width: 100%;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme, active }) => active ? theme.colors.secondary_light : theme.colors.shape};
`

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.text}
`

export const Icon = styled(FontAwesome).attrs(props => ({
  ...props,
  size: props.size || 26,
}))`
  margin-right: 14px;
`

export const Label = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};
`

export const Footer = styled.View`
  padding: 24px;
`
