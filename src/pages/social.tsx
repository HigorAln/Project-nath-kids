import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeDark, ThemeWhite } from "../styles/themes/theme";
import dynamic from "next/dynamic";
import CompHeader from "../components/Header";
import {
    Page,
} from '../styles/pages/social'
import SocialNetwork from "../components/SocialNetwork";
import SEO from "../components/SEO";

const Modal = dynamic(
    ()=> import('../components/Modal'),
    {ssr: false}
  )


export default function Social(){
    //////////////////////////////////
    const [tema,setTema]=useState(true);
    const [modal, setModal] = useState(false)
    const handleModal = ()=>{
        setModal(!modal)
    }
    useEffect(()=>{
        const valueTheme = localStorage.getItem('USER_THEME')
    
        if( valueTheme === 'light'){
          setTema(true)
        }
        if(valueTheme === 'dark'){
          setTema(false)
        }
      },[])
    //////////////////////////////////
    const facebook = tema ? '/facebook_black.png' : '/facebook_white.png'
    const instagram = tema ? '/instagram_black.png' : '/instagram_white.png'
    const telegram = tema ? './telegram_black.svg' : '/telegram_white.svg'
    const whatsapp = tema ? './whatsapp_black.svg' : '/whatsapp_white.svg'
    const gmail = tema ? './email_black.png' : '/email_white.png'
    return(
        <ThemeProvider theme={tema ? ThemeWhite : ThemeDark}>
            <SEO title={`• Nath Kids |  Social NetWork •  `}/>
            <CompHeader fun={handleModal} modal={modal} tema={tema} setTema={setTema}/>
            {modal && <Modal fun={handleModal}/>}

            <Page>
                <SocialNetwork text={`facebook`} url={facebook} network="https://www.facebook.com/natalia.rayanne.3"/>
                <SocialNetwork text={`instagram`} url={instagram} network='https://www.instagram.com/nataliarayanne16/'/>
                <SocialNetwork text={`telegram`} url={telegram} network='http://telegram.com/'/>
                <SocialNetwork text={`whatsapp`} url={whatsapp} network='https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F5581989704654&e=ATNGdmVdi2RNEF8qSTZgb3AyHxNwIyGYOqfmMyhMOASFmgDEJBdY6gNukOqRDNCAgKh_Ngi2HbfilMecBOXpFQ&s=1'/>
                <SocialNetwork text={`gmail`} url={gmail} network='http://gmail.com'/>
            </Page>


        </ThemeProvider>
    )
}