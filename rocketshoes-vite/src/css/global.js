import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

body{ 
    background-color: #191920;
    -webkit-font-smoothing: antialiased;}

body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600
}

button{ 
    border: 0;
    cursor: pointer;
        transition: .2s filter;
    &:hover {
        filter: brightness(0.9)
    }
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

a{
    color: inherit;
    text-decoration: none;
}
`