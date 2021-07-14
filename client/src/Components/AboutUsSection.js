import React from 'react';
import Styled from 'styled-components';
import Hannah from '../images/Hannah.jpg';
import Ryan from '../images/Ryan.jpg';
import Barbara from '../images/barbara.jpg';
import Teisha from '../images/Teisha.jpg';

function AboutUsSection() {
  return (
    <About id="#about">
      <BigCircle></BigCircle>
      <LittleCircle></LittleCircle>
      <LeftCircle></LeftCircle>
      <AboutHeader>
        <h1 id="About"><span style={{color: "#FFC947"}}>.</span>about</h1>
      </AboutHeader>
      <div className="Text" style={{ marginBottom: "3em"}}>
        <h4>Code! Log it! <span style={{color: "#FFC947"}}>Never</span> lose sight of your goal!</h4>
      </div>
      <MissionText>
        <h2 style={{marginBottom: "1em"}}>.log(All <span style={{color: "#FFC947"}}>your</span> progress!)</h2>
        <h4 style={{marginBottom: "1em"}}>The world of web developement is constantly <span style={{color: "#FFC947"}}>evolving</span>. That is why it is so important to keep your skills fresh with <span style={{color: "#FFC947"}}>consistent practice</span>.</h4>
        <h4 style={{marginBottom: "1em"}}>As emerging developers ourselves, we wanted to create a place where aspiring developers could set <span style={{color: "#FFC947"}}>goals</span> and <span style={{color: "#FFC947"}}>log</span> their practice hours.</h4>
        <h4>Codedotlog was born out of a desire to encourage people of all ages to learn new <span style={{color: "#FFC947"}}>coding skills</span>, and keep track of their progession over time.</h4>
      </MissionText>
      <div className="profilePhotos">
        <AboutTitle>our <span style={{color: "#FFC947"}}>team</span></AboutTitle>
        <DotTeam>
          <DotProfilePic>
          <img src={Ryan} alt="Ryan-Profile-pic" style={{height: "23vh", borderRadius: "50%", display: "inline-block", margin: "4% 4%"}}></img>
          </DotProfilePic>
          <h4 style={{marginTop: "1em", display: "flex", justifyContent: "center"}}>Ryan Neil Angeles Vega</h4>
        </DotTeam>
        <DotTeam>
          <DotProfilePic>
          <img src={Barbara} alt="Barbara-Profile-pic" style={{height: "23vh", borderRadius: "50%", display: "inline-block", margin: "4% 4%"}}></img>
          </DotProfilePic>
          <h4 style={{marginTop: "1em", display: "flex", justifyContent: "center"}}>Barbara S Kenny</h4>
        </DotTeam>
        <DotTeam>
          <DotProfilePic>
          <img src={Teisha} alt="Teisha-Profile-pic" style={{height: "23vh", borderRadius: "50%", display: "inline-block", margin: "4% 4%"}}></img>
          </DotProfilePic>
          <h4 style={{marginTop: "1em", display: "flex", justifyContent: "center"}}>Teisha McRae</h4>
        </DotTeam>
        <DotTeam>
          <DotProfilePic>
          <img src={Hannah} alt="Hannah-Profile-pic" style={{height: "23vh", borderRadius: "50%", display: "inline-block", margin: "4% 4%"}}></img>
          </DotProfilePic>
          <h4 style={{marginTop: "1em", display: "flex", justifyContent: "center"}}>Hannah Lee</h4>
        </DotTeam>
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
    max-width: 55%;
    background-color: #020408;
    color: #EFEFEF;
    margin: 3rem 0;;
    padding: 2.5em;
    padding-top: 5em;
    line-height: 1.5;

    text-align: center;
    margin    : 0 100px;
    position: relative;
    background-color: #020408;
    border-radius: 100% 100% 0 0;

    :before,
    :after {
    content: '';
    position: absolute;
    bottom  : 0;
    z-index : -1;
    background-color: #020408;
    border-radius: 100%;
    }

    :before {
      /* This is the  size of the clouds left ear */
      width  : 200px;
      height : 200px;
    
      /* We slightly move it to the left */
      left    : -80px;
    
      /* To make sure that the bottom of the cloud
         remains flat, we must make the bottom right
         corner of the left ear square. */
      border-bottom-right-radius: 0;
    }
    
    :after {
      /* This is the size of the clouds left ear */
      width  : 175px;
      height : 175px;
    
      /* We slightly move it to the right */
      right   : -60px;
    
      /* To make sure that the bottom of the cloud
         remains flat, we must make the bottom left
         corner of the right ear square. */
      border-bottom-left-radius: 0;
    }
  `

const DotTeam = Styled.div
    `
      height: 40vh;
      width: 40vh;
      display: inline-block;
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
    margin-bottom: 3rem;
  `

const BigCircle = Styled.div
`
    height: 25vh;
    width: 25vh;
    background-color: #FFC947;
    border-radius: 50%;
    position: absolute;
    left: 75%;
    top: 15%;
    z-index: -1;
`

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
`

const LeftCircle = Styled.div 
`
    height: 15vh;
    width: 15vh;
    background-color: #FFC947;
    border-radius: 50%;
    position: absolute;
    left: 5%;
    top: 70%;
    z-index: -1;
`

export default AboutUsSection;