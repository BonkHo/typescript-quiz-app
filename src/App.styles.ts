import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/img.jpg";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Noto Sans JP', sans-serif;
    }

    html {
        height: 100%;
    }

    body {
        /* background-image: url(${BGImage}); */
        background-size: cover;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: black;
    }

    .score {
        color: black;
        font-size: 2rem;
        margin: 1em;
    }

    .h1 {
        color: black;
        font-family: "Noto Sans JP", sans-serif;
        -moz-text-fill-color: transparent;
        font-size: 70px;
        font-weight: 400;
        text-align: center;
    }

    .start,
    .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #00ffb3);
        border: 2px solid black;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 35px;
        margin: 1em 0;
    }

    .start {
        max-width: 200px;
    }
`;
