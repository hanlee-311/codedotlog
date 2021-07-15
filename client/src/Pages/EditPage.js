import React, { useState }  from 'react';
import Styled from 'styled-components';
import Select from 'react-select';
import Quote from '../Components/Quote';
import { useMutation } from '@apollo/client';
import { ADD_GOAL } from '../utils/mutations';
import { Link } from "react-router-dom";

const optionsLanguage = [
    { value:'javascript', label: 'JavaScript' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'react', label: 'React' }
]


function EditGoal({quoteText}) {

  const [langState, setLangState] = useState('');

     const [goalState, setGoalState] = useState(0);

    const [addGoal, { error, data }] = useMutation(ADD_GOAL);

    // update state based on form input changes
    const handleChangeLang = (event) => {
        console.log(event);
        const { value } = event;

        setLangState(value);
    };
  
      const handleChangeGoal = (event) => {
        const {value } = event.target;
        setGoalState(value);
    };

console.log(goalState, langState);
    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
 const goalNum = parseInt(goalState);
        try {
            const { data } = await addGoal({
                variables: { language: langState, goalHours: goalNum},
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <EditContainer>
        <QuoteHeader>
        <Quote/>
        </QuoteHeader>
        <Form onSubmit={handleFormSubmit}>
            <InsideForm>
                <FormHeader>
                    <h2>Edit Goal</h2>
                </FormHeader>
                <Dropdown>
                    <FormLabel htmlFor="language">
                       Choose Language 
                    </FormLabel >
                    <Select options={optionsLanguage} type="text" name="language" id="language" value={langState} onChange={handleChangeLang} />
                </Dropdown>
                 <FormGroup>
                    <FormLabel htmlFor="goalHours">How many hours did you devote?</FormLabel>
                    <FormInput type="text" name="goalHours" id="goalHours" value={goalState} onChange={handleChangeGoal} />
                </FormGroup>
                <ButtonContainer to="/Dashboard">
                    <button>Submit</button>
                </ButtonContainer>
            </InsideForm>
        </Form>
        </EditContainer>
    )
}

const EditContainer = Styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
`
const QuoteHeader = Styled.h4
`
  font-style: italic;  
  color: #FFC947;
  font-size: 2rem;
`;


const Form = Styled.form
`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    
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
const ButtonContainer = Styled(Link)
`
    display: flex;
    align-items: center;
    justify-content: center;
`

export default EditGoal ;