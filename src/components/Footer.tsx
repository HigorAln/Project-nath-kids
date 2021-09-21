import Link from 'next/link'
import {Footer} from '../styles/pages/vestidos'

export default function Rodape(){
    return(
        <>
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
        </>
    )
}