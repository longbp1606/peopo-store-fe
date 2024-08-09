import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Inter', 'SVN-Poppins', Arial, Helvetica, sans-serif;
        font-size: 1.6rem;
        line-height: 1.5;

        overflow: unset;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;

        ${({ theme }) => theme.breakpoints.down('md')} {
            -webkit-tap-highlight-color: transparent;
        }
    }
`;

export default GlobalStyles;