import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background };
`

export const Header = styled.View`
  width: 100%;
  height: 40%;
  align-items: center;
  justify-content: center;

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

export const LogoutIcon = styled(Ionicons).attrs((props) => ({
  ...props,
  name: 'ios-exit-outline',
  size: 28,
}))`
  color: ${({ theme }) => theme.colors.secondary}
`