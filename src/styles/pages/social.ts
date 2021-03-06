import styled from "styled-components";

export const Page = styled.div`
    height: 86vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: ${({theme}) => theme.background};
    transition: all 0.5s;

    @media screen and (max-width:600px){
        height: 100% ;
    }
`