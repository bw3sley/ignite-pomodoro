import styled from 'styled-components'

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
