import {
    Modal,
    Empty,
    Main,
    Footer,
    Recommended,
    EmptySpan,
    Menu,
} from '../styles/pages/Modal'
import {SpanMenu} from '../styles/components/header'
import Link from 'next/link'

export default function ModalComponent({fun}) {
    return(
        <Modal>
            <Empty>
                <EmptySpan>
                    <h1>Nath Kids</h1>
                </EmptySpan>
            </Empty>
            <Menu>
                <div>
                <SpanMenu onClick={fun} className="material-icons-outlined">menu_open</SpanMenu>
                </div>
            </Menu>
            <Main>
                <Link href="/">
                    <a><h1>Home</h1></a>
                </Link>
                <Link href='/contact'>
                    <h1>Contact</h1>
                </Link>
                <Link href='/categories'>
                    <h1>Categories</h1>
                </Link>
                <Link href='/social'>
                    <h1>Social Network</h1>
                </Link>
                <Footer>
                    <span>Designer</span> - <span>Desenveloper</span> - <span>Production</span>
                </Footer>
            </Main>
            <Recommended></Recommended>
        </Modal>
    )
}