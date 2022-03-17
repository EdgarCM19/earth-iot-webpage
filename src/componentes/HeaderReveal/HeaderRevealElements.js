import styled from "styled-components";

export const Start = styled.div`
    display: flex;
    position: relative;
    width: 100vw;
    height: calc(100vh - 80px); 

    @media screen and (max-widht: 768px){
        width: 100vw;
        height: 100vh; 
    }
`;
export const StartImage = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px){
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const StartContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 85%;
    height: 85%;
    color: #fff;
    z-index: 9;

    @media screen and (max-width: 768px){
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 85%;
        height: 85%;
        color: #fff;
        z-index: 9;
    }
`;

export const ContentTitle = styled.h1`
    font-family: 'Lato', sans-serif;
    font-size: 64px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 4px;
    text-transform: uppercase;

    @media screen and (max-width: 768px){
        width: 90%;
        font-family: 'Lato', sans-serif;
        font-size: 40px;
        font-weight: 700;
        text-align: center;
        letter-spacing: 4px;
    }
`;

export const ContentSubtitle = styled.h3`
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 1em;
    letter-spacing: 4px;

    @media screen and (max-width: 768px){
        font-family: 'Montserrat', sans-serif;
        width: 90%;
        font-size: 20px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 1em;
        letter-spacing: 4px;
    }
`;