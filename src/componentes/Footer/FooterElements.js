import styled from 'styled-components';
import { Link } from 'react-router-dom';

import  { ReactComponent as ELogo } from '../../assets/logo/vertical.svg';

export const FooterContainer = styled.div`
    background-color: #000;
    /* background-color: #5cbf11; */

    color: #ffffff;
    display: flex;
    width: 100vw;
    /* height: 80px; */
    padding: 3em 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & span {
        font-family: 'Montserrat', sans-serif;
        font-size: .75em;
        color: #aaa;
        max-width: 90%;
        text-align: center;
        margin-top: .75em;
    }
`;

export const FooterInfoContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: start;
    }

`;

export const Slogan = styled.h1`
    font-family: 'Lato', sans-serif;
    font-size: 2em;
    width: 30%;
    font-weight: bold;
    padding: 0;
    margin: 0;
    margin-left: 3em;

    @media screen and (max-width: 768px){
        margin: 0;
        font-size: 1.25em;
        width: 80%;
        text-align: center;
    }

`;

export const BrandInfoContainer = styled.div`
    display: flex;
    width: 20%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    margin-right: 3em;

    @media screen and (max-width: 768px){
        margin: 0;
        flex-direction: column-reverse;
        margin-top:2em;
    }
    /* background-color: red; */
`;

export const FooterSocialLinksContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1em;
`;

export const Logo = styled(ELogo)`
    width: 10em;
    height: 10em;
    color: #ffffff;
    fill: #fff;
`

export const RoundedLink = styled.a`
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 1.25em;
    width: 3em;
    height: 3em;
    transition: all .3s ease-in-out;
    margin-right: 1em;

    & * {
        color: #fff;
    }

    &:hover {
        background-color: #5CBF11;

        & .media-icon {
            color: #AFE08A;
        }
    }

    & .media-icon {
        color: #fff;
    }
`;

export const LinksContainer = styled.div`
    /* width: 0%; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const FooterName = styled.h3`
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 1em;
`;

export const FooterLink = styled(Link)`
    color: #aaa;
    margin: .5em;
    font-family: 'Montserrat', sans-serif;
    font-size: 1em;
    font-weight: normal;
    transition: all .3s ease-in-out;

    &:hover {
        color: #fff;
    }
`;

export const LegalAndCopy = styled.div`
`;