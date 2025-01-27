import styled from "styled-components";

export const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0A0E3A;
    height: 100vh;
    width: 100vw;

    img {
        height: auto;
    }

    @media screen and (max-width: 600px) {
        img {
            width: 140px;
        }
    }
`


