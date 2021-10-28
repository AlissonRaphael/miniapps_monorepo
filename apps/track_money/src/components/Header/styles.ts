import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: var(--dark-salmon);
`

export const ContentStyle = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: 0;
    border-radius: 0.25rem;
    height: 3rem;
    padding: 0 2rem;
    font-size: 1rem;
    background-color: var(--light-purple);

    transition: filter 0.3s;

    &:hover {
      filter: brightness(1.1);
    }
  }
`