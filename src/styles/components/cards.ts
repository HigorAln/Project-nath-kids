import styled from 'styled-components'

export const DivPg1 = styled.div`
    height: 86vh;
    width: 100%;
    background-color: ${({theme})=>theme.background};
    border:0;
`
export const DivCards = styled.div`
    width: 20%;
    height: 70%;
    transform:scale(0.9);
    box-shadow: 0 0 10px ${({theme}) => theme.shadow};
    transition: all 0.1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    background-color: ${({theme}) => theme.background};

    &:hover{
        transform: scale(1);
    }

    img{
        width: 95%;
        margin-bottom: 5px;
        border-radius: 10px;
    }

    @media screen and (max-width:600px){
        width: 80%;
        height: 60%;
    }
    @media screen and (max-width:1090px){
        width: 30%;
        transform: scale(1);
    }
    @media screen and (max-width:850px){
        width: 300px;
  
    }
    @media screen and (max-width:620px){
        width: 400px;
        height: 400px;
    }
    @media screen and (max-width:440px){
        width: 250px;
        height: 300px;
    }
    
    
`

export const Cartas = styled.div`
    width: 100%;
    height: 84%;
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    background-color: ${({theme})=>theme.background};
    
    @media screen and (max-width:600px){
         flex-direction:column;
         height: 240%;
    }
   
    @media screen and (max-width:850px){
        flex-wrap:wrap;
    }
    @media screen and (max-width:620px){
        flex-direction:column;
        flex-wrap:nowrap;
        height: 240vh;
    }

`

export const SpacePg2 = styled.div`
    width: 100%;
    height:16%;
    background-color: ${({theme}) => theme.backgroundPurple};
    display:grid;
    place-items: center;
    border-radius: 20px;
    
    
    h1{
        text-transform: capitalize;
        letter-spacing: 2px;
        font-family: 'Comfortaa', Arial, Helvetica, sans-serif;
        color:${({theme}) => theme.color};
        
        @media screen and (max-width:600px){
            font-size:25px;
        }
    }
    h1::after{
        content: '';
        display:block;
        width: 70%;
        height: 1px;
        background-color: currentColor;
        margin: 0 auto;
    }
`

