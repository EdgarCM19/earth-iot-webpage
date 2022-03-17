import React from "react";
import { 
    HomeSectionContainer,
    HomeSectionImageContainer,
    HomeSectionBackground,
    HomeSectionImage,
    HomeSectionContent,
    HomeSectionTitle,
    HomeSectionText } from "./HomeSectionElements";

import image from '../../assets/img/sensores.jpg';
import { PrimaryButton } from "../CommonElementes";
import { useHistory } from "react-router-dom";

const HomeSection = ({title, text, position, linkTo}) => {

    const history = useHistory();

    const goToSection = (link) => {
        history.push(link);
    }

    return (
    <HomeSectionContainer position={position}>
        <HomeSectionImageContainer>
            <HomeSectionBackground viewBox="0 0 156 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M120.5 8.90004C130.2 15.5 137.2 26 143.7 37.5C150.2 48.9 156.1 61.4 155.8 74C155.5 86.5 148.8 99.1 140.5 112C132.1 124.9 122 138.1 109.1 142C96.2 145.9 80.5 140.5 68.8 132.3C57 124 49.1 112.9 37.1 103.1C25.1 93.3 9.00002 84.8 2.90002 72.2C-3.19998 59.6 0.900019 42.8 11.6 33.1C22.3 23.3 39.7 20.6 53.2 15.7C66.7 10.8 76.4 3.60004 87.4 1.50004C98.4 -0.699964 110.8 2.20004 120.5 8.90004Z" fill="#5CBF11"/>
            </HomeSectionBackground>
            <HomeSectionImage src={image}/>
        </HomeSectionImageContainer>
        <HomeSectionContent position={position}>
            <HomeSectionTitle position={position}>{title}</HomeSectionTitle>
            <HomeSectionText position={position}>{text}</HomeSectionText>
            <PrimaryButton onClick={() => linkTo ? goToSection(linkTo) : goToSection('/services')}>Ver más</PrimaryButton>
        </HomeSectionContent>
    </HomeSectionContainer>
    );
}

export default HomeSection;