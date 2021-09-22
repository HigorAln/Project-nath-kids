import Head from 'next/head'

type HomeSEO = {
    title: string,
    description?: string,

}

export default function SEO({title, description}: HomeSEO){
    const descricao = description ? description : '';
    
    return(
        <Head>
            <title>{`${title}${descricao}`}</title>
            


            <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
        <meta name="MobileOptimized" content="320"/>
        <meta name="HandheldFriendly" content="trye" />
        <meta name="theme-color" content="#121214"/>
        <meta name="msapplication-TitleColor" content="#121214"/>
        <meta name="referrer" content="no-referrer-when-downgrade"/>
        <meta name="google" content="translate"/>

        <meta property="og:tittle" content={title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:locale" content="pt_BR"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content={title}/>
        <meta property="og:image:alt" content="Thumbnail" />
        <meta property="og:image:type" content="image/png"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>

        <meta name="twitter:title" content={title}/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HigorAllan4" />
        <meta name="twitter:creator" content="@HigorAllan4" />
        <meta name="twitter:image:alt" content="Trumbnail" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="620" />
        <meta name="" content="" />
        </Head>
    )
}