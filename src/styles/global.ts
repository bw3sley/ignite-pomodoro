import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }
    
    *, *::before, *::after {
        margin: 0;
        padding: 0;

        box-sizing: border-box;

        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;

        -webkit-font-smoothing: antialiased;
    }

    :focus {
        outline: 0;

        box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
    }

    html, body {
        width: 100%;
        height: 100%;
    }

    body {
        background-color: ${(props) => props.theme['gray-900']};
        color: ${(props) => props.theme['gray-300']};
    }
`
