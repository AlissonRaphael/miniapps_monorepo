import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
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

export const Title = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`

export const Icon = styled(FontAwesome)`
  color: ${({ theme }) => theme.colors.text};
`
