import React, {useState, useEffect} from 'react';
import PercentChart from '../Components/PercentChart';
import CreateButton from '../Components/CreateButton';
// import {Doughnut} from 'react-chartjs-2';
import Styled from 'styled-components';
import GoalListItem from '../Components/GoalListItem';
import WeeklyProgressModal from '../Components/WeeklyModal';
import checkDay from '../utils/checkDay';
import EditButton from '../Components/EditButton';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

function Dashboard() {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        console.log(checkDay())
        if (checkDay()) handleShow();
    }, []);

const [isEditting, setIsEditting] = useState(false);
console.log(isEditting);


// const handleEditClick = (event) => {
//     event.preventDefault();
//     setIsEditting(true);
//     console.log(isEditting);
//   };



    return (
        <>
        <WeeklyProgressModal show={show} onClose={handleClose}/>
            <DashboardContainer>
                <GoalList>
                    <GoalListItem/>            
                </GoalList>
            <PercentChart goalHours={10}  progressHours={2} />
            <ButtonContainer>
            <CreateButton/>
            <EditButton/>
            </ButtonContainer>
            </DashboardContainer>
        </>
    )
};

const DashboardContainer = Styled.div
`
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    max-height: 90vh;
    // padding: 
`
const GoalList = Styled.div
`
    flex-direction: row;
    display: flex;
    margin: 2rem;
`

const ButtonContainer = Styled.div
`
    display: flex;
    flex-direction: row;
    margin: 0 2rem;
    min-width: 80%;
    justify-content: space-between;
    align-items: center
`
export default Dashboard;