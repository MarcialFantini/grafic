import styled from "styled-components";

export const ContainerCommon = styled.div`
    width: 90%;
    max-width: 420px;
    margin: auto;
    height: 80vh;
    max-height: 900px;

    display: flex;
    flex-direction: column;
    
    justify-content: space-around;
    align-items: center;

    
`

export const TitleH1 = styled.h1`
    width: 80%;
    text-align: center;
    color:${props => props.color};
    font-size: 2.5rem;
    margin: 10px auto;
`


export const TextP = styled.p`
    width: 80%;
    text-align: center;
    color:${props => props.color};
    font-size: 1.4rem;
    margin: 20px auto;
`

