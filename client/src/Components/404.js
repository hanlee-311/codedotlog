import React from 'react';
import Styled from 'styled-components';
import { Link } from "react-router-dom";

function FourZeroFour() {
    return (
        <>
            <BigCircle></BigCircle>
            <LittleCircle></LittleCircle>
            <LeftCircle></LeftCircle>
            <About><span>404</span> NOT FOUND</About>
            <Message><span>console.log(</span> Looks like there is nothing here. <span>)</span></Message>
            <Link to="/"><Return style={{ borderRadius: "6px" }}>Return To Codedotlog</Return></Link>
        </>
    );
};

const About = Styled.h4
    `   
    font-size: 300%;
    position: absolute;
    top: 25%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  `

const Message = Styled.h5
    `
    font-size: 250%;
    position: absolute;
    opacity: 75%;
    top: 35%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`

const Return = Styled.button
    `
    border-radius: 6px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
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

export default FourZeroFour;