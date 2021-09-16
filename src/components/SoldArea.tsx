import { 
    AreaPhoto,
    Body, 
    DivRadius, 
    Imagem, 
    Paragrafo, 
    Paragrafo2, 
    Paragrafo3,
    SoldAreaDiv,
    DivButton,
    InputCEP,
    DivCep,
    DivPrice,
    Button,
} from "../styles/components/SoldArea"

type HomeProps = {
    title: string;
    description: string;
    imagem: string;
    imagem2: string;
    price:number;
}

export default function SoldArea({title, description, imagem, imagem2, price}: HomeProps){
    return(
        <Body>
            <AreaPhoto>
                <Imagem src={imagem} />
            </AreaPhoto>
            
            <SoldAreaDiv>
                <Paragrafo >{title}</Paragrafo>
                
                <DivRadius>
                    <span>
                    <input type='radio' name='tamanho'/> -<label style={{marginLeft:'3px'}}>P</label>
                    </span>
                    <span>
                    <input type='radio' name='tamanho'/> -<label style={{marginLeft:'3px'}}>M</label>
                    </span>
                    <span>
                    <input type='radio' name='tamanho'/> -<label style={{marginLeft:'3px'}}>G</label>
                    </span>
                </DivRadius>
                <Paragrafo3>{description}</Paragrafo3>
                <DivPrice>
                    <p>Price: <span>{price}$</span></p>
                </DivPrice>

                <Paragrafo2>See your freet!</Paragrafo2>
                <DivCep>
                    <InputCEP type='number' max-maxLength='8' placeholder='your CEP' />
                    <button>Procurar</button>
                </DivCep>
                <DivButton>
                    <Button>Add to Cart!</Button>
                    <Button>Buy now!</Button>
                </DivButton>
            </SoldAreaDiv>
            <div></div>
            <div></div>
        </Body>
    )
}