import styled from "styled-components";

export const PageHeader = styled.div`
    width: 100%;
    height: 200px;
    position: relative;
    background: linear-gradient(90deg, rgba(5,0,89,100) 0%, rgba(255,255,255,0.5) 100%);

    @media screen and (max-width: 768px){
        width: 100%;
        height: 150px;
        position: relative;
    }
`;

export const PageHeaderImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background:linear-gradient(90deg, rgba(5,0,89,100) 0%, rgba(255,255,255,0.5) 100%);

    /* @media screen and (max-width: 768px){
        width: 100%;
        height: 100%;
    } */
`;

export const PageHeaderTitle = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    /* font-size: 80px; */
    font-size: 5.5em;
    letter-spacing: .1em;
    color: #fff;
    
    @media screen and (max-width: 768px){
        font-size: 3.5em;
    }
`

export const PrimaryButton = styled.button`
    background-color: var(--primary-color);
    border: none;
    outline: none;
    border-radius: .5em;
    padding: 1em 2em;
    font-size: 1em;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
`

export const PrimaryLinkButton = styled.a`
    background-color: var(--primary-color);
    border: none;
    outline: none;
    border-radius: .5em;
    padding: 1em 2em;
    font-size: 1em;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
`