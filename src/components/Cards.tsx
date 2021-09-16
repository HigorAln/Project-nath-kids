import { GetServerSideProps } from 'next'
import {
    Cartas,
    DivPg1,
    SpacePg2,
    DivCards,
}from '../styles/components/cards'
import ComponentCard from './ComponentCard'
import PrismicDOM from 'prismic-dom'
import Link from 'next/link'
import {Document} from 'prismic-javascript/types/documents'

type HomeProps = {
    RecommendedProducts: Document[];
}

export default function Cards({RecommendedProducts}: HomeProps) {
    return(
        <DivPg1>
            <SpacePg2>
                <h1>Oferta da semana</h1>
            </SpacePg2>
            <Cartas>
                {RecommendedProducts.map((e)=>{
                    return(
                        <DivCards key={e.id}>
                            <ComponentCard
                                chave={e.id}
                                title={PrismicDOM.RichText.asText(e.data.title)} 
                                RecommendedImage={e.data.trumbnail.url}
                        />
                        </DivCards>
                    )
                    
                })}
            </Cartas>
        </DivPg1>
    )
}

