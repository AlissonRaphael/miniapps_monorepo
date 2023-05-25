import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


export const Container = styled.View`
  flex: 1;
`

export const Top = styled.View`
  height: 65%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const Bottom = styled.View`
  height: 35%;
  background-color: ${({ theme }) => theme.colors.secondary};
`

export const LogoContainer = styled.View`
  margin-top: 20%;
`

export const Logo = styled(MaterialIcons).attrs((props) => ({
  ...props,
  name: "monetization-on",
  size: props.size || 65,
}))`
  align-self: center;
  color: ${({ theme }) => theme.colors.secondary};
`

export const Name = styled.View`
  flex-direction: row;
  align-items: baseline;
`

export const ItalicText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
  font-style: italic;
`

export const BoldText = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shape};
`

export const Title = styled.Text`
  padding: 24px 32px;
  font-size: 34px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`

export const Text = styled.Text`
  padding: 0px 108px;
  font-size: 18px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`

export const Button = styled(TouchableOpacity).attrs((props) => ({
  ...props,
  activeOpacity: props.activeOpacity || 0.6,
}))`
  margin: 12px 32px;
  border: 1px solid ${({ theme }) => theme.colors.background};
  padding: 12px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 6px;
`

export const ButtonTitle = styled.Text`
  flex: 1;
  font-size: 14px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`
