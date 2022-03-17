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
                        <RoundedLink><FaFacebookF /></RoundedLink>
                        <RoundedLink><FaLinkedinIn /></RoundedLink>
                        <RoundedLink><FiInstagram /></RoundedLink>
                    </FooterSocialLinksContainer>
                    <Logo/>
                </BrandInfoContainer>
            </FooterInfoContainer>
            <LinksContainer>
                <FooterLink to='privacy-politic'>Politica de privacidad</FooterLink>
                <span>|</span>
                <FooterLink to="/contact">Contacto</FooterLink>
            </LinksContainer>
            <span>Eart-IoT 2022. Todos los derechos reservados.</span>
        </FooterContainer>
    );
};

export default Footer;