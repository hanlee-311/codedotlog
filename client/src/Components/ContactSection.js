import React, { useEffect } from 'react';
import Styled from 'styled-components';
// import GitHub from '@material-ui/icons/GitHub';
// import LinkedIn from '@material-ui/icons/LinkedIn';


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