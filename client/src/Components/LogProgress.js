import React, { useState }  from 'react';
import Styled from 'styled-components';
import Select from 'react-select';
import Quote from '../Components/Quote';
import { useMutation } from '@apollo/client';
import { UPDATE_GOAL } from '../utils/mutations';
import { Link, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';




function LogProgress({quoteText, setIsEditting}) {
    const history = useHistory();

    const { loading, data } = useQuery(QUERY_ME);

    const [idState, setIdState] = useState('');

    const [progressState, setProgressState] = useState(0);

    const [updateGoal, { error, selection }] = useMutation(UPDATE_GOAL);

    // update state based on form input changes
    const handleChangeGoal = (event) => {
        console.log(event);
        const { value } = event;
        const goalArray = data.me.goals;
        const selectedGoal = goalArray.find(goal => goal.language == value);
        setIdState(selectedGoal._id);
    };
  
      const handleChangeHours = (event) => {
        const { value } = event.target;
        setProgressState(value);
    };

console.log("goalId:", idState,"progressHours:", progressState);


const goalId= idState;
const progressNum = parseInt(progressState);
console.log("goalId:", goalId,"progressHours:", progressNum);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await updateGoal({
                variables: { goalId: goalId, progressHours: progressNum},
            });
            history.push('/Dashboard');

        } catch (e) {
            console.error(e);
        }
    };
  if (loading) {
    return <div>Loading...</div>;
  };


const optionsGoals = data.me.goals.map((item) => {
    return(
        { value: item.language, label: item.language }
    )
});


  return data.me ? (
    <>
        <QuoteHeader>
        <Quote/>
        </QuoteHeader>
        <Form onSubmit={handleFormSubmit}>
            <InsideForm>
                <FormHeader>
                    <h2>Log Your Progress!</h2>
                </FormHeader>
                <Dropdown>
                    <FormLabel htmlFor="language">
                       Choose Goal 
                    </FormLabel >
                    <Select options={optionsGoals} type="text" name="language" id="language" value={idState} onChange={handleChangeGoal}  />
                </Dropdown>
                 <FormGroup>
                    <FormLabel htmlFor="progressHours">How many hours?</FormLabel>
                    <FormInput type="text" name="progressHours" id="progressHours" value={progressState} onChange={handleChangeHours}  />
                </FormGroup>
                    <button type="submit">Submit</button>
            </InsideForm>
        </Form>
        </>
  ): null;
};
const GoalContainer = Styled.div
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
const ButtonContainerLink = Styled(Link)
`
    display: flex;
    align-items: center;
    justify-content: center;
`

export default LogProgress;
