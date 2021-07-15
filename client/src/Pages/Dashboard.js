import React, {useState, useEffect} from 'react';
import PercentChart from '../Components/PercentChart';
import CreateButton from '../Components/CreateButton';
// import {Doughnut} from 'react-chartjs-2';
import Styled from 'styled-components';
import GoalListItem from '../Components/GoalListItem';
import WeeklyProgressModal from '../Components/WeeklyModal';
import checkDay from '../utils/checkDay';
import EditButton from '../Components/EditButton';


<<<<<<< HEAD
function Dashboard({goals, goals.goalHours, goals.progressHours}) {
//      if (!goals.length) {
//     return <h3>No Goals Yet</h3>;
//   }
=======
function Dashboard() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        console.log(checkDay())
        if (checkDay()) handleShow();
    }, [])

>>>>>>> 085be225fc590aebe986ab4a086a5951b8b2205c
    return (
        <>
        <WeeklyProgressModal show={show} onClose={handleClose}/>
            <DashboardContainer>
                <GoalList>
<<<<<<< HEAD
                    <GoalListItem/>
                </GoalList>
            <PercentChart goalHours={goals.goalHours} progressHours={2} />
=======
                    <GoalListItem/>            
                </GoalList>
            <PercentChart goalHours={5} progressHours={2} />
            <ButtonContainer>
>>>>>>> 085be225fc590aebe986ab4a086a5951b8b2205c
            <CreateButton />
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