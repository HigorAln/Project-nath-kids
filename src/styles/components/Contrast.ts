import styled from 'styled-components'

export const Page = styled.div`
    height: 86vh;
    background-color: ${({theme}) => theme.background};
    display:flex;
    z-index: 0;
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
`
export const DivDireita = styled.div`
    width: 50%;
    height: 100%;
    display: grid;
    place-items: center;

    img{
        box-shadow:0 0 10px ${({theme}) => theme.shadow};
    }
`