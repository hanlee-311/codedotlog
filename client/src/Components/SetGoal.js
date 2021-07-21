import React, { useState, useEffect } from 'react';
import Styled, { keyframes } from 'styled-components';
import Select from 'react-select';
import Quote from '../Components/Quote';
import { useMutation } from '@apollo/client';
import { ADD_GOAL } from '../utils/mutations';
import { Link, useHistory } from 'react-router-dom';
import Loading from './Loading';
import Footer from './Footer';

const optionsLanguage = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'react', label: 'React' },
    { value: 'perl', label: 'Perl' },
    { value: 'c++', label: 'C++' },
    { value: 'java', label: 'Java' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'webAssembly', label: 'WebAssembly' },
    { value: 'python', label: 'Python' },
]

function SetGoal({ quoteText }) {
    const history = useHistory();
    const [langState, setLangState] = useState('');
    const [goalState, setGoalState] = useState(0);
    const [addGoal, { error, data }] = useMutation(ADD_GOAL);
    const [isLoading, setIsLoading] = useState(true);
    const [errMessage, setErrorMessage] = useState("");

    const handleChangeLang = (event) => {
        const { value } = event;

        setLangState(value);
    };

    const handleChangeGoal = (event) => {
        const { value } = event.target;
        setGoalState(value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const goalNum = parseInt(goalState);
        
        if(goalNum===0 || langState==='' || isNaN(goalNum)===true){
            setErrorMessage("Please select language and hours.");
        } else {
            try {
                const { data } = await addGoal({
                    variables: { language: langState, goalHours: goalNum },
                });
                history.push('/Dashboard');
            } catch (e) {
                console.error(e);
            }
        };
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        setTimeout(() => {
            setIsLoading(true);
        }, 5000);
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
                                <Select options={optionsLanguage} type="text" name="language" id="language" inValue={langState} onChange={handleChangeLang} />
                            </Dropdown>
                            <FormGroup>
                                <FormLabel htmlFor="goalHours">How many hours do you want to devote?</FormLabel>
                                <FormInput type="text" name="goalHours" id="goalHours" value={goalState} onChange={handleChangeGoal} />
                            </FormGroup>
                            <Link to="Dashboard"><NavButton>Return</NavButton></Link>
                            <button type="submit">Submit</button>
                            <p>{errMessage}</p>
                        </InsideForm>
                    </Form>
                </GoalContainer>
            </div>
            <Footer/>
        </>
    )
}

const GoalContainer = Styled.div
    `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
`;

const QuoteAnimation = keyframes
    `
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const QuoteHeader = Styled.h4
    `
  font-style: italic;  
  color: #FFC947;
  font-size: 2rem;
  text-align: center;
  margin: 0em 1em;
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
`;

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
`;

const NavButton = Styled.button`
    margin-right: 7rem;
    color: #185ADB;
    padding: 1rem 1.7rem;
    display: inline-block;
    margin-left: 8%;
`;

export default SetGoal;