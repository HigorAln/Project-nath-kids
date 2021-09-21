import styled from 'styled-components'

export const Page = styled.div`
    width: 100%;
    height: 86vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.background};
    transition: all 0.5s;
`

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    width:60%;
    height:80%;
    padding: 5px;

    h1{
        font-family: 'Comfortaa', cursive;
        color:${({theme}) => theme.color};
        margin-bottom: 20px;
    }

    
    input, textarea{
        padding: 10px;
        font-family: 'Comfortaa', cursive;
        margin-bottom: 20px;
        outline: none;
        border:1px solid gray;
        border-radius: 5px;
        background-color: ${({theme})=> theme.backgroundInput};
        color:${({theme}) => theme.color};
    }
    input::placeholder, textarea::placeholder{
        color:${({theme}) => theme.color}
    }

    button{
        width: 25%;
        height: 5vh;
        margin: 0 auto;
        border:1px solid gray;
        border-radius: 10px;
        letter-spacing: 2px;
        font-family: 'Comfortaa', cursive;
        transition: all 0.2s;
        cursor: pointer;
        background-color: ${({theme}) => theme.background};
        color:${({theme}) => theme.color};

        &:hover{
            border:0;
            box-shadow: 0 0 25px ${({theme}) => theme.shadow};
        }
        @media screen and (max-width:600px){
        }
    }

    @media screen and (max-width:600px){
        width: 95%;
        height:100%;
        justify-content:center;
        
        input, textarea{
            font-size: 18px;
            padding:20px
        }
        h1{
            font-size: 20px;
            text-align: center;
        }
    }
`