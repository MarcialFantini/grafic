import styled from "styled-components";

export const ContainerGrid = styled.div`
    width: 100%;
    height: auto;

    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(390px, 1fr) );
`