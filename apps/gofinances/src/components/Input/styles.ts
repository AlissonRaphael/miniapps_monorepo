import { TextInput } from 'react-native';
import styled from "styled-components/native";

export const Input = styled(TextInput)`
  margin-bottom: 8px;
  border-radius: 5px;
  width: 100%;
  padding: 16px 18px;

  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};
  background-color: ${({ theme }) => theme.colors.shape};
`