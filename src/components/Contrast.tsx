import {
    Page,
    DivEsquerda,
    DivDireita,
}from '../styles/components/Contrast'
import Image from 'next/image'

export default function Contrast() {
    const imagem1 = "/destaque.jpg"
    return(
        <Page>
            <DivEsquerda>
                <h1>Simple website with next.js<br/>just made for Deploy</h1>
            </DivEsquerda>
            <DivDireita>
                <Image src={imagem1} width={350} height={350} />
            </DivDireita>
        </Page>
    )
}