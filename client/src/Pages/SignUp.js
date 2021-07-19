import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Styled from 'styled-components';

function SignUp() {

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
            Auth.signup(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Form onSubmit={handleFormSubmit}>
            <InsideForm>
                <SignInUp>
                    <Link to="/Login">
                        <SignInUpText>Already a member? Login!</SignInUpText>
                    </Link>
                </SignInUp>
                <FormHeader>Sign Up</FormHeader>
                {(error !== "") ? (<div className="error">{error}</div>) : ""}
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
                    <FormInput type="password" name="password" id="password" placeholder="********" value={formState.password} onChange={handleChange} />
                </FormGroup>
                {/* <Link to="/SetGoal">                */}
                <div>
                    <button>Sign Up!</button>
                </div>
                {/* </Link> */}
            </InsideForm>
        </Form>
    );
}

const Form = Styled.form
    `
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
`
const SignInUp = Styled.div
`
    display: inline-block;
    flex-direction: row;
    overflow: hidden;
`
const SignInUpText = Styled.h4
`
    font-size: 1rem;
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
export default SignUp;