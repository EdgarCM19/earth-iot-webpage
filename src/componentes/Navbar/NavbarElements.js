import { NavLink as Link } from "react-router-dom";
import { FiMenu, FiX } from 'react-icons/fi'
import styled from "styled-components";

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    width: 100%;
    padding-right: 1em;
    display: flex;
    justify-content: space-between;
    padding: 4px 1rem;
    z-index: 10;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
`;

export const LogoLink = styled(Link)`
    color: #5ABF1B;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    border: none;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    border: none;
    font-size: 1rem;
    text-transform: capitalize;

    &.active {
        /* color: #15cdfc; */
        border-bottom: 5px solid #5cbf11;
    }

    @media screen and (max-width: 768px){
        font-size: 1.25em;
    }
`;

export const Bars = styled(FiMenu)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: ${p => p.expand ? "none" : "block" };
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const X = styled(FiX)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: ${p => p.expand ? "block" : "none" };
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: ${p => p.expand ? "flex" : "none" };
        position: absolute;
        background-color: #000;
        top: 80px;
        right: 0;
        width: 100%;
        height: 70vh;
        font-size: 2em;
        flex-direction: column;
        justify-content: start;
        margin: 0;
        align-items: center;
        z-index: 99999;
    }
`;