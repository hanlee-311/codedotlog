import React, { useState } from 'react';
import Styled from 'styled-components';
import { Link } from "react-router-dom";

function LoginSection({ Login, error }) {
    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return (
        <Form onSubmit={submitHandler}>
            <InsideForm>
                <SignInUp>
                    <Link to="/SignUp">
                        <h4>Not already a member?</h4>
                        <h4>Sign Up!</h4> 
                    </Link>
                </SignInUp>
                <FormHeader>Login</FormHeader>
                {(error !== "") ? (<div className="error">{error}</div>) : ""}
                <FormGroup>
                    <FormLabel htmlFor="name">Name:</FormLabel>
                    <FormInput type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="name">Email:</FormLabel>
                    <FormInput type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="password">Password:</FormLabel>
                    <FormInput type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
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
// const SignInUpText = Styled.h4
// `
//     flex-direction: row;
// `
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