import React from "react";
import { BrandInfoContainer, FooterContainer, FooterInfoContainer, FooterLink, FooterName, FooterSocialLinksContainer, LinksContainer, Logo, RoundedLink, Slogan } from "./FooterElements";

import { FiInstagram } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterInfoContainer>
                <Slogan>Conecta tu siembra, cosecha resultados</Slogan>
                <BrandInfoContainer>
                    <FooterSocialLinksContainer>
                        <RoundedLink href="https://www.facebook.com/EARTHIOT"><FaFacebookF /></RoundedLink>
                        <RoundedLink href="https://www.linkedin.com/company/earth-iot/"><FaLinkedinIn /></RoundedLink>
                        <RoundedLink href="https://www.instagram.com/earth.iot/k"><FiInstagram /></RoundedLink>
                    </FooterSocialLinksContainer>
                    <Logo/>
                </BrandInfoContainer>
            </FooterInfoContainer>
            {/* <LinksContainer>
                <FooterLink to='privacy-politic'>Politica de privacidad</FooterLink>
                <span>|</span>
                <FooterLink to="/contact">Contacto</FooterLink>
            </LinksContainer> */}
            <span>EARTH-IOT ANALYTICS TECHNOLOGY S.A.P.I de CV 2022. Todos los derechos reservados.</span>
        </FooterContainer>
    );
};

export default Footer;