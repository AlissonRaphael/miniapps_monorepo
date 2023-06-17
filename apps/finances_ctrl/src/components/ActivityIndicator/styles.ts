import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Indicator = styled(ActivityIndicator).attrs((props) => ({
  size: 'large',
  ...props,
}))`
  color: ${({ theme }) => theme.color.secondary };
`
