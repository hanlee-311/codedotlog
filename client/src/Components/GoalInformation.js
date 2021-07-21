import React from 'react';
import Styled from 'styled-components';

function GoalInformation({ goalHours, progressHours, language }) {
    const totalLeft = goalHours - progressHours;
    const goal = totalLeft;
    const progress = progressHours;

    return (
        <InformationContainer>
            <h3 style={{marginBottom: "1em", textAlign:"center"}}>{language}</h3>
            <Progress>
                <ColorBox style={{ backgroundColor: "#FFC947" }} />
                <p>= {progress} hrs complete</p>
            </Progress>
            <Goals>
                <ColorBox style={{ backgroundColor: "#185ADB" }} />
                <p>= {goal} hrs left</p>
            </Goals>
        </InformationContainer>
    )
};

const InformationContainer = Styled.div
    `
    background-color: #00000076;
    border: solid white 2px;
    border-radius: 5px;
    padding: 2em 1em 1em;
    margin-left: -25%;
    position: absolute;
    @media (max-width: 950px){
        position: static;
        max-width: 50%;
        -webkit-transform: translate(100%, 0%);
        transform: translate(100%, 0%);
        margin-bottom: 1em;
    }
`

const Goals = Styled.div
    `   
    display: flex;
`

const Progress = Styled.div
    `
    display: flex;
`

const ColorBox = Styled.div
    `
    border: solid white 2px;
    padding: 0.5em 1em;
    margin: 0em 1em 1em;
`

export default GoalInformation;