import Prismic from 'prismic-javascript'

export const apiEndPoint = "https://nathkids.prismic.io/api/v2"

export const client = (req = null) => {

    const option = req ? { req } : null
    
    return Prismic.client(apiEndPoint, option)
}