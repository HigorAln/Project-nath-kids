import styled from 'styled-components'

export const Body = styled.div`
    padding-top:05%;
    width:100%;
    height:86vh;
    display:grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 70% 30%;
    background-color: ${({theme}) => theme.background};

    @media screen and (max-width: 375px){
        grid-template-columns: 100%;
        grid-template-rows: 50% 50%;
        height:100vh;

    }
`
export const AreaPhoto = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    @media screen and (max-width: 375px){
       margin-bottom:-50px;


    }
`
export const Imagem = styled.img`
    width:70%;
    transform:scale(1);
    transition: all .4s ease-in;
    box-shadow: 0 0 10px ${({theme}) => theme.shadow};
    border-radius: 25px;
    &:hover{
        transform:scale(1)
    }
    @media screen and (max-width: 375px){
        width:90%;
        transform:scale(1);

        &:hover{
            transform:scale(1);
        }
    }
`
export const SoldAreaDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

`
export const Paragrafo = styled.p`
    font-size: 35px;
    margin-bottom:20px;
    letter-spacing:2px;
    color:${({theme}) => theme.color};

    @media screen and (max-width: 375px){
       font-size:25px;
    }
`
export const Paragrafo2 = styled.p`
    font-size: 25px;
    font-family:Arial;
    letter-spacing:1px;
    color:${({theme}) => theme.color};

`
export const Paragrafo3 = styled.p`
    font-size: 20px;
    text-align: center;
    letter-spacing:1px;
    margin-bottom:20px;
    color:${({theme}) => theme.color};

`
export const DivRadius = styled.div`
    display:flex;
    width:150px;
    justify-content:space-between;
    margin-bottom:30px;
    color:${({theme}) => theme.color};

`
export const DivButton = styled.div`
    width:30%;
    height:10%;
    display:flex;
    justify-content:space-around;
    align-items:center;

    button{
        width:40%;
        height:100%;
        border:0.5px solid rgba(200, 200, 200, 1);
        cursor:pointer;
        background-color:rgba(230, 230, 230, 0.8);
        border-radius:5px;
        transition: all .2s;

        &:hover{
            box-shadow: 0 0 13px #555;
        }
    }
    @media screen and (max-width: 375px){
        width:100%;
        
        button{
            width:40%;
            height:50px;
            letter-spacing:1px;
            border:0;
            border-radius:10px;
            margin-top:20px;
        }
    }
`
export const Button = styled.button`
    background-color: ${({theme}) => theme.background};

    
`


export const InputCEP = styled.input`
    width:80%;
    height:30px;
    letter-spacing:3px;
    padding-left:10px;
    border:1px solid #000000;
    border-radius: 5px;
    outline:none;


    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
    }
    @media screen and (max-width: 375px){
        border:0;
        border-bottom:1px solid #000;
    }
    
`

export const DivCep = styled.div`
    width:300px;
    margin-bottom:30px; 

    button{
        width:20%;
        height:100%;
    }

    @media screen and (max-width: 375px){
        button{
            border:0;
        }
    }
    
`

export const DivPrice = styled.div`
    margin-bottom:30px;
    font-family: 'Ubuntu';
    color:${({theme}) => theme.color};

    span{
        color:${({theme}) => theme.color};
        font-size:30px;
    };

    p{
        letter-spacing:1px;
        font-size:15px;
        color:${({theme}) => theme.color};
    }
`