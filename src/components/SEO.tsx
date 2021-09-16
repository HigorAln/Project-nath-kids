import head from 'next/head'

type HomeSEO = {
    title: string,
    description?: string,

}

export default function SEO({title, description}: HomeSEO){
    const descricao = description ? description : '';
    
    return(
        <head>
            <title>{`${title}${descricao}`}</title>
            
        </head>
    )
}