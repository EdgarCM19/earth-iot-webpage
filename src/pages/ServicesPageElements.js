import styled from 'styled-components';
import { FaSatelliteDish } from 'react-icons/fa';
import { AiOutlineLineChart } from 'react-icons/ai';
import { MdOutlineContactPhone } from 'react-icons/md';

export const ServicesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`

export const Resume = styled.h2`
    width: 80%;
    margin-top: 2em;
    text-align: justify;
    font-size: 2.25em;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    color: #000;

    @media screen and (max-width: 768px){
        font-size: 1.75em;
    }
`;

export const InfoIconContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`

export const IconSectionContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    color: #092A49;
    margin-top: 3em;
`

export const IconSectionTitle = styled.h2`
    margin: .75em 0em;
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-size: 1.5em;
    color: #092A49;
`

export const IconSectionText = styled.h5`
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25em;
    font-weight: normal;
    color: #092A49;
`

export const SatelliteIcon = styled(FaSatelliteDish)`
    /* color: red; */
    width: 5em;
    height: 5em;
`; 

export const ChartIcon = styled(AiOutlineLineChart)`
    /* color: red; */
    width: 5em;
    height: 5em;
`; 

export const CallIcon = styled(MdOutlineContactPhone)`
    /* color: red; */
    width: 5em;
    height: 5em;
`; 