import styled from "styled-components";

export const TitleWallet = styled.h4`
    width: 100%;
    height: auto;

    font-size: 1.6rem;

    text-align: center;
    margin: auto;

    color: ${props => props.color};
`

export const Ul = styled.ul`
    width: 80%;
    height: auto;

    margin: 50px 0;

    padding: 0;
    
`

export const Li = styled.li`
    width: 100%;
    height: auto;
    min-height: 30px;
    list-style: none;
    padding: 10px;
    text-align: start;

    font-size: 1.4rem;

    margin: 10px auto 0 20px;
`

export const TextWallet = styled.p`
    padding: 10px;

    font-size: 1.4rem;

    color: ${props => props.color};
    margin: 0%;
`

export const ContainerUpgrade = styled.div`
    height: auto;
    min-height: 40px;
    width: 90%;
    margin: auto;
    background: black;
    padding: 20px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const BtnPremiumPlan = styled.button`
    width: 80%;
    height: auto;
    min-height: 30px;

    font-size: 1.3rem;
    color: white;

background: purple;

 border-radius: 50px;
 padding: 10px;
 margin: auto;
 font: 600;
`