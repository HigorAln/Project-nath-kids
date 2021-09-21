import styled from 'styled-components'

export const DivCard = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 0 0 10px ${({theme}) => theme.shadow};
    transition: all 0.1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    background-color: ${({theme}) => theme.background};

    img{
        width: 95%;
        margin-bottom: 5px;
        border-radius: 10px;
    }
`


export const Title = styled.p`
    font-size: 18px;
    text-align: center;
    letter-spacing: 0.5px;
    font-family: 'Comfortaa';
    padding:20px 0px;
    color:${({theme}) => theme.color};
`
export const Oferta = styled.span`
    width: 100%;
    height: 10%;
    display: grid;
    place-items: center;
    background-color: ${({theme}) => theme.backgroundPromocao};
    color:${({theme}) =>theme.color};
    border-radius: 0 0px 5px 5px;

    p{
        padding: 5px 5px;
        letter-spacing: 3px;
    }
`