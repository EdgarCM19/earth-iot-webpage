import React from "react";
import HeaderReveal from "../componentes/HeaderReveal/HeaderReveal";
import HomeSection from "../componentes/HomeSection/HomeSection";

import styled from 'styled-components';

const HomePage = () => {
    return (
        <>
            <HeaderReveal />
            <HomeSection 
                // position="right"
                linkTo="/projects"
                img="/images/resume1.jpeg"
                title="Conecta tu siembra, cosecha resultados"
                text="A la vanguardia en soluciones de agricultura de precisión IoT, seguimiento satelital y producción de alimentos más sustentables y sostenible"
            />
            <HomeSection 
                position="right"
                linkTo="/services"
                img="/images/resume2.jpeg"
                title="Vigila tu cultivo, reduce costos y mejora el rendimiento"
                text="A la vanguardia en soluciones de agricultura de precisión IoT, seguimiento satelital y producción de alimentos más sustentables y sostenible"
            />
            <AliancesContainer>
                <AlliancesTitle>Aliados</AlliancesTitle>
                <AlliancesImagesContainer>
                    <AllianceImage src="/images/alianza1.png"/>
                    <AllianceImage src="/images/alianza2.png"/>
                    <AllianceImage src="/images/alianza3.png"/>
                    <AllianceImage src="/images/alianza4.png"/>
                    <AllianceImage src="/images/alianza5.jpg"/>
                </AlliancesImagesContainer>
            </AliancesContainer>
        </>
    )
}

const AliancesContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    /* flex-wrap: wrap; */
    width: 100vw;
`;

const AlliancesTitle = styled.h1`
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 3em;
    /* padding: 2em 1em; */
    margin-bottom: 1em;
    color: #666;
`;

const AlliancesImagesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    /* justify-content: center; */
    align-items: center;
    width: 90%;
    flex-wrap: wrap;
    /* margin-bottom: 2em; */
    padding-bottom: 2em;

`;

const AllianceImage = styled.img`
    width: 12em;
    height: 12em;
    object-fit: contain;

    @media screen and (max-width: 768px){
        width: 10em;
        height: 10em;
    }
`;



export default HomePage;