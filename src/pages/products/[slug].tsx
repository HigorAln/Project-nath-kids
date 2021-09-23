import { GetStaticPaths, GetStaticProps } from "next"
import { client } from "../../lib/prismic"
import { Document } from 'prismic-javascript/types/documents'
import { useRouter } from "next/dist/client/router"
import PrismicDOM from 'prismic-dom'
import CompHeader from "../../components/Header"
import SoldArea from "../../components/SoldArea"
import SEO from "../../components/SEO"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { ThemeProvider } from "styled-components"
import { ThemeDark, ThemeWhite } from "../../styles/themes/theme"
import Footer from '../../components/Footer'
import Prismic from 'prismic-javascript';

const Modal = dynamic(
    ()=> import('../../components/Modal'),
    {ssr: false}
  )
  

type HomeProps = {
    product: Document,
}

export default function Product({product}: HomeProps){
    const [tema,setTema]=useState(true);
    const router = useRouter()
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
    if(router.isFallback){
        return <p>Loading...</p>
    }

    
    return(
        <ThemeProvider theme={tema ? ThemeWhite : ThemeDark}>
        <div>
            <SEO title={`• Nath Kids • `} description={`${PrismicDOM.RichText.asText(product.data.title)}`}/>
            <CompHeader fun={handleModal} modal={modal} tema={tema} setTema={setTema}/>
            {modal && <Modal fun={handleModal}/>}
            <SoldArea
                title={PrismicDOM.RichText.asText(product.data.title)}
                description={PrismicDOM.RichText.asText(product.data.description)}
                imagem={product.data.trumbnail.url}
                imagem2={product.data.trumbnail2.url}
                price={product.data.price}
            />
        </div>
        <Footer />
        </ThemeProvider>
    )
}
export const getStaticPaths: GetStaticPaths = async () => {
    const product = await client().query([
        Prismic.Predicates.at('document.type', 'products')
    ])
    const valor = product.results;

    const paths = valor.map(value =>{ 
        return {params : {slug: String(value.data.uid)}}
    })

    return {
        paths,
        fallback: true,
    }
}
export const getStaticProps: GetStaticProps<HomeProps> = async (context)=>{
    const { slug } = context.params;

    const product = await client().getByUID('product', String(slug), {});

    return {
        props: {
          product,
        },
        revalidate: 10,  /* Usado para dizer para o next  que acada 5 segundos a informações dessa pagina precisa ser
            cahamda novamente como requisição para saber se alterou algo*/
    }
 }
