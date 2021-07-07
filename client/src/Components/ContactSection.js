import React, { useEffect } from 'react';
import Styled from 'styled-components';



function ContactSection() {

  return (
    <div className="aboutUs">
        <AboutTitle>
            <h1>.CONTACT</h1>
        </AboutTitle>
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