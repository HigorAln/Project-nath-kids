import {
    DivCard,
    Title,
    Oferta,
} from '../styles/components/ComponentCard'
import Link from 'next/link'


type HomeProps = {
    title: string;
    RecommendedImage: string;
    chave: string
}

export default function ComponentCard({title, RecommendedImage, chave}: HomeProps){
    return(
        <Link href='/products/vestido-tematico-flores' key={chave} passHref>
            <DivCard>  
                <Title>
                    {title}
                </Title>
                    <img src={RecommendedImage} width='100%' height='70%'/>
                <Oferta>
                    <p>Promoção</p>
                </Oferta>
            </DivCard>
        </Link>
    )
}