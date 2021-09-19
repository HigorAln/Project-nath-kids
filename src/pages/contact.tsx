import { GetStaticProps } from "next"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import CompHeader from "../components/Header";
import { ThemeDark, ThemeWhite } from "../styles/themes/theme";
import {
    Page,
    Formulario,
}from '../styles/pages/contact'
import SEO from "../components/SEO";

const Modal = dynamic(
    ()=> import('../components/Modal'),
    {ssr: false}
  )

export default function Contact(){
    /////////////////////////////////////
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
    const [name, setName] = useState('')
    const [assunt, setAssunt] = useState('')
    const [description, setDescription] = useState('')
    
      const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch('http://localhost:3002/send-email',{
            method:"POST",
            headers: {
                Accept: 'aplication/json',
                "Content-type": 'application/json'
            },
            body: JSON.stringify({name, assunt, description})
        })

        const json = await response.json()
        console.log(json)

        setName('')
        setAssunt('')
        setDescription('')
    }
      


    return(
        <ThemeProvider theme={tema ? ThemeWhite : ThemeDark}>
            <SEO title={`• Nath Kids |  Contact •  `}/>
            <CompHeader fun={handleModal} modal={modal} tema={tema} setTema={setTema}/>
            {modal && <Modal fun={handleModal}/>}

            <Page>
                <Formulario onSubmit={handleSubmit} method='post' action='/send-email'>
                    <h1>Fill in so we can get in touch with you</h1>
                    <input 
                        type='text' 
                        placeholder='your first name and second name' 
                        min='10' 
                        max='25' 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <input 
                        type='text' 
                        placeholder='assunt' 
                        max='60' 
                        min='10'
                        value={assunt}
                        onChange={(e)=>setAssunt(e.target.value)}
                    />
                    <textarea 
                        cols="30" 
                        rows="8" 
                        minLength={10} 
                        maxLength={255} 
                        placeholder='Write here! (255)'
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    />
                    <button>Send</button>
                </Formulario>
            </Page>
        </ThemeProvider>
    )
}