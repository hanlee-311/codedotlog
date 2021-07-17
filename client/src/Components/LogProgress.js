import React, { useState }  from 'react';
import Styled from 'styled-components';
import Select from 'react-select';
import Quote from '../Components/Quote';
import { useMutation } from '@apollo/client';
import { UPDATE_GOAL } from '../utils/mutations';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';



function LogProgress({quoteText}) {
    const { loading, data } = useQuery(QUERY_ME);

  if (loading) {
    return <div>Loading...</div>;
  };

  if (!loading && data){
    console.log(data.me.goals);
  };

const optionsGoals = data.me.goals.map((item) => {
    return(
        { value: item.language, label: item.language }
    )
});

console.log(optionsGoals);


//   const [goalState, setGoalState] = useState('');

//   const [progressState, setProgressState] = useState(0);

//   const [updateGoal, { error, data }] = useMutation(UPDATE_GOAL);

//     // update state based on form input changes
//     const handleChangeLang = (event) => {
//         console.log(event);
//         const { value } = event;

//         setGoalState(value);
//     };
  
//       const handleChangeGoal = (event) => {
//         const {value } = event.target;
//         setProgressState(value);
//     };

// console.log(goalState, progressState);
//     // submit form
//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
            // setIsEditting(false);
//  const progressNum = parseInt(progressState);
//         try {
//             const { data } = await addGoal({
//                 variables: { progressHours: progressNum},
//             });
//         } catch (e) {
//             console.error(e);
//         }
//     };


  return data.me ? (
    <>
        <QuoteHeader>
        <Quote/>
        </QuoteHeader>
        <Form >
            <InsideForm>
                <FormHeader>
                    <h2>Log Your Progress!</h2>
                </FormHeader>
                <Dropdown>
                    <FormLabel htmlFor="language">
                       Choose Goal 
                    </FormLabel >
                    <Select options={optionsGoals} type="text" name="language" id="language"  />
                </Dropdown>
                 <FormGroup>
                    <FormLabel htmlFor="progressHours">How many hours?</FormLabel>
                    <FormInput type="text" name="goalHours" id="goalHours"  />
                </FormGroup>
                <ButtonContainerLink to="/Dashboard">
                    <button>Submit</button>
                </ButtonContainerLink>
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
