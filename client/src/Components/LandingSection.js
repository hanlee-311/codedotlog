import React from 'react';
import MainCharacter from '../assets/images/MainCharacter.png';
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
                    {/* <LandingButton> */}
                     <Link to="/SignUp">
              <button>Get Started</button>
                    </Link>
                    {/* </LandingButton> */}
                </div>
            </div>
            <Image>
                {/* <img src={MainCharacter} alt="mascot character" /> */}
            </Image>
        </Landing>
    );
};

const Landing = Styled.div
`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rem;
    // flex: 1;
`
const Image = Styled.div
`
    width: auto;
    height: auto;
    // flex: ;
`

const LandingText = Styled.div
`
    padding: .25rem;
`
export default LandingSection;