import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import Styled, { keyframes } from 'styled-components';
import Footer from '../Components/Footer';

function SignUp() {
    const [errMessage, setErrorMessage] = useState("");

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!formState.firstName == '' || !formState.lastName == '' || !formState.email == ''){
            if(formState.password.length <= 6) {
                setErrorMessage("Password must be more than 5 characters!")
            } else {
                try {
                    const { data } = await addUser({
                        variables: { ...formState },
                    });
                    Auth.signup(data.addUser.token);
                } catch (e) {
                    setErrorMessage("This email is already in use.");
                    console.error(e);
                }
            }
        } else {
            setErrorMessage("Credentials did not fit parameters. Please try again.");
        }
    };

    return (
        <>
            <Form onSubmit={handleFormSubmit}>
                <BigCircle></BigCircle>
                <LittleCircle></LittleCircle>
                <LeftCircle></LeftCircle>
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
                    <div>
                        <button>Sign Up!</button>
                    </div>
                    <p>{errMessage}</p>
                </InsideForm>
            </Form>
            <Footer />
        </>
    );
};

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
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    animation-name: ${FormAnimation};
    animation-duration: 1s;
    animation-iteration-count: once;
    animation-fill-mode: forwards;
`;

const SignInUp = Styled.div
    `
    display: inline-block;
    flex-direction: row;
    overflow: hidden;
`;

const SignInUpText = Styled.h4
    `
    font-size: 1rem;
`;

const InsideForm = Styled.div
    `
    display: block;
    position: relative;
    padding: 2rem 4rem;
    border-radius: 10px;
    background: #EFEFEF;
    color: #0A1931;
`;

const FormHeader = Styled.h2
    `
    padding: 2rem 0;
`;

const FormGroup = Styled.div
    `
    display: block;
    width: 300px;
    margin-bottom: 15px;
    margin: 1rem 0;
`;

const FormLabel = Styled.label
    `
    display: block;
    margin-bottom: 5px;
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

const BigCircle = Styled.div
    `
    height: 25vh;
    width: 25vh;
    background-color: #FFC947;
    border-radius: 50%;
    position: absolute;
    left: 75%;
    top: 15%;
    z-index: -1;
    @media (max-width: 1300px){
        display: none;
        }
`;

const LittleCircle = Styled.div
    `  
    height: 15vh;
    width: 15vh;
    background-color: #FFC947;
    border-radius: 50%;
    position: absolute;
    left: 85%;
    top: 45%;
    z-index: -1;
    @media (max-width: 1300px){
        display: none;
        }
`;

const LeftCircle = Styled.div
    `
    height: 15vh;
    width: 15vh;
    background-color: #FFC947;
    border-radius: 50%;
    position: absolute;
    left: 5%;
    top: 70%;
    z-index: -1;
    @media (max-width: 1300px){
        display: none;
        }
`;

export default SignUp;