import styled from 'styled-components'

export const Page = styled.div`
    width: 100%;
    height: 86vh;
    transition: all 0.5s;
    display: flex;
    justify-content: center;
    align-items:center;    
    background-color:${({theme})=>theme.background};
`
export const Div = styled.div`
    width: 85%;
    height: 50%;
    line-height: 2.0;
    font-size: 55px;
    text-align: center;
    font-family: "Comfortaa";
    font-weight: 500;
    color:${({theme}) => theme.color};
    span{
        display: block;
        text-align: center;
        font-family: "Comfortaa";
    }
`