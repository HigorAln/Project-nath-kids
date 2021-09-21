import styled from "styled-components";

export const Page = styled.div`
    height: 86vh;
    width: 100%;
    background: ${({theme})=>theme.background};
    display:flex;
    transition: all 0.5s;

    @media screen and (max-width:600px){
        flex-direction: column;
    }
`


export const CardCategoriesVestidos = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;

    @media screen and (max-width:600px){
        width:100%;
        height: 100%;
    }
    @media screen and (max-width:800px){
            
    }
`
export const Model = styled.div`
    background-color: ${({theme})=> theme.backgroundCard};
    width: 30%;
    height: 40%;
    border-radius: 10px;
    box-shadow: 0 0 10px ${({theme})=> theme.shadow};
    opacity:0.8;
    cursor:pointer;
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction:column;
    
    &:hover{
        opacity:1;
    }

    h2{
        text-align: center;
        padding: 10px 5px;
        color:black;
    }
    img{
        width: 95%;
        height: 75%;
        border-radius: 10px;
        transform: scale(1);
    }

    @media screen and (max-width:800px){
        width:200px;
        height:250px;
    }
        
`
export const Container = styled.div`
    width: 100%;
    height: 40%;
    margin-top: -120px;
    overflow: hidden;
    opacity:0;
    transition: all 0.2s;
    @media screen and (max-width:800px){
        display:none;        
    }
`
export const Hidden = styled.div`
    position: relative;
    top:0;
    left:0;
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const ModelHidden = styled(Model)`
    width:30%;
    height:95%;
    cursor:default;
    img{
        width:100%;
        height:100%;
        transform:scale(1);
    }
`

export const CardCategoriesConjuntos = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    
    @media screen and (max-width:600px){
        width:100%;        
    }
`