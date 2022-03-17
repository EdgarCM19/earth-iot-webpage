// import React, { useRef, useEffect} from "react";
import { BrowserRouter as Routes, Route, Switch} from "react-router-dom";
import Navbar from "./componentes/Navbar/Navbar";

import './App.css';
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";
import Footer from "./componentes/Footer/Footer";
// import HomePage from "./pages/HomePage";

export default function App() {
    // gsap.registerPlugin(ScrollTrigger);

    // const ref = useRef(null);

    // useEffect(() => {
    //     const element = ref.current;
    //     gsap.fromTo(element.querySelector('.section'),
    //         {
    //             opacity: 0,
    //             x: -100
    //         },
    //         {
    //             opacity: 1,
    //             x: 0,
    //             scrollTrigger: {
    //                 trigger: element.querySelector('.section'),
    //                 start: 'top center',
    //                 end: 'botton top',
    //                 scrub: true,
    //             },
    //             duration: 2,
    //             ease: 'none'
    //         }
    //     )
    // }, []); 

    //Todo:
    // [x] Footer
    // [ ] Poner las redes
    // [ ] Revisar ortografia
    // [ ] Cambiar lo del correo.
    // [ ] Agregar las imagenes
    // [ ] Agregar el subtitle en carousel
    // [ ] Buscar y cambiar iconos

    return (
        <>
        <Routes>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route path='/services'>
                    <ServicesPage />
                </Route>
                <Route path="/contact">
                    <ContactPage />
                </Route>
                <Route path="/projects">
                    <ProjectsPage />
                </Route>
            </Switch>
            <Footer />
        </Routes>
        </>
    );
}
