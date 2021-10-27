import styled from 'styled-components'

export const SummaryStyle = styled.div`
  margin-top: -10rem;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 2rem;

  div {
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2.5rem;
      font-weight: 500;
      line-height: 3rem;
    }

    :last-child {
    background-color: var(--green);

    }
  }
`