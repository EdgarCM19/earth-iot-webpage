import React, { useState } from "react";
import { PageHeader, PageHeaderImg, PageHeaderTitle } from "../componentes/CommonElementes";

import imgHeader from '../assets/img/home.jpg';
import { 
    ContactContainer,
    ContactDataPanel,
    ContactFormContainer,
    ContactIconText,
    ContactInfoContainer,
    ContactSocialPanel,
    ContactText,
    ContactTitle,
    ContactWrapper,
    FormInputText,
    FormLabel,
    IconText,
    RoundedLink,
    ContactForm, 
    LabelRadio,
    LabelSpan,
    RadioInput,
    RadioGroup,
    FormTextArea,
    SubmitButton,
    ContactResume} from "./ContactElements";

import { FiPhone, FiMail, FiFacebook, FiInstagram, FiTwitter, FiHome } from "react-icons/fi";
import { FaLinkedinIn } from 'react-icons/fa';

const ContactPage = () => {

    const [radioSelect, setRadioSelect] = useState('');

    const handleRadioSelect = e => {
        const value = e.target.value;
        setRadioSelect(value);
    };

    return (
        <>
        <PageHeader>
            <PageHeaderImg src={imgHeader}/>
            <PageHeaderTitle>Contacto</PageHeaderTitle>
        </PageHeader>
        <ContactWrapper>
        <ContactResume>
            Somos una empresa mexicana conformada por personas apasionadas por la agricultura, la tecnología y el crecimiento del campo mexicano.<br/><br/>Buscamos apoyar a pequeños y medianos productores para en conjunto aprender e innovar constantemente.
        </ContactResume>
            <ContactContainer>
                <ContactInfoContainer>
                    <ContactDataPanel>
                        <ContactTitle>Informacion de contacto</ContactTitle>
                        <ContactText>Rellene el formulario y el equipo de Earth-IoT se contactara con usted a la brevedad </ContactText>
                        <ContactIconText>
                            <FiPhone className="icon"/>
                            <IconText>+52 228 352 7289</IconText>
                        </ContactIconText>
                        <ContactIconText>
                            <FiMail className="icon"/>
                            <IconText>contacto@earth-iot.com</IconText>
                        </ContactIconText>
                        <ContactIconText>
                            <FiHome className="icon"/>
                            <IconText>Privada Seginda Central #616. CP. 7200, Pue., Puebla.</IconText>
                        </ContactIconText>
                    </ContactDataPanel>
                    <ContactSocialPanel>
                        <RoundedLink href="https://www.facebook.com/EARTHIOT">
                            <FiFacebook className="media-icon" size={28}/>
                        </RoundedLink>
                        <RoundedLink href="https://www.instagram.com/earth.iot/">
                            <FiInstagram className="media-icon" size={28}/>
                        </RoundedLink>
                        {/* <RoundedLink>
                            <FiTwitter className="media-icon" size={28}/>
                        </RoundedLink> */}
                        <RoundedLink href="https://www.linkedin.com/company/earth-iot/"><FaLinkedinIn className="media-icon" size={28} color="#fff"/></RoundedLink>
                    </ContactSocialPanel>
                </ContactInfoContainer>
                <ContactFormContainer>
                    <ContactForm 
                        target="_blank" 
                        method="POST"
                        action="https://formsubmit.co/contacto@earth-iot.com"
                    >
                        <input type="hidden" name="_cc" value="angeles.marcial@earth-iot.com" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />
                        <FormLabel>Nombre</FormLabel>
                        <FormInputText 
                            id="name" 
                            name="contact_name"
                            placeholder="Ej. Carlos Montes Alvez"
                            required
                        />
                        <FormLabel>Correo</FormLabel>
                        <FormInputText 
                            id="mail" 
                            name="contact_mail"
                            placeholder="Ej. carlos.montesa@gmail.com"
                            required
                        />
                        <LabelSpan className="radio_title">¿Qué necesita?</LabelSpan>
                        <RadioGroup>
                            <LabelRadio>
                                <RadioInput 
                                    type="radio"
                                    value="cotizacion"
                                    name="mail_type"
                                    id="cotizacion"
                                    required
                                    checked={radioSelect === 'cotizacion'}
                                    onChange={event => handleRadioSelect(event)}
                                />
                                <LabelSpan>Cotización</LabelSpan>
                            </LabelRadio>

                            <LabelRadio>
                                <RadioInput 
                                    type="radio"
                                    value="llamada"
                                    name="mail_type"
                                    id="llamada"
                                    checked={radioSelect === 'llamada'}
                                    onChange={event => handleRadioSelect(event)}
                                />
                                <LabelSpan>Seguimiento</LabelSpan>
                            </LabelRadio>

                            <LabelRadio>
                                <RadioInput 
                                    type="radio"
                                    value="informes"
                                    name="mail_type"
                                    id="informes"
                                    checked={radioSelect === 'informes'}
                                    onChange={event => handleRadioSelect(event)}
                                />
                                <LabelSpan>Informes</LabelSpan>
                            </LabelRadio>

                            <LabelRadio>
                                <RadioInput 
                                    type="radio"
                                    value="otro"
                                    name="mail_type"
                                    id="otro"
                                    checked={radioSelect === 'otro'}
                                    onChange={event => handleRadioSelect(event)}
                                />
                                <LabelSpan>Otro</LabelSpan>
                            </LabelRadio>
                        </RadioGroup>
                        <FormTextArea placeholder="Mensaje"></FormTextArea>
                        <SubmitButton />
                    </ContactForm>
                </ContactFormContainer>
            </ContactContainer>
        </ContactWrapper>
        </>
    )
}



export default ContactPage;