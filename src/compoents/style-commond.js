import styled from "styled-components";

export const ContainerCommon = styled.div`
    width: 90%;
    max-width: 420px;
    margin: 20px auto 40px auto;
    height: 100vh;
    max-height: 1000px;

    display: flex;
    flex-direction: column;
    
    justify-content: space-between;
    align-items: center;

    
    gap: 30px;
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
    margin: 10px auto;
`

export const FlexRow = styled.div`
    width: auto;
    height: auto;

    display: flex;
    flex-direction: row;
`
export const FlexColumn = styled.div`
    width: auto;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const IconMin = styled.img`
    margin:  auto 10px;
    width:70px;
    height: 70px;
    border-radius: 50%;
`
export const IconMinMin = styled.img`
    margin:  auto 10px;
    width:40px;
    height: 40px;
    border-radius: 50%;
`