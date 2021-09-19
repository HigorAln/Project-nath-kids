import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import CompHeader from '../../components/Header';
import SEO from '../../components/SEO';
import { ThemeDark, ThemeWhite } from '../../styles/themes/theme';
import Prismic from 'prismic-javascript'
import PrimiscDOM from 'prismic-dom'
import { client } from '../../lib/prismic';
import {Document} from 'prismic-javascript/types/documents'
import Link from 'next/link'
import Image from 'next/image'
import {
    Page,
    Cards,
    Button,
    Inside,
    DivImage,
    SeeMore,
    DivInfo,
    Footer,

} from '../../styles/pages/vestidos'

const Modal = dynamic(
    ()=> import('../../components/Modal'),
    {ssr: false}
)

type HomeProps = {
    data: Document[]
}


export default function Vestidos({data}:HomeProps){
    ////////////////////////////////////////
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
    /////////////////////////////////////////
    const vestidos = data.filter((e)=>{
        return e.data.category.slug === "vestidos"
    })

    const [atual,setAtual] = useState(2)    
    const [fixo] = useState(2)
    const [ButtonMore,setButtonMore]= useState(true)

    const mostrar = vestidos.slice(0 , atual)

    const HandleClick = ()=>{
        setAtual(atual + fixo);

        if(mostrar.length >= vestidos.length){
            setButtonMore(false)
        }
}
    return(
        <ThemeProvider theme={tema ? ThemeWhite : ThemeDark}>
            <SEO title={`• Nath Kids |  Vestidos •  `}/>
            <CompHeader fun={handleModal} modal={modal} tema={tema} setTema={setTema}/>
            {modal && <Modal fun={handleModal}/>}
            
            
            <Page>
                {mostrar.map(value => {
                    return(
                        <>
                        <Cards key={value.id}>
                                <Inside>
                                    <DivImage>
                                        <Image src={value.data.trumbnail.url} width={400} height={400}  />
                                    </DivImage>
                                    <DivInfo>
                                        <h2>{PrimiscDOM.RichText.asText(value.data.title)}</h2>
                                        <p>Price: <span>{value.data.price}</span></p>
                                        <p>Description:<br/> {PrimiscDOM.RichText.asText(value.data.description)}</p>
                                        <div>
                                            <Link href={`/products/${value.uid}`}>
                                                <Button color="#fff">Look more</Button>
                                            </Link>
                                            <Button>Add to cart</Button>
                                        </div>
                                    </DivInfo>
                                </Inside>
                        </Cards>
                        </>
                    )
                })}
                
                {ButtonMore && 
                <SeeMore onClick={HandleClick}>{tema? 
                    <span className="material-icons-outlined">add</span> 
                    : 
                    <span className="material-icons-outlined" style={{color:'white'}}>add</span>}
                </SeeMore>
                }
            </Page>
            <Footer>
                <div>
                    <Link href='/'><a><li>Home</li></a></Link>
                    <Link href='/categories/vestidos'><a><li>Vestidos</li></a></Link>
                    <Link href='/categories/conjuntos'><a><li>Conjunto</li></a></Link>
                    <Link href='/contact'><a><li>Contact</li></a></Link>
                    <Link href='/social'><a><li>Social Networks</li></a></Link>
                </div>
                <div>
                    <Link href='/credits'><a><li>Designer</li></a></Link>
                    <Link href='/credits'><a><li>Desenveloper</li></a></Link>
                    <Link href='/credits'><a><li>Production</li></a></Link>
                </div>
            </Footer>

        </ThemeProvider>
    )
}

export const getStaticProps: GetStaticProps = async ()=>{
    const data = await client().query([
        Prismic.Predicates.at('document.type','product')
    ])
    
    return {
        props: {
            data: data.results,
        }
    }
}
