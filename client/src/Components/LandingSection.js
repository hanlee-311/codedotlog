import React from 'react';
import MainCharacter from '../images/MainCharacter.png';
import Styled from 'styled-components';
import { Link } from "react-router-dom"


const LandingSection = () => {
    return(
        <Landing>
            <div className="description">
                <div className="title">
                    <LandingText>
                    <h1>There's <span className="yellowEmp">always</span></h1>
                    </LandingText>
                    <LandingText>
                    <h1>one <span className="yellowEmp">more</span> thing</h1>
                    </LandingText>
                    <LandingText>
                    <h1>to learn.</h1>
                    </LandingText>
                     <Link to="/SignUp">
              <button>Get Started</button>
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
const ImageContainer = Styled.div
`
    width: auto;
    height: auto;
`

const LandingText = Styled.div
`
    margin: .25rem;
`

const Image = Styled.img
`
    width: 100%;
    height: auto;
`
export default LandingSection;