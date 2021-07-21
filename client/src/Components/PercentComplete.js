import React from 'react';
import Styled from 'styled-components';

function progressPercentage({ goalHours, progressHours }) {
    const percentageDone = Math.round(progressHours / goalHours * 100) + "%";

    return (
        <Container>
            <h4 style={{ position: "relative", textAlign: "center", fontSize: "500%" }}>
                {percentageDone}
            </h4>
        </Container>
    )
};

const Container = Styled.div
    `
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(50%, 0%);
    transform: translate(-50%, 180%);
    @media (max-width: 950px){
        -webkit-transform: translate(50%, 0%);
        transform: translate(-50%, 460%);
    }
`;

export default progressPercentage;