import styled from 'styled-components'

export const Page = styled.div`
    height: 86vh;
    background-color: ${({theme}) => theme.background};
    display:flex;
    z-index: 0;

    @media screen and (max-width:600px){
        flex-direction: column;
        align-items: center;
    }
`
export const DivEsquerda = styled.div`
    width:50%;
    height:100%;
    display:grid;
    place-items:center;
    text-align: center;

    h1{
        letter-spacing: 1px;
        font-family: 'Comfortaa', cursive;
        text-transform: capitalize;
        color:${({theme}) =>theme.color};
    }
    @media screen and (max-width:600px){
        width: 100%;
        font-size: 16px;
        height: 60%;
        margin-bottom: -20%;
    }
`
export const DivDireita = styled.div`
    width: 50%;
    height: 100%;
    display: grid;
    place-items: center;
    margin-right: 10px;

    img{
        box-shadow:0 0 10px ${({theme}) => theme.shadow};
        
    }
    @media screen and (max-width:600px){
        width: 100%;
        width:80%;
        margin-right: 0;
    }
`