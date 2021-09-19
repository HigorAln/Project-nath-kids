import styled from 'styled-components'

export const Page = styled.div`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    flex-direction: column;
    z-index: 0;
    background-color: ${({theme})=>theme.background};
    padding-bottom: 30px;

`
export const Cards = styled.div`
    display: block;
    width: 70%;
    height: 300px;
    margin-top: 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px ${({theme})=>theme.shadow};
    background-color: white;
`

export const Inside = styled.a`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 100%;
`
export const DivImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    

    img{
        width: 80%;
        height: 80%;
        border-radius: 10px 0px 0px 10px;
    }
`
export const DivInfo = styled.div`
    display: grid;
    padding-left:10px;
    padding-top: 10px;
    background-color: ${({theme})=> theme.backgroundCard};

    h2{
        padding-left: 10%;
        font-family: 'Comfortaa';
        font-weight: 300;
    }
    p{
        font-size: 20px;
        color:gray;
    }
    span{
        color:black;
        font-weight: bold;
    }
    div{
        display: flex;
        margin-left: -10px;
        justify-content: space-evenly;
    }


`
export const Button = styled.button`
    width: 40%;
    height: 80%;
    border:1px solid #ccc;
    letter-spacing: 3px;
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.2s;
    box-sizing: content-box;
    color: ${ ({theme}) => theme.backgroundPromocao};
    background: white;

    &:hover{
        box-shadow:0 0 10px #bbb;
    }
`
export const SeeMore = styled.button`
    width: 80%;
    height:30px;
    margin-top: 30px;
    border:1px solid #ccc;
    border-radius: 3px;
    background: transparent;
    cursor: pointer;
    transition: all 0.2s;

    &:hover{
        filter: opacity(50%);
    }
`

export const Footer = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: ${({theme}) => theme.backgroundFooter};

    a{
        text-decoration: none;
        color: currentColor;

        &:hover{
            color: ${({theme})=>theme.links}
        }
    }

    li{
        font-size: 18px;
        font-family: "Comfortaa";
        padding: 3px;

    }
`