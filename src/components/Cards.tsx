import { GetServerSideProps } from 'next'
import {
    Cartas,
    DivPg1,
    SpacePg2,
    DivCards,
}from '../styles/components/cards'
import ComponentCard from './ComponentCard'
import PrismicDOM from 'prismic-dom'
import {Document} from 'prismic-javascript/types/documents'

type HomeProps = {
    RecommendedProducts: Document[];
}

export default function Cards({RecommendedProducts}: HomeProps) {

    const Produtos = RecommendedProducts.slice(2,6)

    return(
        <DivPg1>
            <SpacePg2>
                <h1>Offer of the week</h1>
            </SpacePg2>
            <Cartas>
                {Produtos.map((e)=>{
                    return(
                        <DivCards key={e.id}>
                            <ComponentCard
                                chave={e.id}
                                title={PrismicDOM.RichText.asText(e.data.title)} 
                                RecommendedImage={e.data.trumbnail.url}
                                link={e.slugs[0]}
                        />
                        </DivCards>
                    )
                    
                })}
            </Cartas>
        </DivPg1>
    )
}

