import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0rem;
    padding: 0rem;
    box-sizing: border-box;
}

:root{
    font-size: 62.5%;
}

body{
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
}

body,input, button,textarea{
    font-family: 'Poppins', 'Roboto';
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;

    -webkit-font-smoothing: antialiased;
    color:${({ theme }) => theme.COLORS.LIGHT_100};
}
`;
