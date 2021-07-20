import React, { useState } from 'react';
import Styled from 'styled-components';
import { Link } from "react-router-dom";
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';


function LoginSection() {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });

    const [loginUser, { error }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        console.log(event.target)

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        console.log(form)

        try {
            const { data } = await loginUser({
                variables: { ...formState },
            });
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Form onSubmit={handleFormSubmit}>
            <InsideForm>
                <SignInUp>
                    <Link to="/SignUp">
                        <SignInUpText>Not already a member? Sign Up!</SignInUpText>
                    </Link>
                </SignInUp>
                <FormHeader>Login</FormHeader>
                {/* {(error !== "") ? (<div className="error">{error}</div>) : ""} */}

                <FormGroup>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <FormInput type="email" name="email" id="email" onChange={handleChange} value={formState.email} />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="password">Password:</FormLabel>
                    <FormInput type="password" name="password" id="password" onChange={handleChange} value={formState.password} />
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
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    max-width: 100%;
    
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
const ForgotButton = Styled.button
    `
    background: none;
    font-size: 10px;
`

export default LoginSection;