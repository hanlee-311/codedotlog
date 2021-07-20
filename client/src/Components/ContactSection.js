import React, { useState } from 'react';
import Styled, { keyframes } from 'styled-components';
import emailjs from 'emailjs-com';
// import { Link } from 'react-router-dom';


function ContactSection() {

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  // update state based on form input changes
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o2ic2u7', 'template_btxt32c', e.target, 'user_C9L2p6Qq06OVGTs81D7Dp')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    document.getElementById("messageSent").style.visibility = "visible";
    setTimeout(function(){
      window.location.reload(1);
   }, 2000);
  };

  return (

    <ContactContainer>
      <BigCircle></BigCircle>
      <LittleCircle></LittleCircle>
      <LeftCircle></LeftCircle>
      <ContactHeader>
        <h1 id="Contact"><span>.</span>contact</h1>
      </ContactHeader>
      <Form onSubmit={handleFormSubmit}>
        <InsideForm>
          <FormHeader>
            <h2>We would love to hear from you.</h2>
          </FormHeader>
          <FormGroup>
            <FormLabel>First Name:</FormLabel>
            <FormInput type="text" name="firstName" id="first-name" placeholder="First Name" value={formState.firstName} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Last Name:</FormLabel>
            <FormInput type="text" name="lastName" id="last-name" placeholder="Last Name" value={formState.lastName} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Email:</FormLabel>
            <FormInput type="email" name="email" id="email" placeholder="Your email" value={formState.email} onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Message:</FormLabel>
            <MessageTextArea type="text" name="message" id="message" placeholder="Please write your message to us!" onChange={handleChange} value={formState.message} />
          </FormGroup>
          <ButtonContainer>
            <button>Submit</button>
          </ButtonContainer>
            <h4 id="messageSent" style={{ display: "inline", paddingLeft: "1em", visibility: "hidden", color: "white" }}>Thank you! Your message has been sent.</h4>
        </InsideForm>
      </Form>
    </ContactContainer>


  );
}

const ContactAnimation = keyframes
`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
}
`

const ContactContainer = Styled.div
  `
        display: flex;
        // max-height: 80vh;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        opacity: 0;
        animation-name: ${ContactAnimation};
        animation-duration: 1s;
        animation-iteration-count: once;
        animation-fill-mode: forwards;

  `;

const ContactHeader = Styled.div
  ` 
    display: flex;  
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
  `;

const Form = Styled.form
  `
      // height: 90vh;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      text-align: left;
      // width: 90%
  `;

const InsideForm = Styled.div
  `
      display: flex;
      flex-direction: column;
      position: relative;
      padding: .5rem 3rem;
      background: #EFEFEF;
      color: #0A1931;
      // width: 80%
      align-items: left;
      text-align: left;
      border-radius: 6px;
  `;

const FormHeader = Styled.h2
  `
      padding: .5rem 0;
      color: #0A1931;
      text-align: center;
  `;

const FormLabel = Styled.label
  `
    display: block;
    margin-bottom: 5px;
    color: #EFEFEF;
`;

const FormGroup = Styled.div
  `
      display: block;
      position: relative;
      padding: 0.5rem 4rem;
      background: #EFEFEF;
      color: #0A1931;
  `;

const FormInput = Styled.input
  `
    display: block;
    width: 100%;
    padding: 10px 15px;
    background-color: #EFEFEF;
    border-radius: 6px;
    transition: 0.4s;
`;

const MessageTextArea = Styled.textarea
  `
    display: block;
    width: 100%;
    height: 100px;
    padding: 10px 15px;
    background-color: #EFEFEF;
    border-radius: 6px;
    transition: 0.4s;
`;

const BigCircle = Styled.div
`
    display: flex;
    height: 25vh;
    width: 25vh;
    background-color: #FFC947;
    border-radius: 50%;
    position: absolute;
    left: 75%;
    top: 15%;
    z-index: -1;
    @media (max-width: 1300px){
      display: none;
    }
`

const LittleCircle = Styled.div
`   
    display: flex;
    height: 15vh;
    width: 15vh;
    background-color: #FFC947;
    border-radius: 50%;
    position: absolute;
    left: 85%;
    top: 45%;
    z-index: -1;
    @media (max-width: 1300px){
    display: none;
    }
`

const LeftCircle = Styled.div 
` 
    display: flex;
    height: 15vh;
    width: 15vh;
    background-color: #FFC947;
    border-radius: 50%;
    position: absolute;
    left: 5%;
    top: 70%;
    z-index: -1;
    @media (max-width: 1300px){
      display: none;
    }
`
const ButtonContainer = Styled.div
`
  display: flex;    
  align-item: center;
  text-align: center;
  justify-content: center;
`
export default ContactSection;