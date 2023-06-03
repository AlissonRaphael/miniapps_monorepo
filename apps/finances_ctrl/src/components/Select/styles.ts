import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled(TouchableOpacity).attrs((props) => ({
  ...props,
  activeOpacity: props.activeOpacity || 0.7,
}))`
  margin-top: 8px;
  border-radius: 5px;
  padding: 18px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.shape};
`

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Icon = styled(FontAwesome).attrs(props => ({
  ...props,
  size: props.size || 20,
}))`
  margin-right: 8px;
`

interface TitleProps {
  selected: boolean,
}

export const Title = styled.Text<TitleProps>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, selected }) => selected ? theme.colors.text_dark : theme.colors.text};
`

export const Chevron = styled(FontAwesome).attrs((props) => ({
  ...props,
  name: props.name || "chevron-down",
}))`
  color: ${({ theme }) => theme.colors.text};
`
