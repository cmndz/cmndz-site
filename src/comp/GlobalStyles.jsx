import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: "Raleway", sans-serif;

        --color-w01: #ffffff;
        --color-w02: #f0f0f0;
        --color-b01: #000000;
        --laterales: 20px;

        scroll-behavior: smooth;

        
        
    }
    *::-webkit-scrollbar {
        display: none;
        color: var(--black);
    }
    h1 {
        font-size: 36px;
        font-weight: 800;
    }
    h2 {
        font-size: 32px;
        font-weight: 600;
    }

    h3 {
        font-size: 24px;
        font-weight: 700;
    }
    h4 {
        font-size: 24px;
        font-weight: 400;
    }
    h5 {
        font-size: 20px;
        font-weight: 600;
    }
    .--text-nofill{
        color: var(--color-w01);
        text-shadow: 1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
    }
    h6 {
        font-size: 12px;
        font-weight: 600;
    }
    p {
        font-size: 16px;
        font-weight: 500;
        line-height: 30px;
    }
    a:link,
    a:visited,
    a:active {
        text-decoration: none;
        color: var(--black);
    }
    ul {
        margin: 5px 0 0 25px;
    }

`;
