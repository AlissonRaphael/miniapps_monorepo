import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Button = styled(TouchableOpacity).attrs((props) => ({
  ...props,
  activeOpacity: props.activeOpacity || 0.6,
}))`
  border-radius: 5px;
  width: 100%;
  padding: 18px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.secondary};
`

export const Label = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.color.shape};
`
