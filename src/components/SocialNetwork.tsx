import styled from "styled-components"

const Link = styled.a`
    text-decoration: none;
    width: 200px;
    height: 30%;
    border:1px solid #bbb;
    border-radius: 5px;
    margin: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.color};
    transition: all 0.2s;
    

    &:hover{
        border:0;
        box-shadow: 0 0 25px ${({theme}) =>theme.shadow};
    }
`
const Paragrafo = styled.p`
    letter-spacing: 2px;
    text-transform: capitalize;
    font-size: 20px;
    margin-bottom: 20px;
    font-family: 'Comfortaa', cursive;
    font-weight: 500;

    &::after{
        content: '';
        display: block;
        width: 0%;
        height: 1px;
        background-color:${({theme}) =>theme.color};
        transition: all 0.2s;
    }
    &:hover::after{
        width: 100%;
    }
`

const Imagem = styled.img`
    width: 15%;
    height: 15%;
`
type HomeProps = {
    text: string,
    url: string,
    network: string,
}


export default function SocialNetwork({text, url, network}: HomeProps){
    return(
        <Link href={network} target='_blank'>
            <Paragrafo>{text}</Paragrafo>
            <Imagem src={url} />
        </Link>
    )
}