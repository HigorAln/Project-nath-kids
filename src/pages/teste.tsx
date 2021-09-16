import { GetServerSideProps } from "next"

type HomeProps = {
    pegar: string;
}

export default function teste({pegar}: HomeProps){
    console.log(pegar)
    return(
        <>

        </>
    )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ()=>{
    const pegar = process.env.NEXT_PUBLIC_API_URL
    return {
        props: {
            pegar: String(pegar)
        }
    }
}