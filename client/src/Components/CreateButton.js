import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const CreateButton = () => {
    return (
        <ButtonContainer>
            <ButtonHolder>
                <Link to="/SetGoal">
            <button>Create</button>
                </Link>
            </ButtonHolder>
        </ButtonContainer>
    )
}

const ButtonContainer = Styled.div
`
    // min-height: 90vh;
    // width: auto;
    // // display: flex;
    // // justify-content: space-between;
    // // background: white;
    // position: relative;
`

const ButtonHolder = Styled.div
`
    // justify-content: center;
    // align-items: center;
    // text-align: center;
    // background: green;
//     position: absolute;
//     bottom: 5rem;
//     right: 50%;
`
export default CreateButton
