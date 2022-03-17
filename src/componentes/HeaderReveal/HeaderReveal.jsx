import React, { useEffect } from "react";
import gsap from "gsap";
import { Start, StartImage, StartContent, ContentTitle, ContentSubtitle } from "./HeaderRevealElements";

import image_bg from '../../assets/img/home.jpg';

const HeaderReveal = () => {

    useEffect(() => {
        gsap.fromTo('#start_img', { width: '20vw' }, { width: '100vw', duration: 1 });
        gsap.fromTo('#start_img', { height: '10vh' }, { height: 'calc(100vh - 79px)', duration: 1, delay: 1});
        gsap.fromTo('#start_content', { opacity: 0 }, { opacity: 1, delay: 2, duration: 0.5 });

    }, []);

    return (
        <>
            <Start>
                <StartImage src={image_bg} id="start_img"/>
                <StartContent id="start_content">
                    <ContentTitle>Inclusión técnica y tecnológica para crecer</ContentTitle>
                    <ContentSubtitle>Simplificando y facilitando el acceso a asistencia técnica y tecnología disruptiva para lograr una inclusión productiva y financiera de los productores</ContentSubtitle>
                </StartContent>
            </Start>
        </>
    )

}

export default HeaderReveal;