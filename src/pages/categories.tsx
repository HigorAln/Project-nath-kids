import { ThemeProvider } from 'styled-components';
import dynamic from 'next/dynamic';
import { useState } from 'react';
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
import Image from 'next/image'


const Modal = dynamic(
    ()=> import('../components/Modal'),
    {ssr: false}
)

type HomeProps = {
    products: Document[],
}

export default function Categories({products}: HomeProps){
    ////////////////////////////////////////
    const [tema,setTema]=useState(true);
    const [modal, setModal] = useState(false)
    const handleModal = ()=>{
        setModal(!modal)
      }
    ////////////////////////////////////////
    const vestidos = products.filter((e)=>{
        return e.data.category.slug === "vestidos"
    })
    const conjuntos = products.filter((e)=>{
        return e.data.category.slug === 'conjuntos'
    })

    const handleOver = ()=>{
        document.getElementById('hidden').style.opacity='0.5';
    }
    const handleOut = ()=>{
        document.getElementById('hidden').style.opacity='0';
    }
    const handleOver2 = ()=>{
        document.getElementById('hidden-2').style.opacity='0.5';
    }
    const handleOut2 = ()=>{
        document.getElementById('hidden-2').style.opacity='0';
    }
    console.log(vestidos[2].data.trumbnail.url)
    return(
        <ThemeProvider theme={tema ? ThemeWhite : ThemeDark}>
            <SEO title={`• Nath Kids |  Contact •  `}/>
            <CompHeader fun={handleModal} modal={modal} tema={tema} setTema={setTema}/>
            {modal && <Modal fun={handleModal}/>}

            <Page>
                <CardCategoriesVestidos>
                    <Link href='/categories/vestidos'>
                        <Model onMouseOver={handleOver} onMouseOut={handleOut}>
                            <h2>Vestidos</h2>
                            <img src={vestidos[2].data.trumbnail.url}/>
                        </Model>
                    </Link>
                    <Container id='hidden'>
                        <Hidden>
                            <ModelHidden><img src={vestidos[2].data.trumbnail.url} /></ModelHidden>
                            <ModelHidden><img src={vestidos[3].data.trumbnail.url} /></ModelHidden>
                            <ModelHidden><img src={vestidos[4].data.trumbnail.url} /></ModelHidden>
                        </Hidden>
                    </Container>
                </CardCategoriesVestidos>
                <CardCategoriesConjuntos>
                    <Link href='/categories/conjuntos'>
                        <Model onMouseOver={handleOver2} onMouseOut={handleOut2}>
                            <h2>Conjuntos</h2>
                            <img src={conjuntos[1].data.trumbnail.url} />
                        </Model>
                    </Link>
                    <Container id='hidden-2'>
                        <Hidden>
                            <ModelHidden><img src={conjuntos[1].data.trumbnail.url} /></ModelHidden>
                            <ModelHidden><img src={conjuntos[0].data.trumbnail.url} /></ModelHidden>
                            <ModelHidden><img src={conjuntos[1].data.trumbnail.url} /></ModelHidden>
                        </Hidden>
                    </Container>
                </CardCategoriesConjuntos>
            </Page>

        </ThemeProvider>
    )
}

export const getStaticProps: GetStaticProps = async ()=>{
    const products = await client().query([
        Prismic.Predicates.at('document.type','product')
      ])
    
    return {
        props :{
            products: products.results
        }
    }
}