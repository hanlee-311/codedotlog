import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
function WeeklyProgressModal(props) {
    const { data } = useQuery(QUERY_ME);
    console.log(data);
    // const language = data?.me?.language;
    // const progress = data?.me?.progressHours;
    // const goalHours = data?.me?.goalHours;

    // console.log(language, progress, goalHours);
    return (
        <>
            <Modal show={props.show} onHide={props.onClose}>
                <Modal.Header>
                    <StyledTitle>
                        <Modal.Title>Weekly Progress Report</Modal.Title>
                    </StyledTitle>
                </Modal.Header>
                <StyledBody>
                    <Modal.Body>Hi, {data.me.firstName}! Here's a look at your progress over the past week:
                            {data.me.goals.map((goal) => {
                                return (
                                    <ul>  
                                        <li key={goal._id}>
                                            {`${goal.language}: ${goal.progressHours} of ${goal.goalHours} hours complete!`}
                                        </li>
                                    </ul>)
                                })}
                    </Modal.Body>
                </StyledBody>
                <Modal.Footer>
                    <button variant="secondary" onClick={props.onClose}>
                        Close
            </button>
                </Modal.Footer>
            </Modal>
        </>
    )};
const StyledTitle = Styled.div
    `
    color: #185ADB;
    `
const StyledBody = Styled.div
    `
    color: #0A1931;
    `
export default WeeklyProgressModal;