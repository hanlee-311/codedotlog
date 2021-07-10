import React from 'react';
import Styled from 'styled-components';
import Select from 'react-select';
import Quote from '../Components/Quote';

const optionsLanguage = [
    { value:'javascript', label: 'JavaScript' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'react', label: 'React' }
]

const optionsHours = [
    { value: '1-5 hours', label: '1-5 Hours' },
    { value: '6-10 hours', label: '6-10 Hours' },
    { value: '11-15 hours', label: '11-15 Hours'},
    { value: '15+ hours', label: '15+ Hours'}
]

function FirstGoal({quoteText}) {

    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <>
        <QuoteHeader>
        <Quote/>
        </QuoteHeader>
        <Form onSubmit={submitHandler}>
            <InsideForm>
                <FormHeader>
                    <h2>Set Your First Goal!</h2>
                </FormHeader>
                <Dropdown>
                    <FormLabel>
                       Choose Language 
                    </FormLabel>
                    <Select options={optionsLanguage} />
                </Dropdown>
                <Dropdown>
                    <FormLabel>
                       How many hours do you want to devote?
                    </FormLabel>
                    <Select options={optionsHours} />
                </Dropdown>
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
`


const Form = Styled.form
`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
`
const InsideForm = Styled.div 
`
    display: block;
    position: relative;
    padding: 2rem 4rem;
    background: #EFEFEF;
    color: #0A1931;
`
const FormHeader = Styled.h2
`
     padding: 3rem 0;
`
const FormLabel = Styled.label
`
    display: block;
    margin-bottom: 5px;

`
const Dropdown = Styled.div 
`
    display: block;
    position: relative;
    padding: 2rem 4rem;
    background: #EFEFEF;
    color: #0A1931;
`


export default FirstGoal;