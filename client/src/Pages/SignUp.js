import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import SignUpSection from '../Components/SignUpSection';
import Auth from '../utils/auth';
import Styled from 'styled-components';


function SignUp(){
    // const [details, setDetails] = useState({firstName: "", lastName: "", email: "", password: ""});

    const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.warn('HERE', data);
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

    return(
        <Form onSubmit={handleFormSubmit}>
            <InsideForm>
                <FormHeader>Sign Up</FormHeader>
                {(error !== "") ? ( <div className="error">{error}</div>) : ""}
                <FormGroup>
                    <FormLabel htmlFor="first-name">First Name:</FormLabel>
                    <FormInput type="text" name="firstName" id="first-name" value={formState.firstName} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="last-name">Last Name:</FormLabel>
                    <FormInput type="text" name="lastName" id="last-name" value={formState.lastName} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <FormInput type="email" name="email" id="email" placeholder="Your email" value={formState.email} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="password">Password:</FormLabel>
                    <FormInput type="password" name="password" id="password" placeholder="********" value={formState.password} onChange={handleChange}/>
                </FormGroup>
                <div>
                    <button>Login</button>
                    <ForgotButton>forgot your password?</ForgotButton>
                </div>
            </InsideForm>
        </Form>
            
        
    );
}

const Form = Styled.form
`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
`
const SignInUp = Styled.div
`
    font-size: 12px;
    display: inline-block;
    // justify-content: space-between;
    flex-direction: row;
    overflow: hidden;
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
    padding: 2rem 0;
`
const FormGroup = Styled.div
`
    display: block;
    width: 300px;
    margin-bottom: 15px;
    margin: 1rem 0;
`
const FormLabel = Styled.label
`
    display: block;
    margin-bottom: 5px;

`
const FormInput = Styled.input
`
    display: block;
    width: 100%;
    padding: 10px 15px;
    background-color: #EFEFEF;
    border-radius: 6px;
    transition: 0.4s;

`
const ForgotButton = Styled.button
`
    background: none;
    font-size: 10px;
`

export default SignUp;