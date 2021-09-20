import styled from 'styled-components'
import {Span} from '../components/header'


export const Modal = styled.div`
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height:100vh;
    z-index: 9999;
    display:grid;
    grid-template-columns:  15% 70% 15%;
    grid-template-rows: 100%;
    background-color:${({theme}) => theme.background};
    transition: all 0.5s;

`

export const Menu = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:14vh;
    display:flex;
    transition: all 0.5s;

    div{
        width:20%;

        display:grid;
        place-items:center;
    }
`

export const Empty = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    overflow: visible;
`
export const EmptySpan = styled(Span)`
    border-left:1px solid #000;
    //border-bottom:1px solid #000;
    margin-left: 200px;
    line-height:1.7em;
    font-size:40px;
    user-select:none;
    color:${({theme}) => theme.color};

    @media(max-width: 880px){
        h1{
            display:none;
        }
        ::before{
            display:none;
        }
    }
`

export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    text-align: center;
    transition: all 0.5s;

    a{
        text-decoration: none;
        color:currentColor;
    }
    h1{
        font-size:75px;
        letter-spacing: 5px;
        cursor:pointer;
        font-family: 'Comfortaa', cursive;
        font-weight:lighter;
        color:${({theme}) => theme.color};
    }
    h1:hover{
        filter:opacity(70%);
    }
    h1:active{
        filter: opacity(100%);
    }

    h1::after{ 
        pointer-events: none;
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        margin: 10px auto;
        background-color:#aaa;
        border-radius: 50px;
    }


    @media(max-width: 375px){
        h1{
            font-size: 40px;
        };
        h1::after{
            height:2px;
            width: 320px;
            
        };
        h1:hover{
           filter:none;
        }
    }
`
export const Footer = styled.div`
    width:60%;
    display:flex;
    justify-content: space-evenly;
    margin-top:20px;
    color:${({theme})=> theme.color};

    span{
        font-size: 18px;
        cursor: pointer;
        letter-spacing: 2px;
        font-family: 'Comfortaa', cursive;
        color:${({theme}) => theme.color};
    }
    span:hover{
        filter: opacity(70%);
    }
    span:active{
        filter: opacity(100%);
    }

    @media(max-width: 375px){
        flex-direction: column;
        margin-top:50px;
        
        span{
            margin-bottom: 5px;
        }
    }
`   

export const Recommended = styled.div`

`   