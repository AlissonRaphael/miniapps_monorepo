import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`

export const Content = styled.View`
  padding: 32px;
  flex: 1;
  align-items: center;
`

export const Text = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.color.text};
`