import styled from 'styled-components'

export const FormStyle = styled.form`
  h2 {
    margin-bottom: 2rem;
    color: var(--text-title);
    font-size: 1.5rem;
  }

  input {
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    height: 4rem;
    padding: 0 1.5rem;
    width: 100%;
    background-color: #e7e9ee;
    font-size: 1rem;
    font-weight: 400;

    & + input {
      margin-top: 1rem;
    }

    &::placeholder {
      color: var(--text-body);
    }
  }

  button[type="submit"] {
    margin-top: 1.5rem;
    border: 0;
    border-radius: 0.25rem;
    height: 4rem;
    padding: 0 1.5rem;
    width: 100%;
    background-color: var(--green);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const InOutStyle = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface RadioButtonProps {
  isActive: boolean,
  color: 'green' | 'red'
}

const colors = {
  green: 'rgba(51,204,149,0.2)',
  red: 'rgba(229,46,77,0.3)'
}

export const RadioButtonStyle = styled.button<RadioButtonProps>`
  border: 1px solid #d4d4d4;
  border-radius: 0.25rem;
  height: 4rem;
  background-color: ${(props) => props.isActive ? colors[props.color] : '#e7e9ee' };
  display: flex;
  align-items: center;
  justify-content: center;

  transition: border 0.3s;
  animation: ${(props) => props.isActive ? 'loop .6s alternate infinite linear' : 'none' };

  &:hover {
    border: 1px solid #b4b4b4;
  }

  img {
    height: 20px;
    width: 20px;
  }

  span {
    margin-left: 1rem;
    display: inline-block;
    font-size: 1rem;
    color: var(--text-title);
  }

  @keyframes loop {
    from {filter: brightness(1)}
    to {filter: brightness(1.07)}
  }
`