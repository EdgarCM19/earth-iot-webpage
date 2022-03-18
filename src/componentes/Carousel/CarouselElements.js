import styled from 'styled-components';

export const CarouselContainer = styled.div`
    /* background-color: red; */

    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const CarouselItem = styled.div`
    /* background-color: pink; */

    opacity: 0;
    width: 90%;
    height: 85%;
    position: relative;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    &.showed {
        opacity: 1;
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 90%;
    }
`;

export const CarouselInfo = styled.div`
    width: 50%;
    height: 100%;
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    @media screen and (max-width: 768px){
        width: 100%;
        /* height: 50%; */
    }
`;

export const CarouselTitle = styled.h2`
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 2.25em;
    text-transform: uppercase;
    text-align: left;
    width: 90%;
    margin-bottom: .5em;
    letter-spacing: .5em;

    @media screen and (max-width: 768px){
        width: 80%;
        font-size: 1.5em;
    }
`;

export const CarouselSubtitle = styled.h5`
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 1.125em;
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 1em;
    color: #888;
    width: 90%;

    @media screen and (max-width: 768px){
        font-size: 1em;
        width: 80%;
    }
`;

export const CarouselText = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    font-size: 1.25em;
    text-align: left;
    width: 90%;
    color: #aaa;

    @media screen and (max-width: 768px){
        width: 80%;
        font-size: 1.125em;
    }
`;

export const CarouselImage = styled.img`
    width: 50%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px){
        width: 100%;
        height: 50%;
    }
`;

export const RightArrowButton = styled.button`
    position: absolute;
    width: 3em;
    height: 3em;
    padding: 1em;
    background-color: #fff;
    color: #666;
    bottom: calc(5% + .9em);
    right: calc(5%);
    outline: none;
    border: none;
    font-size: 1.25em;
    transition: all .2s ease-in-out;
    cursor: pointer;
    /* transform: translate(-50%, -50%); */
    &:hover {
        color: #000;
    }

    @media screen and (max-width: 768px){
        /* width: 2em; */
        /* height: 2em; */
        /* font-size: 1em; */
        bottom: calc(5%);
        right: calc(5%);
    }
`;

export const LeftArrowButton = styled.button`
    position: absolute;
    width: 3em;
    height: 3em;
    padding: 1em;
    background-color: #fff;
    color: #666;
    bottom: calc(5% + .9em);
    right: calc(5% + 3em);
    outline: none;
    border: none;
    font-size: 1.25em;
    transition: all .2s ease-in-out;
    cursor: pointer;

    &:hover {
        color: #000;
    }
    /* transform: translate(-50%, -50%); */
    @media screen and (max-width: 768px){
        bottom: calc(5%);
        right: calc(5% + 3em);
    }
`;
