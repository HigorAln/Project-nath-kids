import {
    Page,
    DivEsquerda,
    DivDireita,
}from '../styles/components/Contrast'

export default function Contrast() {
    const imagem1 = "/destaque.jpg"
    return(
        <Page>
            <DivEsquerda>
                <h1>Simple website with next.js<br/>just made for Deploy</h1>
            </DivEsquerda>
            <DivDireita>
                <img src={imagem1} width='350'/>
            </DivDireita>
        </Page>
    )
}