import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const CreateButton = () => {
    return (
        <ButtonContainer>
            <ButtonHolder>
                <Link to="/GoalPage">
            <button>Create</button>
                </Link>
            </ButtonHolder>
        </ButtonContainer>
    )
}

const ButtonContainer = Styled.div
`
  
`

const ButtonHolder = Styled.div
`
  
`
export default CreateButton
