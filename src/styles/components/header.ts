import styled from 'styled-components'

export const Header = styled.header`
    position: sticky;
    top:0;
    width:100%;
    height:14vh;
    overflow:hidden;
    display:flex;
    align-items:center;
    box-shadow:0 0 10px ${({theme}) => theme.shadow};
    background-color: ${({theme}) => theme.background};
    z-index:10;
    transition: all 0.5s;



    
`

export const Div = styled.div`
    width:60%;
    display:grid;
    place-items:center;

    h1{
        letter-spacing:4px;
        font-family: 'Comfortaa', cursive;
        text-transform: capitalize;
    }
    @media(max-width: 375px){
        h1{
            font-size: 25px;
        }   
    }
`
export const DivMenu = styled.div`
    width:20%;
    height:100%;
    display:grid;
    place-content: center;
    z-index: 99999;
    
`
export const Span = styled.span`
    h1{
        color:${({theme}) => theme.color};
        cursor: pointer;
        
    }
    a{
        text-decoration: none;
    }

    &::before{
    content:'';
    display:block;
    margin:0 auto;
    background-color:orange;
    width:5px;
    height:5px;
    border-radius:50%;

    @media screen and (max-width:600px){
        margin-left:100px;
        display: none;
    };

    @media screen and (max-width:375px){
        margin-left:50px;
        &::before{
            display: none;
        }
    }
}

`

export const Shopping = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:20%;
    height:100%;

`

export const Imagem = styled.img`
    height:30%;
    cursor:pointer;
    transform:scale(1);
    transition: all .2s;
    margin-right: 20%;
`

export const SpanMenu = styled.span`
    cursor:pointer;
    color:${({theme})=>theme.color};
`
export const SpanMenu2 = styled.span`
    cursor:pointer;
    color:${({theme})=>theme.color};
`
export const c = styled.span`
    cursor:pointer;
`