import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  height: 70%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const Footer = styled.View`
  height: 30%;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: relative;
`

export const Logo = styled(MaterialIcons).attrs((props) => ({
  ...props,
  name: "monetization-on",
  size: props.size || 65,
}))`
  margin-top: 25%;
  align-self: center;
  color: ${({ theme }) => theme.colors.secondary};
`

export const Text = styled.View`
  flex-direction: row;
  align-items: baseline;
`

export const Italic = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
  font-style: italic;
`

export const Bold = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shape};
`

export const Title = styled.Text`
  margin-top: 32px;
  padding: 0px 32px;
  font-size: 34px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`

export const Message = styled.Text`
  margin-top: 48px;
  padding: 0px 108px;
  font-size: 18px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`

export const Buttons = styled.View`
  padding: 0px 38px;
  position: absolute;
  top: -30px;
  left: 0;
  width: 100%;
`
