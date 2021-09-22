import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import CompHeader from "../components/Header";
import SEO from "../components/SEO";
import { ThemeDark, ThemeWhite } from "../styles/themes/theme";
import {
    Page,
    Div,
} from '../styles/pages/credits'
import { GetStaticProps } from "next";


const Modal = dynamic(
    ()=> import('../components/Modal'),
    {ssr: false}
)


export default function Credits (){
    /* Header */
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
    })
    return(
        <ThemeProvider theme={tema ? ThemeWhite : ThemeDark}>
            <SEO title={`• Nath Kids |  Contact •  `}/>
            <CompHeader fun={handleModal} modal={modal} tema={tema} setTema={setTema}/>
            {modal && <Modal fun={handleModal}/>}

            <Page>
                <Div>
                    Creator and developer:
                    <span>Higor Allan</span>
                </Div>
            </Page>
        </ThemeProvider>
    )
}

export const getStaticProps: GetStaticProps = async ()=>{
    return{
        props:{
            
        }
    }
}