import styled from "styled-components";

export const ContactWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    /* padding: 2em 0; */
    height: 100vh;

    @media screen and (max-width: 768px){
        height: auto;
        padding: 2em 0;
    }
`;

export const ContactContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 80%;
    height: 80%;

    @media screen and (max-width: 786px){
        flex-direction: column;
        width: 90%;
    }
`;

export const ContactInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-flex-start;
    background-color: rgba(92, 192, 17, 0.5);
    border-radius: 8px 0 0 8px;
    width: 35%;
    height: 100%;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);

    @media screen and (max-width: 768px){
        width: 100%;
        height: 100%;
    }
`;

export const ContactFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    background-color: #fff;
    border-radius: 0px 8px 8px 0px;
    width: 65%;
    height: 100%;
    box-shadow:0px 5px 10px rgba(0, 0, 0, 0.3);

    @media screen and (max-width: 768px){
        width: 100%;
        height: 100%;
    }
`;

export const ContactDataPanel = styled.div`
    width: 100%;
    padding: 2em 1em;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;

    @media screen and (max-width: 768px){
        padding: .75em .25em;
    }
`;

export const ContactTitle = styled.h2`
    font-family: 'montserrat', sans-serif;
    font-weight: bold;
    font-size: 24px; 
    /* Cambiar */
    margin-top: 1em;
    margin-left: 1em;
    color: #fff;
    text-align: start;

    @media screen and (max-width: 768px){
        font-size: 1.25em;
    }
`;

export const ContactText = styled.h4`
    font-family: 'montserrat', sans-serif;
    font-weight: normal;
    font-size: 18px;
    margin-top: 1em;
    color: #fff;
    padding: .5em 1em;

    @media screen and (max-width: 768px){
        margin-top: .5em;
        font-size: 1em;
    }
`;

export const ContactIconText = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 80%;
    padding: 1em 2em;

    & .icon {
        width: 2em;
        height: 2em;
        color: #fff;
    }

    @media screen and (max-width: 768px){
        padding: .5em 1em;
        width: 85%;
    }
`;

export const IconText = styled.p`
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: normal;
    margin-left: 1.5em;
    max-width: 75%;

    @media screen and (max-width: 768px){
        font-size: 1em;
    }
`;

//Social panel
export const ContactSocialPanel = styled.div`
    display: flex;
    justify-content: start;
    align-items: centrer;
    padding: 1em 2.5em;

    @media screen and (max-width: 768px){
        padding: 1em 1.5em;
    }
`;

export const RoundedLink = styled.a`
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    transition: all .3s ease-in-out;
    margin-right: 1em;

    &:hover {
        background-color: #fff;

        & .media-icon {
            color: #AFE08A;
        }
    }

    & .media-icon {
        color: #fff;
    }
`;

// -------- [FORMULARIO ] ------

export const ContactForm = styled.form`
    padding: 1em 2em;
    /* background-color: #aaa; */
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;

    @media screen and (max-width: 768px){
        padding: .5em 1em;
        width: 90%;
    }
`;

export const FormLabel = styled.label`
    margin: .5em 1em;
    font-family: 'Montserrat', sans-serif;
    color: #000;
   font-size: 1.25em;

   @media screen and (max-width: 768px){
       font-size: 1em;
   }
`;

export const FormInputText = styled.input.attrs({ type: 'text'})`
    font-size: 1.25em;
    font-family: 'Montserrat', sans-serif;
    color: #000;
    padding: .5em .5em;
    border: none;
    border-bottom: solid 1px #000;
    outline: none;
    width: 70%;

    @media screen and (max-width: 768px){
        font-size: 1.125em;
        width: 90%;
        padding: .5em;
    }
`;

export const RadioGroup = styled.div`
    display: flex;
    justify-content: space-around;
    /* flex-wrap: wrap; */
    align-items: center;
    width: 100%;
    margin-top: 1em;
    /* align-items: center; */

    @media screen and (max-width: 768px){
        flex-direction: column;
        /* justify-content: center; */
        align-items: flex-start;
    }
`;

export const LabelRadio = styled.label`
    /* display: block; */
    /* display: flex; */
    justify-content: center;
    align-items: center;
    cursor: pointer;
    line-height: 2.5;
    font-size: 1.25em;

    @media screen and (max-width: 768px){
        font-size: 1em;
        margin-left: 2em;
    }
`;

export const LabelSpan = styled.span`
    margin-left: .5em;
    font-family: 'Montserrat', sans-serif;
    font-size: 1em;

    &.radio_title {
        font-size: 1.25em;
        margin-top: 1em;
    }
`;

export const RadioInput = styled.input`

    border: 2px solid #5CBF11;
    /* clip: rect(0, 0, 0, 0); */
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;

    & + ${LabelSpan}:before {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        vertical-align: -0.35em;
        border-radius: 1em;
        border: 0.125em solid #5CBF11;
        margin-right: .5em;
        transition: all .5s ease-in-out;
    }

    &:checked + ${LabelSpan}:before {
        width: .75em;
        height: .75em;
        vertical-align: -.25em;
        background-color: #5CBF11;
        border: 0.125em solid #5CBF11;
    }
`;

export const FormTextArea = styled.textarea`
    resize: none;
    width: 90%;
    /* height: 30%; */
    font-family: 'Montserrat', sans-serif;
    font-size: 1.25em;
    padding: .5em 1em;
    border: none;
    border-bottom: 2px solid #000;

    @media screen and (max-width){
        font-size: 1em;
    }
`;

export const SubmitButton = styled.input.attrs({type: 'submit'})`
    padding: .75em 1.5em;
    font-size: 1.25em;
    background-color: #5CBF11;
    border: none;
    outline: none;
    border-radius: .5em;
    color: #fff;
    margin-top: 3em;
`