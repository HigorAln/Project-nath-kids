import { Div, Header, Imagem, Shopping, Span, DivMenu, SpanMenu, SpanMenu2} from '../styles/components/header'
import dynamic from 'next/dynamic'
import {setCookie} from 'nookies'




export default function CompHeader({fun,modal,tema,setTema}){
    const Url = '/shopping_cart.svg'
    const UrlDark = '/shopping_cart_white.svg'
    const LightTurnOff = '/light_white.svg'
    const LightTurnOn = '/light_turnon.png'


    const handleTheme = ()=>{
        setTema(!tema)
        
        if(tema){
            localStorage.setItem('USER_THEME','dark')
        }else{
            localStorage.setItem('USER_THEME','light')
        }
    }

    return(
        <Header>
            <DivMenu>

            {modal ? <SpanMenu onClick={fun} className="material-icons-outlined">menu_open</SpanMenu>
            :
                <SpanMenu2 onClick={fun} className="material-icons-outlined">menu</SpanMenu2>
            }
            </DivMenu>

            
            <Div>
                <Span>
                    <h1>Nath Kids</h1>
                </Span>
            </Div>
            <Shopping>
                {tema ? <Imagem onClick={handleTheme} src={LightTurnOn} /> : <Imagem onClick={handleTheme} src={LightTurnOff} />}
                {/* {tema ? <Imagem src={Url} /> : <Imagem src={UrlDark} />} */}
            </Shopping>
        </Header>
    )
}