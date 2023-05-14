import styled from 'styled-components/native';

interface ItemProps {
  borderColor: string,
}

export const Container = styled.ScrollView`
  padding: 16px 24px;
  width: 100%;
`

export const Item = styled.View<ItemProps>`
  margin: 4px 0px;
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

export const Amount = styled.Text`
  font-size: 14px;
  margin-right: 8px;
`
