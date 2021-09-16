import styled, { keyframes } from 'styled-components'


const rotate = keyframes`
    0%{
        top:calc(100vh - 50px);
    }
    50%{
        top:calc(99vh - 50px);
    }
    100%{
        top:calc(100vh - 50px);
    }
`

export const Seta = styled.div`
    position: fixed;
    top:calc(100vh - 50px);
    left:calc(50% - 10px);
    width: 35px;
    height: 35px;
    font-size: 30px;
    display: grid;
    place-items: center;
    cursor: pointer;
    border-radius: 50%;
    animation: ${rotate} 1s linear infinite;
`
