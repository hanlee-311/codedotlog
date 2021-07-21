import React from 'react';
import Styled from 'styled-components';

function progressPercentage({ goalHours, progressHours }) {
    const percentageDone = Math.round(progressHours / goalHours * 100) + "%";

    return (
        <Container>
            <h4 style={{ position: "relative", textAlign: "center", fontSize: "450%", verticalAlign: "center" }}>
                {percentageDone}
            </h4>
        </Container>
    )
};

const Container = Styled.div
    `
    position: absolute;
    verticle-align: center;
    width: 50vh;
    height: 50vh;
    line-height: 50vh;
    padding: 19.7vh 0vh;
    @media (max-width: 1300px) {
        font-size: 190%;
    }
`;

export default progressPercentage;