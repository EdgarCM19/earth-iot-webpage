import React from "react";
import { PageHeader, PageHeaderImg, PageHeaderTitle } from "../componentes/CommonElementes";
import { ProjectsPageWrapper } from "./ProjectsPageElements";

import bgImg from '../assets/img/home.jpg';
import Carousel from "../componentes/Carousel/Carousel";
import { Resume } from "./ServicesPageElements";
import { projectsCarouselData } from "../assets/data/data";

const ProjectsPage = () => {
    return (
        <>
        <ProjectsPageWrapper>
            <PageHeader>
                <PageHeaderImg src={bgImg} />
                <PageHeaderTitle>Projectos</PageHeaderTitle>
            </PageHeader>
            <Resume>Aprovechamos el valor de las principales tecnologías de tendencia para transforman el mundo en que vivimos apoyando a los productores a crear sistemas productivos más inclusivos y sustentables.</Resume>
            <Carousel data={projectsCarouselData}/>
        </ProjectsPageWrapper>
        </>
    );
};

export default ProjectsPage;