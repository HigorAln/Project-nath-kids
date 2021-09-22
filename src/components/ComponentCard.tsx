import {
    DivCard,
    Title,
    Oferta,
} from '../styles/components/ComponentCard'
import Link from 'next/link'


type HomeProps = {
    title: string;
    RecommendedImage: string;
    chave: string;
    link: string
}

export default function ComponentCard({title, RecommendedImage, chave, link}: HomeProps){
    return(
        <Link href={`/products/${link}`} key={chave} passHref>
            <DivCard>  
                <Title>
                    {title}
                </Title>
                    <img src={RecommendedImage} width='100%' height='70%'/>
                <Oferta>
                    <p>Promotion</p>
                </Oferta>
            </DivCard>
        </Link>
    )
}