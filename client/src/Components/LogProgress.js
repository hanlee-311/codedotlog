import React, { useState }  from 'react';
import Styled from 'styled-components';
import Select from 'react-select';
import Quote from '../Components/Quote';
import { useMutation } from '@apollo/client';
// import { UPDATE_GOAL } from '../utils/mutations';
import { Link } from 'react-router-dom';

function LogProgress() {
  return (
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
                       Choose Language 
                    </FormLabel >
                    <Select options={optionsLanguage} type="text" name="language" id="language" value={langState} onChange={handleChangeLang} />
                </Dropdown>
                 <FormGroup>
                    <FormLabel htmlFor="progressHours">How many hours do you want to devote?</FormLabel>
                    <FormInput type="text" name="goalHours" id="goalHours" value={goalState} onChange={handleChangeGoal} />
                </FormGroup>
                <Link to="/Dashboard">
                <div>
                    <button>Submit</button>
                </div>
                </Link>
            </InsideForm>
        </Form>
        </>
  );
}

export default LogProgress;
