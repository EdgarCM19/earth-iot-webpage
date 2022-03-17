import styled from "styled-components";

export const HomeSectionContainer = styled.div`
    height: 90vh;
    width: 95vw;
    /* padding: 2em 4em; */
    display: flex;
    align-items: center;
    flex-direction: ${p => p.position === 'right'? "row-reverse" : "row" };

    @media screen and (max-width: 768px){
        height: 100vh;
        width: 95vw;
        padding: 2em 1em;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;

export const HomeSectionImageContainer = styled.div`
    width: 45%;
    height: 100%;
    position: relative;

    @media screen and (max-width: 768px){
        width: 90%;
        height: 50%;
        position: relative;
    }
`;

export const HomeSectionBackground = styled.svg`

    width: 90%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    animation: rotate 65s linear infinite;

    @media screen and (max-width: 768px){
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.5;
        animation: rotate 65s linear infinite;
    }

    @keyframes rotate {
        0%{ transform:translate(-50%, -50%) rotate(0deg) ;
        }
        100%{ transform:translate(-50%, -50%) rotate(360deg) ; 
        }
    }
`;

export const HomeSectionImage = styled.img`
    position: absolute;
    width: 90%;
    object-fit: contain;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 5px 10px rgba(0, 0, 0, .3);
    border-radius: 16px;

    @media screen and (max-width: 768px){
        position: absolute;
        width: 90%;
        object-fit: contain;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 5px 10px rgba(0, 0, 0, .3);
        border-radius: 16px;
    }
`;

export const HomeSectionContent = styled.div`
    height: 100%;
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: flex-start; */
    align-items: ${ p => p.position === 'right' ? "flex-end" : 'flex-start' };
    padding: 0 1em;

    @media screen and (max-width: 768px){
        height: 50%;
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
`;

export const HomeSectionTitle = styled.h1`
    font-family: 'Lato', sans-serif;
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1em;
    text-align: ${p => p.position === 'right' ? "end" : 'start'};

    @media screen and (max-width: 768px){
        font-family: 'Lato', sans-serif;
        font-size: 24px;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 1em;
    }
`;

export const HomeSectionText = styled.h3`
    color: #000;
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: normal;
    margin-bottom: 1.5em;
    text-align: ${p => p.position === 'right' ? "end" : 'start'};

    @media screen and (max-width: 767px){

    }
    color: #000;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 1.5em;
`

