import React, { useState }  from 'react';
import Styled from 'styled-components';
import Select from 'react-select';
import Quote from '../Components/Quote';
import { useMutation } from '@apollo/client';
import { ADD_GOAL } from '../utils/mutations';

const optionsLanguage = [
    { value:'javascript', label: 'JavaScript' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'react', label: 'React' }
]

// const optionsHours = [
//     { value: '1-5', label: '1-5 Hours' },
//     { value: '6-10', label: '6-10 Hours' },
//     { value: '11-15', label: '11-15 Hours'},
//     { value: '15', label: '15+ Hours'}
// ]

function FirstGoal({quoteText}) {

  const [langState, setLangState] = useState({
        language: '',
    });

     const [goalState, setGoalState] = useState({
        goalHours: '',
    });

    const [addGoal, { error, data }] = useMutation(ADD_GOAL);

    // update state based on form input changes
    const handleChangeLang = (event) => {
        console.log(event);
        const { value } = event;

        setLangState({language: value});
    };
  

      const handleChangeGoal = (event) => {
        const { name, value } = event.target;
        setGoalState({
            ...goalState,
            [name]: value,
        });
    };

console.log(goalState, langState);
    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addGoal({
                variables: { goalState, langState },
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
        <QuoteHeader>
        <Quote/>
        </QuoteHeader>
        <Form onSubmit={handleFormSubmit}>
            <InsideForm>
                <FormHeader>
                    <h2>Set Your First Goal!</h2>
                </FormHeader>
                <Dropdown>
                    <FormLabel htmlFor="language">
                       Choose Language 
                    </FormLabel >
                    <Select options={optionsLanguage} type="text" name="language" id="language" value={langState.language} onChange={handleChangeLang} />
                </Dropdown>
                 <FormGroup>
                    <FormLabel htmlFor="goalHours">How many hours do you want to devote?</FormLabel>
                    <FormInput type="text" name="goalHours" id="goalHours" value={goalState.goalHours} onChange={handleChangeGoal} />
                </FormGroup>
                <div>
                    <button>Submit</button>
                </div>
            </InsideForm>
        </Form>
        </>
    )
}

const QuoteHeader = Styled.h4
`
  font-style: italic;  
  color: #FFC947;
  font-size: 2rem;
  text-align:center;
`;


const Form = Styled.form
`
    height: 100vh;
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
     padding: 3rem 0;
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

export default FirstGoal ;