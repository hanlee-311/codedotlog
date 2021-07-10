import React, { useEffect } from 'react';
import Styled from 'styled-components';
import Quote from '../Components/Quote'
function ContactSection({quoteText}) {

  return (
    <div className="aboutUs">
        <AboutTitle>
            <h1>.CONTACT</h1>
        </AboutTitle>
        <Quote/>

    </div>
   );
 }

 const AboutTitle = Styled.div
 `
       min-height: 90vh;
       display: flex;
       align-items: center;
       justify-content: center;

 `
  export default ContactSection;