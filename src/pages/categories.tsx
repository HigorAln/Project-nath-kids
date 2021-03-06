import { ThemeProvider } from 'styled-components';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import CompHeader from '../components/Header';
import { ThemeDark, ThemeWhite } from '../styles/themes/theme';
import {
    Page,
    CardCategoriesVestidos,
    CardCategoriesConjuntos,
    Model,
    Container,
    Hidden,
    ModelHidden,
} from '../styles/pages/categories'
import { GetStaticProps } from 'next';
import { client } from '../lib/prismic';
import Prismic from 'prismic-javascript'
import { Document } from 'prismic-javascript/types/documents'
import Link from 'next/link'
import Footer from '../components/Footer'


const Modal = dynamic(
    ()=> import('../components/Modal'),
    {ssr: false}
)

type HomeProps = {
    products: Document[],
}

export default function Categories({products}: HomeProps){
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

    
    const vestidos = products.filter((e)=>{
        return e.data.category.slug === "vestidos"
    })
    const conjuntos = products.filter((e)=>{
        return e.data.category.slug === 'conjuntos'
    })
    return(
        <ThemeProvider theme={tema ? ThemeWhite : ThemeDark}>
            <SEO title={`• Nath Kids |  Contact •  `}/>
            <CompHeader fun={handleModal} modal={modal} tema={tema} setTema={setTema}/>
            {modal && <Modal fun={handleModal}/>}

            <Page>
                <CardCategoriesVestidos>
                    <Link href='/categories/vestidos'>
                        <Model>
                            <h2>Dresses</h2>
                            <img src={vestidos[2].data.trumbnail.url}/>
                        </Model>
                    </Link>
                    {/* <Container id='hidden'>
                        <Hidden>
                            <ModelHidden><img src={vestidos[2].data.trumbnail.url} /></ModelHidden>
                            <ModelHidden><img src={vestidos[3].data.trumbnail.url} /></ModelHidden>
                            <ModelHidden><img src={vestidos[4].data.trumbnail.url} /></ModelHidden>
                        </Hidden>
                    </Container> */}
                </CardCategoriesVestidos>
                <CardCategoriesConjuntos>
                    <Link href='/categories/conjuntos'>
                        <Model>
                            <h2>Sets</h2>
                            <img src={conjuntos[1].data.trumbnail.url} />
                        </Model>
                    </Link>
                    {/* <Container id='hidden-2'>
                        <Hidden>
                            <ModelHidden><img src={conjuntos[1].data.trumbnail.url} /></ModelHidden>
                            <ModelHidden><img src={conjuntos[0].data.trumbnail.url} /></ModelHidden>
                            <ModelHidden><img src={conjuntos[1].data.trumbnail.url} /></ModelHidden>
                        </Hidden>
                    </Container> */}
                </CardCategoriesConjuntos>
            </Page>
            <Footer />
        </ThemeProvider>
    )
}

export const getStaticProps: GetStaticProps<HomeProps> = async ()=>{
    const products = await client().query([
        Prismic.Predicates.at('document.type','product')
      ])
    
    return {
        props :{
            products: products.results
        }
    }
}