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
        <h1 id="About"><span>.</span>about</h1>
      </AboutHeader>
      <div className="Text" style={{ marginBottom: "3em"}}>
        <h4>Code! Log it! <span>Never</span> lose sight of your goal!</h4>
      </div>
      <MissionText>
        <h2>.log(All <span>your</span> progress!)</h2>
        <h4>The world of web developement is constantly <span>evolving</span>. That is why it is so important to keep your skills fresh with <span>consistent practice</span>.</h4>
        <h4>As emerging developers ourselves, we wanted to create a place where aspiring developers could set <span>goals</span> and <span>log</span> their practice hours.</h4>
        <h4>Codedotlog was born out of a desire to encourage people of all ages to learn new <span>coding skills</span>, and keep track of their progession over time.</h4>
      </MissionText>
      <div className="profilePhotos">
        <AboutTitle>.<span>team</span></AboutTitle>
        <DotTeam>
          <DotProfilePic>
          <TeamImage src={Ryan} alt="Ryan-Profile-pic"></TeamImage>
          </DotProfilePic>
          <TeamName>Ryan Neil Vega</TeamName>
        </DotTeam>
        <DotTeam>
          <DotProfilePic>
            <TeamImage src={Barbara} alt="Barbara-Profile-pic"></TeamImage>
          </DotProfilePic>
          <TeamName>Barbara S Kenny</TeamName>
        </DotTeam>
        <DotTeam>
          <DotProfilePic>
          <TeamImage src={Teisha} alt="Teisha-Profile-pic"></TeamImage>
          </DotProfilePic>
          <TeamName>Teisha McRae</TeamName>
        </DotTeam>
        <DotTeam>
          <DotProfilePic>
            <TeamImage src={Hannah} alt="Hannah-Profile-pic"></TeamImage>
          </DotProfilePic>
          <TeamName>Hannah Lee</TeamName>
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
        @media (max-width: 1300px){

        text-align: center;
        }
  `
const AboutHeader = Styled.div
  `
    align-items: center;
    justify-content: center;
    margin: 3rem 0;
  `
const MissionText = Styled.div
  `
    align-items: center;
    max-width: 80%;
    // border: solid 5px black;
    // background-color: red;
    padding: 0 1rem;
    background-color: rgba(255, 255, 255, .15); 
    backdrop-filter: blur(5px);
    
  // max-width: 55%;
    // // background-color: #020408;
    // color: #EFEFEF;
    // margin: 3rem 0;;
    // padding: 2.5em;
    // padding-top: 5em;
    // line-height: 1.5;

    // text-align: center;
    // margin    : 0 100px;
    // position: relative;
    // background-color: #020408;
    // border-radius: 100% 100% 0 0;

    // :before,
    // :after {
    // content: '';
    // position: absolute;
    // bottom  : 0;
    // z-index : -1;
    // background-color: #020408;
    // border-radius: 100%;
    // }

    // :before {
    //   /* This is the  size of the clouds left ear */
    //   width  : 200px;
    //   height : 200px;
    
    //   /* We slightly move it to the left */
    //   left    : -80px;
    
    //   /* To make sure that the bottom of the cloud
    //      remains flat, we must make the bottom right
    //      corner of the left ear square. */
    //   border-bottom-right-radius: 0;
    // }
    
    // :after {
    //   /* This is the size of the clouds left ear */
    //   width  : 175px;
    //   height : 175px;
    
    //   /* We slightly move it to the right */
    //   right   : -60px;
    
    //   /* To make sure that the bottom of the cloud
    //      remains flat, we must make the bottom left
    //      corner of the right ear square. */
    //   border-bottom-left-radius: 0;
    // }
  `

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

const AboutTitle = Styled.h1
  `
    align-items: center;
    text-align: center;
    margin: 2rem;
    // margin-bottom: 3rem;
  `

const BigCircle = Styled.div
`
    // height: 25vh;
    // width: 25vh;
    // background-color: #FFC947;
    // border-radius: 50%;
    // position: absolute;
    // left: 75%;
    // top: 15%;
    // z-index: -1;
`

const LittleCircle = Styled.div
`  
    // height: 15vh;
    // width: 15vh;
    // background-color: #FFC947;
    // border-radius: 50%;
    // position: absolute;
    // left: 85%;
    // top: 45%;
    // z-index: -1;
`

const LeftCircle = Styled.div 
`
    // height: 15vh;
    // width: 15vh;
    // background-color: #FFC947;
    // border-radius: 50%;
    // position: absolute;
    // left: 5%;
    // top: 70%;
    // z-index: -1;
`
const TeamName = Styled.h4
`
      display: flex;
      margin-top: 1rem;
      justify-content: center;
`

const TeamImage = Styled.img
`
      border-radius: 50%;
      display: inline-block;
      margin: 4%;
      height: 23vh;
`
export default AboutUsSection;