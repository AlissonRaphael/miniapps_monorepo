import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Button = styled(TouchableOpacity).attrs((props) => ({
  ...props,
  activeOpacity: props.activeOpacity || 0.6,
}))`
  border-radius: 6px;
  margin-bottom: 12px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.color.shape};
`

export const Logo = styled.View`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color.background};
  padding: 16px;
`

export const Label = styled.Text`
  flex: 1;
  font-size: 16px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.color.text};
`
