import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Styled from 'styled-components';

function WeeklyProgressModal(props) {


    return (
        <>
            <Modal show={props.show} onHide={props.onClose}>
                <Modal.Header>
                    <StyledTitle>
                        <Modal.Title>Weekly Progress Report</Modal.Title>
                    </StyledTitle>
                </Modal.Header>
                <StyledBody>
                <Modal.Body>Here's a look at your progress over the past week:</Modal.Body>
                </StyledBody>
                <Modal.Footer>
                    <button variant="secondary" onClick={props.onClose}>
                        Close
            </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

const StyledTitle = Styled.div
    `
    color: #185ADB;
    `
const StyledBody = Styled.div
    `
    color: #0A1931;
    `
    

export default WeeklyProgressModal;