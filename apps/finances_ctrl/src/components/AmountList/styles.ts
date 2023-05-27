import styled, { css } from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

interface ItemProps {
  borderColor: string,
}

interface TypeProps {
  type: 'deposit' | 'withdrawal',
}

export const Container = styled.ScrollView`
  width: 100%;
`

export const Item = styled.View<ItemProps>`
  margin: 4px 24px;
  border-radius: 6px;
  border-left-width: 6px;
  border-left-color: ${(props) => props.borderColor};

  padding: 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
`

export const Amounts = styled.View`
  align-items: space-between;
`

export const Amount = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const Text = styled.Text`
  font-size: 14px;
  margin-right: 8px;
`

export const Icon = styled(FontAwesome).attrs((props) => ({
  ...props,
  size: props.size || 14,
}))<TypeProps>`

  ${({ type }) => type === 'deposit' && css`
    color: ${({ theme }) => theme.colors.success};
  `}

  ${({ type }) => type === 'withdrawal' && css`
    color: ${({ theme }) => theme.colors.attention};
  `}
`
