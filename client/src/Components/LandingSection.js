import React from 'react';
import MainCharacter from '../images/MainCharacter2.png';
import Styled from 'styled-components';
import { keyframes } from 'styled-components';
import { Link } from "react-router-dom";


const LandingSection = () => {
    return (
        <Landing>
            <div className="description">
                <div className="title">
                    <LandingText>
                        <h1>There's <span className="yellowEmp">always</span></h1>
                        <h1>one <span className="yellowEmp">more</span> thing</h1>
                        <h1>to learn.</h1>
                    </LandingText>
                    {/* <LandingButton> */}
                    <Link to="/SignUp">
                        <Button>Get Started</Button>
                    </Link>
            
                </div>
            </div>
            <ImageContainer>
                <Image src={MainCharacter} alt="mascot character" />
            </ImageContainer>
        </Landing>
    );
};

const Landing = Styled.div
    `
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 10rem;
    // max-width: 80vw;
    // flex: 1;
    // width: 100vw;
    // background-color: purple;
    @media (max-width: 1300px){
        display: block;
        // padding: 2rem;
        text-align: center;
       margin: 0;
    }
    
`

const CharacterAnimation = keyframes
    `
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0px);
        opacity: 1;
    }
`
const ImageContainer = Styled.div
`
    display:flex;
    align-items: center;
    justify-content: center;
`
const Image = Styled.img
    `
    width: auto;
    height: auto;
    opacity: 0;
    // flex: ;
    animation-name: ${CharacterAnimation};
    animation-duration: 3s;
    animation-iteration-count: once;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
`

const TextAnimation = keyframes
    `
    from {
        transform: translateY(-20px);
        opacity: 0;
    }
    to {
        transform: translateY(0px);
        opacity: 1;
    }
`

const LandingText = Styled.div
    `
    padding: .25rem;
    opacity: 0;
    animation-name: ${TextAnimation};
    animation-duration: 3s;
    animation-iteration-count: once;
    animation-fill-mode: forwards;
`

const ButtonAnimation = keyframes
    `
    from {
        transform: scale(0);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
`

const Button = Styled.button
    `
    opacity: 0;
    animation-name: ${ButtonAnimation};
    animation-duration: 3s;
    animation-iteration-count: once;
    animation-delay: .7s;
    animation-fill-mode: forwards;
`


export default LandingSection;