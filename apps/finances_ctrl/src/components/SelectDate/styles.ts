import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
  margin-top: 16px;
  width: 100%;
  padding: 0px 28px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled.TouchableOpacity.attrs((props) => ({
  ...props,
  activeOpacity: props.activeOpacity || 0.6,
}))`
  padding: 4px;
`

export const Icon = styled(FontAwesome).attrs((props) => ({
  ...props,
  size: props.size || 18,
}))`
  color: ${({ theme }) => theme.light.title }
`

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.light.title }
`
