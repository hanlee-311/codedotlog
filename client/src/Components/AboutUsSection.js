import React from 'react';
import Styled, { keyframes } from 'styled-components';
import Hannah from '../images/Hannah.jpg';
import Ryan from '../images/Ryan.jpg';
import Barbara from '../images/Barbara2.jpg';
import Teisha from '../images/Teisha.jpg';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Footer from './Footer';

function AboutUsSection() {
  return (
    <>
      <About id="#about">
        <BigCircle></BigCircle>
        <LittleCircle></LittleCircle>
        <LeftCircle></LeftCircle>
        <TopAbout>
          <AboutHeader>
            <h1 id="About"><span>.</span>about</h1>
          </AboutHeader>
          <div className="Text" style={{ marginBottom: "2rem" }}>
            <h2>Code! Log it! <span>Never</span> lose sight of your goal!</h2>
            {/* <h2>.log(All <span>your</span> progress!)</h2> */}
          </div>
          <MissionText>
            <p>The world of web developement is constantly <span>evolving</span>. That is why it is so important to keep your skills fresh with <span>consistent practice</span>.</p>
            <p>As emerging developers ourselves, we wanted to create a place where aspiring developers could set <span>goals</span> and <span>log</span> their practice hours.</p>
            <p>Codedotlog was born out of a desire to encourage people of all ages to learn new <span>coding skills</span>, and keep track of their progession over time.</p>
          </MissionText>
        </TopAbout>
        <BottomAbout>
          <AboutTitle>.<span>team</span></AboutTitle>
          <DotTeam>
            <DotProfilePic>
              <TeamImage src={Ryan} alt="Ryan-Profile-pic"></TeamImage>
            </DotProfilePic>
            <TeamName>Ryan Neil Vega</TeamName>
            <ContactBox>
              <Contact href="https://github.com/vegaryanneil" target="_blank"><GitHub fontSize="large" style={{ color: "#FFC947" }} /></Contact>
              <Contact href="https://www.linkedin.com/in/ryan-neil-vega-981553163/" target="_blank"><LinkedIn fontSize="large" style={{ color: "#FFC947" }} /></Contact>
            </ContactBox>
          </DotTeam>
          <DotTeam>
            <DotProfilePic>
              <TeamImage src={Barbara} alt="Barbara-Profile-pic"></TeamImage>
            </DotProfilePic>
            <TeamName>Barbara S Kenny</TeamName>
            <ContactBox>
              <Contact href="https://github.com/BarbaraShea" target="_blank"><GitHub fontSize="large" style={{ color: "#FFC947" }} /></Contact>
              <Contact href="https://www.linkedin.com/in/barbarasheakenny/" target="_blank"><LinkedIn fontSize="large" style={{ color: "#FFC947" }} /></Contact>
            </ContactBox>
          </DotTeam>
          <DotTeam>
            <DotProfilePic>
              <TeamImage src={Teisha} alt="Teisha-Profile-pic"></TeamImage>
            </DotProfilePic>
            <TeamName>Teisha McRae</TeamName>
            <ContactBox>
              <Contact href="https://github.com/mcraeteisha" target="_blank"><GitHub fontSize="large" style={{ color: "#FFC947" }} /></Contact>
              <Contact href="https://www.linkedin.com/in/teishamcrae/" target="_blank"><LinkedIn fontSize="large" style={{ color: "#FFC947" }} /></Contact>
            </ContactBox>
          </DotTeam>
          <DotTeam>
            <DotProfilePic>
              <TeamImage src={Hannah} alt="Hannah-Profile-pic"></TeamImage>
            </DotProfilePic>
            <TeamName>Hannah Lee</TeamName>
            <ContactBox>
              <Contact href="https://github.com/hanlee-311" target="_blank"><GitHub fontSize="large" style={{ color: "#FFC947" }} /></Contact>
              <Contact href="https://www.linkedin.com/in/hannah-lee-9b4889144/" target="_blank"><LinkedIn fontSize="large" style={{ color: "#FFC947" }} /></Contact>
            </ContactBox>
          </DotTeam>
        </BottomAbout>
      </About>
      <Footer />
    </>
  );
};

const AboutAnimation = keyframes
  `
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const About = Styled.div
  `
    opacity: 0;
    animation-name: ${AboutAnimation};
    animation-duration: 1s;
    animation-iteration-count: once;
    animation-fill-mode: forwards;
        @media (max-width: 1300px){
        text-align: center;
        }
  `;

const AboutHeader = Styled.div
  `
    margin-bottom: 2rem;
  `;

const TopAbout = Styled.div
  `
        display: flex;
        align-items: center;
        flex-direction: column;
        @media (max-width: 1300px){
          margin: 0 0 5rem 0;
        }
`;

const BottomAbout = Styled.div
  `
        // width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        @media (max-width: 1300px){
        align-items: center;
        flex-direction: column;
        }
`;

const MissionText = Styled.div
  `
    max-width: 60%;
    padding: 0 1rem;
    background-color: rgba(255, 255, 255, .15); 
    backdrop-filter: blur(5px);
    font-size: 1.5rem;
    margin: 0 0 4rem 0;
  `;

const DotTeam = Styled.div
  `
      height: 40vh;
      width: 40vh;
      display: inline-block;
      @media (max-width: 1300px){
        display:flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
    }
    
      }
    `;

const DotProfilePic = Styled.span
  `
    height: 25vh;
    width: 25vh;
    background-color: #FFC947;
    border-radius: 50%;
    display: inline-block;
    margin: 0 4rem;
  `;

const AboutTitle = Styled.h1
  `
    margin: 3rem 0;
    @media (max-width: 1600px){
      visibility: hidden;
    }
    @media (max-width: 1300px){
      margin: 6rem 0;
      visibility: visible;
    }
  `;

const BigCircle = Styled.div
  `
    height: 25vh;
    width: 25vh;
    background-color: #185ADB;
    border-radius: 50%;
    position: absolute;
    left: 75%;
    top: 15%;
    z-index: -1;
    @media (max-width: 1300px){
      display: none;
      }
`;

const LittleCircle = Styled.div
  `  
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
    
`;

const LeftCircle = Styled.div
  `
    height: 15vh;
    width: 15vh;
    background-color: #FFC947;
    border-radius: 50%;
    position: absolute;
    left: 5%;
    top: 60%;
    z-index: -1;
    @media (max-width: 1300px){
      display: none;
      }
`;

const TeamName = Styled.h4
  `
      display: flex;
      margin-top: 1rem;
      justify-content: center;
`;

const TeamImage = Styled.img
  `
      border-radius: 50%;
      display: inline-block;
      margin: 4%;
      height: 23vh;
      
`;

const Contact = Styled.a
  `
      margin: 0 1rem;
      padding: 0;
      :hover {
        transform: translateY(-5px);
      }
    `;

const ContactBox = Styled.div
  `
      display: flex;
      flex-direction: row;
      justify-content: center;
      
`;

export default AboutUsSection;