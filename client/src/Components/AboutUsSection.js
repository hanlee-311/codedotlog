import React from 'react';
import Styled from 'styled-components';

function AboutUsSection() {
    return (
     <About id="#about">
         <AboutHeader>
             <h1 id="About">.about</h1>
         </AboutHeader>
         <div className="Text">
             <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, eligendi tempora. Delectus minima rerum consectetur aliquid voluptatem repellendus ea placeat.</h4>
         </div>
         <MissionText>
             <h2>Codedotlog</h2>
             <h4>The world of web developement is constantly evolving and that is why it is so important to keep your skills fresh with consistent practice.</h4>
             <h4>As emerging developers ourselves, we wanted to create a place where aspiring developers could set goals and log their practice hours.</h4>
             <h4>Codedotlog was born out of a desire to encourage people of all ages to set goals and keep track of their progrss.</h4>
         </MissionText>
         <div className="profilePhotos">
             <AboutTitle>our team</AboutTitle>
             <DotProfilePic></DotProfilePic>
             <DotProfilePic></DotProfilePic>
             <DotProfilePic></DotProfilePic>
             <DotProfilePic></DotProfilePic>
         </div>
     </About>
    );
  }

  const About = Styled.div
  `
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

  `
  const AboutHeader = Styled.div
  `
    align-items: center;
    justify-content: center;
    margin: 3rem 0;
  `
  const MissionText = Styled.div
  `
    max-width: 100%;
    background-color: #EFEFEF;
    color: #0A1931;
    margin: 3rem 0;
  `

  const DotProfilePic = Styled.span
  `
    height: 25vh;
    width: 25vh;
    background-color: #FFC947;
    border-radius: 50%;
    display: inline-block;
    margin: 0 4rem;
  `

  const AboutTitle = Styled.h2
  `
    align-items: center;
    text-align: center;
    margin: 2rem;
  `
  export default AboutUsSection;