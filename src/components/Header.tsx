import { Div, Header, Imagem, Shopping, Span, DivMenu, SpanMenu, SpanMenu2} from '../styles/components/header'
import Link from 'next/link'




export default function CompHeader({fun,modal,tema,setTema}){
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
                    <Link href='/'><a><h1>Nath Kids</h1></a></Link>
                </Span>
            </Div>
            <Shopping>
                {tema ? <Imagem onClick={handleTheme} src={LightTurnOn} /> : <Imagem onClick={handleTheme} src={LightTurnOff} />}
                {/* {tema ? <Imagem src={Url} /> : <Imagem src={UrlDark} />} */}
            </Shopping>
        </Header>
    )
}