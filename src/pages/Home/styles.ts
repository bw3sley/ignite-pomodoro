import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5.6rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  color: ${(props) => props.theme['gray-100']};

  font-size: 1.8rem;
  font-weight: bold;
`

const BaseInput = styled.input`
  background-color: transparent;
  color: ${(props) => props.theme['gray-100']};

  height: 4rem;

  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;

  padding: 0 0.8rem;

  &:focus {
    box-shadow: none;

    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 6.4rem;
`

export const CountdownContainer = styled.div`
  color: ${(props) => props.theme['gray-100']};

  line-height: 12.8rem;

  display: flex;
  gap: 1.6rem;

  span {
    font-family: 'Roboto Mono', monospace;
    font-size: 16rem;
    line-height: 12.8rem;

    padding: 3.2rem 1.6rem;

    border-radius: 8px;

    background-color: ${(props) => props.theme['gray-700']};
  }
`

export const Separator = styled.div`
  padding: 3.2rem 0;

  color: ${(props) => props.theme['green-500']};

  width: 6.4rem;

  font-family: 'Roboto Mono', monospace;
  font-size: 16rem;

  overflow: hidden;

  display: flex;
  justify-content: center;
`

export const StartCountdownButton = styled.button`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  border: 0;
  border-radius: 8px;

  padding: 1.6rem;

  font-weight: bold;

  cursor: pointer;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:disabled {
    opacity: 0.7;

    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`
