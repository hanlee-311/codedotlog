import React, {useState, useEffect} from 'react';
import PercentChart from '../Components/PercentChart';
import CreateButton from '../Components/CreateButton';
// import {Doughnut} from 'react-chartjs-2';
import GoalUI from '../Components/GoalListItem';
import Styled from 'styled-components';
import GoalListItem from '../Components/GoalListItem';
import WeeklyProgressModal from '../Components/WeeklyModal';
import checkDay from '../utils/checkDay';


function Dashboard() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        console.log(checkDay())
        if (checkDay()) handleShow();
    }, [])

    return (
        <>
        <WeeklyProgressModal show={show} onClose={handleClose}/>
            <DashboardContainer>
                <GoalList>
                    <GoalListItem/>
            
                </GoalList>
            <PercentChart goalHours={5} progressHours={2} />
            <CreateButton />
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
export default Dashboard;