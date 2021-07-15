import React from 'react';
import Styled from 'styled-components';
// import GitHub from '@material-ui/icons/GitHub';
// import LinkedIn from '@material-ui/icons/LinkedIn';


function ContactSection() {

  return (

    <ContactContainer>
      <ContactHeader>
        <h1 id="Contact"><span style={{ color: "#FFC947" }}>.</span>contact</h1>
      </ContactHeader>
      <Form>
        <InsideForm>
          <FormHeader>
            <h2>We would love to hear from you.</h2>
          </FormHeader>
          <FormGroup>
            <FormLabel>First Name:</FormLabel>
            <FormInput />
          </FormGroup>
          <FormGroup>
            <FormLabel>Last Name:</FormLabel>
            <FormInput />
          </FormGroup>
          <FormGroup>
            <FormLabel>Email:</FormLabel>
            <FormInput />
          </FormGroup>
          <FormGroup>
            <FormLabel>Message:</FormLabel>
            <MessageTextArea/>
          </FormGroup>
          <div>
            <button>Submit</button>
          </div>
        </InsideForm>
      </Form>
    </ContactContainer>


  );
}

const ContactContainer = Styled.div
  `
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

  `;

const ContactHeader = Styled.div
  `
    align-items: center;
    justify-content: center;
    margin: 3rem 0;
  `;

  const Form = Styled.form
  `
      height: 100vh;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      text-align: left;
  `;
 
  const InsideForm = Styled.div 
  `
      display: block;
      position: relative;
      padding: 2rem 4rem;
      background: #185ADB;
      color: #0A1931;
  `;

    const FormHeader = Styled.h2
  `
      padding: 2rem 0;
      color: #EFEFEF;
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
      background: #185ADB;
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


export default ContactSection;