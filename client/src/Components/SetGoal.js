import React, { useState, useEffect } from 'react';
import Styled, { keyframes } from 'styled-components';
import Select from 'react-select';
import Quote from '../Components/Quote';
import { useMutation } from '@apollo/client';
import { ADD_GOAL } from '../utils/mutations';
import { Link, useHistory } from 'react-router-dom';
import Loading from './Loading';


const optionsLanguage = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'react', label: 'React' }
]


function SetGoal({ quoteText }) {
    const history = useHistory();
    const [langState, setLangState] = useState('');
    const [goalState, setGoalState] = useState(0);
    const [addGoal, { error, data }] = useMutation(ADD_GOAL);
    const [isLoading, setIsLoading] = useState(true);

    // update state based on form input changes
    const handleChangeLang = (event) => {
        console.log(event);
        const { value } = event;

        setLangState(value);
    };

    const handleChangeGoal = (event) => {
        const { value } = event.target;
        setGoalState(value);
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
       const goalNum = parseInt(goalState);

        console.log(langState, goalNum);
        try {
            const { data } = await addGoal({
                variables: { language: langState, goalHours: goalNum },
            });
            history.push('/Dashboard');
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
    });

    return (
        <>
        <Loading/>
        <div>
            <GoalContainer>
                <QuoteHeader>
                    <Quote />
                </QuoteHeader>
                <Form onSubmit={handleFormSubmit}>
                    <InsideForm>
                        <FormHeader>
                            <h2>Set Your Goal!</h2>
                        </FormHeader>
                        <Dropdown>
                            <FormLabel htmlFor="language">
                                Choose Language
                            </FormLabel >
                            <Select options={optionsLanguage} type="text" name="language" id="language" value={langState} onChange={handleChangeLang} />
                        </Dropdown>
                        <FormGroup>
                            <FormLabel htmlFor="goalHours">How many hours do you want to devote?</FormLabel>
                            <FormInput type="text" name="goalHours" id="goalHours" value={goalState} onChange={handleChangeGoal} />
                        </FormGroup>

                        <button type="submit">Submit</button>

                    </InsideForm>
                </Form>
            </GoalContainer>
        </div>
        </>
    )
}

const GoalContainer = Styled.div
    `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
`

const QuoteAnimation = keyframes 
`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const QuoteHeader = Styled.h4
    `
  font-style: italic;  
  color: #FFC947;
  font-size: 2rem;
  opacity: 0;
  animation-name: ${QuoteAnimation};
  animation-duration: 3s;
  animation-iteration-count: once;
  animation-fill-mode: forwards;
`;

const FormAnimation = keyframes
`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const Form = Styled.form
    `
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    opacity: 0;
    animation-name: ${FormAnimation};
    animation-duration: 0.5s;
    animation-iteration-count: once;
    animation-delay: 1.3s;
    animation-fill-mode: forwards;
    
`;
const InsideForm = Styled.div
    `
    display: block;
    position: relative;
    padding: 2rem 4rem;
    background: #EFEFEF;
    color: #0A1931;
`;
const FormHeader = Styled.h2
    `
     padding: 2rem 0;
     justify-content: center;
     display: flex;

`;
const FormLabel = Styled.label
    `
    display: block;
    margin-bottom: 5px;

`;
const Dropdown = Styled.div
    `
    display: block;
    position: relative;
    padding: 2rem 4rem;
    background: #EFEFEF;
    color: #0A1931;
`;
const FormInput = Styled.input
    `
    display: block;
    width: 100%;
    padding: 10px 15px;
    background-color: #EFEFEF;
    border-radius: 6px;
    transition: 0.4s;
`;

const FormGroup = Styled.div
    `
    display: block;
    position: relative;
    padding: 2rem 4rem;
    background: #EFEFEF;
    color: #0A1931;
`
const ButtonContainerLink = Styled(Link)
    `
    display: flex;
    align-items: center;
    justify-content: center;
`

export default SetGoal;