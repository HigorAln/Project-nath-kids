import { Div, Header, Imagem, Shopping, Span, DivMenu, SpanMenu, SpanMenu2} from '../styles/components/header'
import dynamic from 'next/dynamic'




export default function CompHeader({fun,modal,tema,setTema}){
    const Url = '/shopping_cart.svg'
    const UrlDark = '/shopping_cart_white.svg'
    const LightTurnOff = '/light_white.svg'
    const LightTurnOn = '/light_turnon.png'

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
                {tema ? <Imagem onClick={()=>setTema(!tema)} src={LightTurnOn} /> : <Imagem onClick={()=>setTema(!tema)} src={LightTurnOff} />}
                {tema ? <Imagem src={Url} /> : <Imagem src={UrlDark} />}
            </Shopping>
        </Header>
    )
}