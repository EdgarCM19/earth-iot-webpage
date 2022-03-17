import React from "react";
import { PageHeader, PageHeaderImg, PageHeaderTitle } from "../componentes/CommonElementes";
import HomeSection from "../componentes/HomeSection/HomeSection";



import headerImg from '../assets/img/home.jpg';
import { CallIcon, ChartIcon, IconSectionContainer, IconSectionText, IconSectionTitle, InfoIconContainer, Resume, SatelliteIcon, ServicesContainer } from "./ServicesPageElements";
import Carousel from "../componentes/Carousel/Carousel";
import { serivicesCarouselData } from "../assets/data/data";

const ServicesPage = () => {
    return (
        <>
        <PageHeader>
            <PageHeaderImg src={headerImg}/>
            <PageHeaderTitle>Servicios</PageHeaderTitle>
        </PageHeader>
        <ServicesContainer>
            <Resume>Aprovechamos el valor de las principales tecnologías de tendencia para transforman el mundo en que vivimos apoyando a los productores a crear sistemas productivos más inclusivos y sustentables.</Resume>
            <InfoIconContainer>
                <IconSectionContainer>
                    <SatelliteIcon/>
                    <IconSectionTitle>Seguimiento satelital</IconSectionTitle>
                    {/* <IconSectionText>texto</IconSectionText> */}
                </IconSectionContainer>

                <IconSectionContainer>
                    <ChartIcon/>
                    <IconSectionTitle>Estaciones de monitoreo</IconSectionTitle>
                    {/* <IconSectionText>texto</IconSectionText> */}
                </IconSectionContainer>

                <IconSectionContainer>
                    <CallIcon/>
                    <IconSectionTitle>Asesoría técnica </IconSectionTitle>
                    {/* <IconSectionText>texto</IconSectionText> */}
                </IconSectionContainer>
            </InfoIconContainer>
            <Carousel data={serivicesCarouselData} />
        </ServicesContainer>
        </>
    )
};



export default ServicesPage;