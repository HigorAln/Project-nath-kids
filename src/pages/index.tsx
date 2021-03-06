import { GetServerSideProps, GetStaticProps } from "next"
import { client } from "../lib/prismic"
import Prismic from 'prismic-javascript'
import {Document} from 'prismic-javascript/types/documents'
import CompHeader from "../components/Header"
import SEO from "../components/SEO"
import Contrast from '../components/Contrast'
import {Seta} from '../styles/pages/home'
import { useEffect, useState } from "react"
import dynamic from 'next/dynamic'
import Cards from "../components/Cards"
import { ThemeProvider } from "styled-components"
import { ThemeDark, ThemeWhite } from "../styles/themes/theme"
import Footer from '../components/Footer'

const Modal = dynamic(
  ()=> import('../components/Modal'),
  {ssr: false}
)
type HomeProps = {
  products: Document[];
}


export default function Home({products}: HomeProps) {
  const [modal, setModal] = useState(false);
  const [tema,setTema]=useState(true);

  useEffect(()=>{
    const valueTheme = localStorage.getItem('USER_THEME')

    if( valueTheme === 'light'){
      setTema(true)
    }
    if(valueTheme === 'dark'){
      setTema(false)
    }
  },[])

  const Pular = ()=>{
    window.scroll(0, ((document.documentElement.scrollTop - 97.3) + window.innerHeight))
  }
  const handleModal = ()=>{
    setModal(!modal)
  }
  return (
    <ThemeProvider theme={tema ? ThemeWhite : ThemeDark}>
    <div>
      <SEO title={`• Nath Kids |  Home •  `}/>
      <CompHeader fun={handleModal} modal={modal} tema={tema} setTema={setTema}/>
      {modal && <Modal fun={handleModal}/>}
      <Contrast />
      <Cards RecommendedProducts={products}/>
      <Seta onClick={Pular}>
        ▼
      </Seta>
    </div>
    </ThemeProvider>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () =>{
  const products = await client().query([
    Prismic.Predicates.at('document.type','product')
  ])
  const contrast = await client().query([
    Prismic.Predicates.at('document.id','YTupcBAAACIA0uMH')
  ])
  const RecommendedProducts = await client().query([
    Prismic.Predicates.at('document.type','recommended')
  ])

  return {
    props : {
      products: products.results,
    }
  }
}